#!/usr/bin/env node
/**
 * where-is-field-used.js
 *
 * Mimics the Salesforce Setup "Where is this used?" feature for a field.
 * Queries the Tooling API's MetadataComponentDependency to find every
 * metadata component that references the given field.
 *
 * Usage:
 *   node where-is-field-used.js <ObjectName>.<FieldName> [--target-org <alias>]
 *
 * Output: JSON on stdout. Errors on stderr with non-zero exit code.
 *
 * No external dependencies — uses only Node.js built-ins, and shells out to
 * the `sf` CLI for all org interaction. Cross-platform: works on macOS,
 * Linux, and Windows.
 */

'use strict';

const { execFileSync } = require('child_process');

function parseArgs(argv) {
  const args = { positional: [], targetOrg: null, types: [], help: false };
  const pushTypes = v => {
    if (v) args.types.push(...v.split(',').map(s => s.trim()).filter(Boolean));
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--target-org' || a === '-o') {
      args.targetOrg = argv[++i];
    } else if (a.startsWith('--target-org=')) {
      args.targetOrg = a.slice('--target-org='.length);
    } else if (a === '--type' || a === '-t') {
      pushTypes(argv[++i]);
    } else if (a.startsWith('--type=')) {
      pushTypes(a.slice('--type='.length));
    } else if (a === '--help' || a === '-h') {
      args.help = true;
    } else if (a.startsWith('-')) {
      throw new Error(`Unknown option: ${a}`);
    } else {
      args.positional.push(a);
    }
  }
  return args;
}

function usage() {
  return [
    'Usage: node where-is-field-used.js <ObjectName>.<FieldName>',
    '         [--target-org <alias>] [--type <MetadataType>[,<MetadataType>...]]...',
    '',
    'Finds all metadata components that reference the given field, using the',
    'Tooling API\'s MetadataComponentDependency object (the same source the',
    'Salesforce Setup "Where is this used?" page uses).',
    '',
    'Options:',
    '  --target-org, -o   Org alias or username (defaults to the configured default org).',
    '  --type, -t         Restrict results to one or more MetadataComponentType values.',
    '                     Repeatable, or comma-separated. Case-sensitive — must match',
    '                     the API value exactly (e.g. ApexClass, Flow, FlexiPage,',
    '                     Layout, CustomField, ValidationRule, EmailTemplate).',
    '',
    'Examples:',
    '  node where-is-field-used.js Account.Industry',
    '  node where-is-field-used.js Opportunity.MyCustom__c --target-org my-sandbox',
    '  node where-is-field-used.js Property__c.Status__c --type ApexClass',
    '  node where-is-field-used.js Property__c.Status__c --type ApexClass,Flow',
    '  node where-is-field-used.js Property__c.Status__c -t FlexiPage -t Layout',
  ].join('\n');
}

function runSf(cliArgs) {
  // On Windows the SF CLI is typically `sf.cmd` (npm install) or `sf.exe`
  // (standalone installer); execFile does not search PATHEXT, so we try
  // candidates in order and only fall through on ENOENT (binary not found).
  const candidates = process.platform === 'win32'
    ? ['sf.cmd', 'sf.exe', 'sf']
    : ['sf'];
  let lastNotFound;
  for (const bin of candidates) {
    try {
      return execFileSync(bin, cliArgs, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
        maxBuffer: 64 * 1024 * 1024,
      });
    } catch (e) {
      if (e.code === 'ENOENT') { lastNotFound = e; continue; }
      // Non-ENOENT errors mean the binary ran but exited non-zero. The CLI
      // emits structured JSON on failure when --json is passed, so prefer
      // stdout (which holds that JSON) over stderr.
      const stdout = e.stdout && e.stdout.toString();
      if (stdout) return stdout;
      const msg = (e.stderr && e.stderr.toString()) || e.message;
      throw new Error(`\`${bin} ${cliArgs.join(' ')}\` failed: ${msg.trim()}`);
    }
  }
  throw new Error(`Could not find sf CLI on PATH (tried: ${candidates.join(', ')}). ${lastNotFound ? lastNotFound.message : ''}`);
}

function toolingQuery(soql, targetOrg) {
  const cliArgs = ['data', 'query', '--query', soql, '--use-tooling-api', '--json'];
  if (targetOrg) cliArgs.push('--target-org', targetOrg);
  const raw = runSf(cliArgs);
  let parsed;
  try { parsed = JSON.parse(raw); }
  catch { throw new Error(`Could not parse \`sf data query\` output as JSON: ${raw.slice(0, 500)}`); }
  if (parsed.status !== 0) {
    const msg = parsed.message || (parsed.result && parsed.result.message) || JSON.stringify(parsed);
    throw new Error(`Tooling query failed: ${msg}`);
  }
  return (parsed.result && parsed.result.records) || [];
}

function escapeSoql(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function findFieldDefinition(objectName, fieldName, targetOrg) {
  const soql =
    `SELECT DurableId, QualifiedApiName, DataType, Label, ` +
    `EntityDefinition.DurableId, EntityDefinition.QualifiedApiName ` +
    `FROM FieldDefinition ` +
    `WHERE EntityDefinition.QualifiedApiName = '${escapeSoql(objectName)}' ` +
    `AND QualifiedApiName = '${escapeSoql(fieldName)}'`;
  return toolingQuery(soql, targetOrg)[0] || null;
}

function findCustomFieldId(entityDurableId, fieldName, targetOrg) {
  if (!fieldName.endsWith('__c')) return null;
  const developerName = fieldName.slice(0, -'__c'.length);
  // CustomField.TableEnumOrId holds the API name for standard objects
  // (e.g. "Account") and the 15-char object Id for custom objects
  // (e.g. "01Ifj000005tYnl"). EntityDefinition.DurableId resolves to the
  // correct value in both cases.
  const soql =
    `SELECT Id, DeveloperName, TableEnumOrId, NamespacePrefix ` +
    `FROM CustomField ` +
    `WHERE TableEnumOrId = '${escapeSoql(entityDurableId)}' ` +
    `AND DeveloperName = '${escapeSoql(developerName)}'`;
  const records = toolingQuery(soql, targetOrg);
  return records[0] ? records[0].Id : null;
}

function findDependencies(refId, types, targetOrg) {
  let where = `RefMetadataComponentId = '${escapeSoql(refId)}'`;
  if (types && types.length > 0) {
    const inList = types.map(t => `'${escapeSoql(t)}'`).join(', ');
    where += ` AND MetadataComponentType IN (${inList})`;
  }
  const soql =
    `SELECT MetadataComponentId, MetadataComponentName, MetadataComponentType, ` +
    `MetadataComponentNamespace, RefMetadataComponentId, RefMetadataComponentName, ` +
    `RefMetadataComponentType ` +
    `FROM MetadataComponentDependency ` +
    `WHERE ${where}`;
  return toolingQuery(soql, targetOrg);
}

function shapeReferences(records) {
  return records.map(r => ({
    type: r.MetadataComponentType,
    name: r.MetadataComponentName,
    id: r.MetadataComponentId,
    namespace: r.MetadataComponentNamespace || null,
  }))
  .sort((a, b) => (a.type || '').localeCompare(b.type || '') || (a.name || '').localeCompare(b.name || ''));
}

function groupByType(refs) {
  const out = {};
  for (const r of refs) {
    const t = r.type || 'Unknown';
    (out[t] = out[t] || []).push({ name: r.name, id: r.id, namespace: r.namespace });
  }
  return out;
}

function main() {
  let args;
  try { args = parseArgs(process.argv); }
  catch (e) { console.error(e.message); console.error(usage()); process.exit(2); }

  if (args.help) { console.log(usage()); return; }
  if (args.positional.length !== 1) {
    console.error('Expected exactly one positional argument: <ObjectName>.<FieldName>');
    console.error(usage());
    process.exit(2);
  }

  const fqn = args.positional[0];
  const m = fqn.match(/^([A-Za-z0-9_]+)\.([A-Za-z0-9_]+)$/);
  if (!m) {
    console.error(`Invalid field reference: "${fqn}". Expected format ObjectName.FieldName.`);
    process.exit(2);
  }
  const [, objectName, fieldName] = m;
  const isCustom = fieldName.endsWith('__c');

  const fieldDef = findFieldDefinition(objectName, fieldName, args.targetOrg);
  if (!fieldDef) {
    console.error(`Field not found: ${objectName}.${fieldName}`);
    process.exit(3);
  }

  const entityDurableId = (fieldDef.EntityDefinition && fieldDef.EntityDefinition.DurableId) || objectName;
  const customFieldId = findCustomFieldId(entityDurableId, fieldName, args.targetOrg);

  // MetadataComponentDependency uses the CustomField Id (00N...) for custom
  // fields. For standard fields, dependency tracking is limited / often empty.
  const refId = customFieldId || fieldDef.DurableId;
  let dependencies = [];
  let dependencyError = null;
  try {
    dependencies = findDependencies(refId, args.types, args.targetOrg);
  } catch (e) {
    dependencyError = e.message;
  }

  const refs = shapeReferences(dependencies);

  const output = {
    field: {
      object: objectName,
      field: fieldName,
      label: fieldDef.Label || null,
      dataType: fieldDef.DataType || null,
      durableId: fieldDef.DurableId || null,
      customFieldId: customFieldId,
      isCustom,
    },
    queriedRefId: refId,
    filterTypes: args.types.length > 0 ? args.types : null,
    referenceCount: refs.length,
    referencesByType: groupByType(refs),
    references: refs,
    dependencyError,
    notes: !isCustom && refs.length === 0
      ? 'MetadataComponentDependency tracking is limited for standard fields; an empty result does not guarantee no usages.'
      : null,
  };

  process.stdout.write(JSON.stringify(output, null, 2) + '\n');
}

try { main(); }
catch (e) { console.error(e && e.stack ? e.stack : String(e)); process.exit(1); }
