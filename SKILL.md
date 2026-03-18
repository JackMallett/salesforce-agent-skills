---
name: salesforce-dev
description: >-
  Salesforce development with the SF CLI and Metadata API. Use when the user
  needs to create or modify custom objects, custom fields, profiles, or
  permission sets; deploy or retrieve metadata; query data with SOQL; describe
  sObjects; manage field-level security (FLS); create custom tabs, list views,
  compact layouts, or custom buttons; configure feed tracking; modify page
  layouts; activate Lightning pages; or perform any Salesforce development
  task using the sf CLI. Triggers include requests to "create a custom object",
  "add a field", "deploy metadata", "retrieve metadata", "run a SOQL query",
  "describe an object", "grant FLS", "set up a lookup relationship", "create a
  master-detail field", "create a list view", "create a compact layout",
  "add a custom button", "activate a Lightning page", or any Salesforce org
  interaction via CLI.
allowed-tools: Bash(sf:*), Bash(jq:*), Bash(node:*)
---

# Salesforce Development with SF CLI

## Critical Rules

These rules prevent common deployment failures. Read before every metadata change.

1. **FLS is NOT auto-granted via Metadata API.** When deploying custom fields with `sf project deploy start`, Field-Level Security is NOT automatically granted to any profile — not even System Administrator. You MUST deploy Admin profile metadata alongside custom fields or the fields will exist but be invisible. See [field-level-security.md](references/tasks/field-level-security.md).

2. **Always dry-run before deploying.** Use `--dry-run` to catch errors before they hit the org. Check the output for failures before running the real deploy.

3. **Always retrieve after deploying.** Run `sf project retrieve start` after deployment to capture auto-generated metadata (action overrides, feature flags like `trackTrending`, `enableBulkApi`, etc.) that the org adds to your metadata.

4. **Don't over-use `jq`.** All SF CLI commands support `--json` output. For deploy, dry-run, and retrieve operations the output is small and self-explanatory — just read it directly. Reserve `jq` for commands with large output (`sf sobject describe`, `sf data query` with many records). When you do use `jq`, pipe only stdout: `--json | jq '...'`. **Never use `2>&1 | jq`** — the CLI writes warnings to stderr that will break jq parsing.

5. **Retrieve-then-modify, don't build from scratch.** For complex metadata types (Layouts, FlexiPages, standard object CustomObjects, etc.), always retrieve the existing metadata from the org first, then modify the retrieved XML. These types have many auto-generated fields, ordering requirements, and org-specific values that are impractical to author by hand. Only build from scratch for simple, well-templated types like custom objects, custom fields, and custom tabs.

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
│       ├── listViews/
│       │   └── MyView.listView-meta.xml         # List views
│       ├── compactLayouts/
│       │   └── MyLayout.compactLayout-meta.xml  # Compact layouts
│       ├── webLinks/
│       │   └── MyButton.webLink-meta.xml        # Custom buttons/links
│       └── validationRules/
│           └── MyRule.validationRule-meta.xml    # Validation rules
├── tabs/
│   └── MyObject__c.tab-meta.xml                 # Custom object tabs
├── layouts/
│   └── MyObject-Layout Name.layout-meta.xml     # Page layouts
├── flexipages/
│   └── My_Page.flexipage-meta.xml               # Lightning pages
└── profiles/
    └── Admin.profile-meta.xml                   # Profile with FLS
```

For XML templates, browse [references/metadata-templates/](references/metadata-templates/).
For full Metadata API schemas, see the [Metadata API Reference](#metadata-api-reference) section below.

### 2. Dry-run the deployment

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/MyObject__c \
  --source-dir force-app/main/default/profiles/Admin.profile-meta.xml \
  --target-org <alias> --dry-run --json
```

Read the raw JSON output. Check `result.status` for `"Succeeded"` and `result.details.componentFailures` for an empty array. Common errors:
- `"Cannot set sharingModel to ReadWrite on a CustomObject with a MasterDetail relationship field"` — Change `sharingModel` to `ControlledByParent`. See [relationships.md](references/tasks/relationships.md).
- `"You cannot deploy to a required field: ..."` — Required fields don't need FLS entries in the profile. Remove them. See [field-level-security.md](references/tasks/field-level-security.md).

### 3. Deploy

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/MyObject__c \
  --source-dir force-app/main/default/profiles/Admin.profile-meta.xml \
  --target-org <alias> --json
```

Read the raw JSON output. Check `result.status` for `"Succeeded"`.

### 4. Retrieve to capture auto-generated metadata

```bash
sf project retrieve start \
  --metadata "CustomObject:MyObject__c" \
  --target-org <alias> --json
```

### 5. Verify

For verify, the output can be large so `jq` is appropriate. Pipe only stdout (no `2>&1`):

```bash
sf sobject describe --sobject MyObject__c --target-org <alias> --json | \
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
| Creating or deploying flows | [flows.md](references/tasks/flows.md) |
| Custom tabs, list views, compact layouts, buttons/links, feed tracking, FlexiPage activation | [ui-customization.md](references/tasks/ui-customization.md) |
| Need an XML template for a specific metadata type | [metadata-templates/](references/metadata-templates/) (browse directory) |
| Need the full schema/attributes for a metadata type | See [Metadata API Reference](#metadata-api-reference) below |
| Need full SF CLI command syntax or response shapes | [commands.md](references/cli/commands.md) |

## Metadata API Reference

Comprehensive Salesforce Metadata API docs live in `references/metadata-reference/`, organized into three directories by purpose. **Read directly by filename — no need to list or explore the tree.**

### Directory layout

```
references/metadata-reference/
├── overview/       # Description, file info, and sample XML for each type
│   └── <Type>.md          e.g. overview/CustomField.md
├── attributes/     # All fields, sub-types, and valid values for each type
│   └── <Type>.md          e.g. attributes/CustomField.md
│   └── Flow-<topic>.md    Flow is split by topic (see below)
└── wsdl/           # Raw WSDL/XSD schemas (rarely needed)
    └── <Type>.md          e.g. wsdl/CustomField.md
```

### How to use

- **Need to know what fields a type supports?** → Read `attributes/<Type>.md`
- **Need a sample XML definition or type description?** → Read `overview/<Type>.md`
- **Need the XSD schema?** → Read `wsdl/<Type>.md`

### Available types

`ApexClass`, `ApexComponent`, `ApexPage`, `ApexTrigger`, `CustomField`, `CustomObject`, `Dashboard`, `FlexiPage`, `Flow`, `FlowDefinition`, `Layout`, `LightningComponentBundle`, `PermissionSet`, `PermissionSetGroup`, `Profile`, `QuickAction`, `Report`, `Role`, `SharingBaseRule`, `SharingRules`

### Flow attribute files

Flow is too large for a single file and is split by topic in `attributes/`:

| File | Contents |
|------|----------|
| `Flow-core.md` | Root Flow fields, FlowBaseElement, FlowElement, FlowNode, FlowConnector, FlowConstant, FlowFormula, FlowVariable, FlowTextTemplate |
| `Flow-screens.md` | FlowScreen, FlowScreenField, FlowChoice, FlowDynamicChoiceSet, FlowVisibilityRule, FlowCustomError |
| `Flow-data-operations.md` | FlowRecordCreate, FlowRecordLookup, FlowRecordUpdate, FlowRecordDelete, FlowRecordRollback, FlowRecordFilter |
| `Flow-logic.md` | FlowDecision, FlowCondition, FlowRule, FlowLoop, FlowAssignment, FlowWait, FlowSchedule, FlowStart |
| `Flow-actions.md` | FlowActionCall, FlowApexPluginCall, FlowSubflow, FlowStep, FlowTransform, FlowCollectionProcessor |
| `Flow-orchestration.md` | FlowOrchestratedStage, FlowStage, FlowStageStep, FlowExperiment |
