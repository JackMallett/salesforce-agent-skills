---
name: salesforce-dev
description: >-
  Salesforce development with the SF CLI and Metadata API. Use when the user
  needs to create or modify custom objects, custom fields, profiles, or
  permission sets; deploy or retrieve metadata; query data with SOQL; describe
  sObjects; manage field-level security (FLS); or perform any Salesforce
  development task using the sf CLI. Triggers include requests to "create a
  custom object", "add a field", "deploy metadata", "retrieve metadata",
  "run a SOQL query", "describe an object", "grant FLS", "set up a lookup
  relationship", "create a master-detail field", or any Salesforce org
  interaction via CLI.
allowed-tools: Bash(sf:*), Bash(jq:*), Bash(node:*)
---

# Salesforce Development with SF CLI

## Critical Rules

These rules prevent common deployment failures. Read before every metadata change.

1. **FLS is NOT auto-granted via Metadata API.** When deploying custom fields with `sf project deploy start`, Field-Level Security is NOT automatically granted to any profile — not even System Administrator. You MUST deploy Admin profile metadata alongside custom fields or the fields will exist but be invisible. See [field-level-security.md](references/tasks/field-level-security.md).

2. **Always dry-run before deploying.** Use `--dry-run` to catch errors before they hit the org. Check the output for failures before running the real deploy.

3. **Always retrieve after deploying.** Run `sf project retrieve start` after deployment to capture auto-generated metadata (action overrides, feature flags like `trackTrending`, `enableBulkApi`, etc.) that the org adds to your metadata.

4. **Use `jq` for JSON parsing.** All SF CLI commands support `--json` output. Parse with `jq`. Use `node` only if you need more complex processing.

## Metadata Deployment Workflow

Every metadata change follows this process:

### 1. Create or modify XML metadata files

Place files under `force-app/main/default/` following these path conventions:

```
force-app/main/default/
├── objects/
│   └── MyObject__c/
│       ├── MyObject__c.object-meta.xml          # Object definition
│       ├── fields/
│       │   └── MyField__c.field-meta.xml        # Field definitions
│       └── validationRules/
│           └── MyRule.validationRule-meta.xml    # Validation rules
└── profiles/
    └── Admin.profile-meta.xml                   # Profile with FLS
```

For XML templates, browse [references/metadata-templates/](references/metadata-templates/).

### 2. Dry-run the deployment

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/MyObject__c \
  --source-dir force-app/main/default/profiles/Admin.profile-meta.xml \
  --target-org <alias> --dry-run --json 2>&1 | \
  jq '{status: .result.status, files: [.result.files[] | {state, fullName, type}], failures: [.result.details.componentFailures[]? | {fullName, problem}]}'
```

If `failures` is non-empty, fix the issues before deploying. Common errors:
- `"Cannot set sharingModel to ReadWrite on a CustomObject with a MasterDetail relationship field"` — Change `sharingModel` to `ControlledByParent`. See [relationships.md](references/tasks/relationships.md).
- `"You cannot deploy to a required field: ..."` — Required fields don't need FLS entries in the profile. Remove them. See [field-level-security.md](references/tasks/field-level-security.md).

### 3. Deploy

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/MyObject__c \
  --source-dir force-app/main/default/profiles/Admin.profile-meta.xml \
  --target-org <alias> --json 2>&1 | \
  jq '{status: .result.status, files: [.result.files[] | {state, fullName, type}]}'
```

### 4. Retrieve to capture auto-generated metadata

```bash
sf project retrieve start \
  --metadata "CustomObject:MyObject__c" \
  --target-org <alias> --json 2>&1 | \
  jq '[.result.files[] | {state, fullName, type}]'
```

### 5. Verify

```bash
sf sobject describe --sobject MyObject__c --target-org <alias> --json 2>&1 | \
  jq '[.result.fields[] | select(.custom == true) | {name, type, label}]'
```

## Essential SF CLI Commands

Quick reference for the most common commands. For full syntax, response shapes, and more `jq` one-liners, see [references/cli/commands.md](references/cli/commands.md).

| Command | Purpose |
|---------|---------|
| `sf project deploy start --source-dir <path> --target-org <alias> --json` | Deploy metadata |
| `sf project retrieve start --metadata "<Type>:<Name>" --target-org <alias> --json` | Retrieve metadata |
| `sf sobject describe --sobject <Name> --target-org <alias> --json` | Describe an object |
| `sf data query --query "<SOQL>" --target-org <alias> --json` | Run a SOQL query |
| `sf data query --query "<SOQL>" --target-org <alias> --use-tooling-api --json` | Query Tooling API |
| `sf org list --json` | List connected orgs |
| `sf org display --target-org <alias> --json` | Display org details |

## What Are You Working On?

Navigate to the right reference for your task:

| Task | Reference |
|------|-----------|
| Creating or modifying custom objects or fields | [custom-objects-and-fields.md](references/tasks/custom-objects-and-fields.md) |
| Creating formula or roll-up summary fields | [formulas-and-rollups.md](references/tasks/formulas-and-rollups.md) |
| Creating validation rules | [validation-rules.md](references/tasks/validation-rules.md) |
| Setting up Lookup or Master-Detail relationships | [relationships.md](references/tasks/relationships.md) |
| Fields not visible / FLS issues | [field-level-security.md](references/tasks/field-level-security.md) |
| Granting access to profiles or permission sets | [profiles-and-permissions.md](references/tasks/profiles-and-permissions.md) |
| Need an XML template for a specific metadata type | [metadata-templates/](references/metadata-templates/) (browse directory) |
| Need full SF CLI command syntax or response shapes | [commands.md](references/cli/commands.md) |
