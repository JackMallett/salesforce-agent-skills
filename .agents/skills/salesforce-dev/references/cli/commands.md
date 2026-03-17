# SF CLI Command Reference

All commands output JSON when using the `--json` flag. This reference documents the response shape for each command and provides `jq` one-liners for extracting useful information.

## sf project deploy start

Deploy metadata to a Salesforce org.

### Syntax

```bash
sf project deploy start \
  --source-dir <path> \            # Source directory (repeatable for multiple paths)
  --target-org <alias> \           # Org alias or username
  --json                           # JSON output
```

**Common flags:**
- `--dry-run` — Validate the deployment without making changes (check-only)
- `--ignore-conflicts` — Deploy even if the org has conflicting changes
- `--metadata "<Type>:<Name>"` — Deploy specific metadata by type and name (alternative to --source-dir)

### Response Shape

```json
{
  "status": 0,
  "result": {
    "checkOnly": false,            // true if --dry-run
    "status": "Succeeded",         // "Succeeded" | "Failed" | "SucceededPartial"
    "success": true,
    "numberComponentErrors": 0,
    "numberComponentsDeployed": 1,
    "numberComponentsTotal": 1,
    "details": {
      "componentSuccesses": [
        {
          "changed": false,        // Whether the component was actually modified
          "componentType": "CustomField",
          "created": false,        // Whether this was a new component
          "fullName": "Property__c.Street_Address__c",
          "id": "00Nfj00003Br5rJEAR",
          "success": true
        }
      ],
      "componentFailures": [       // Empty array if no failures
        {
          "changed": false,
          "componentType": "CustomObject",
          "fullName": "Offer__c",
          "problem": "Cannot set sharingModel to ReadWrite...",
          "success": false
        }
      ]
    },
    "files": [
      {
        "fullName": "Property__c.Street_Address__c",
        "type": "CustomField",
        "state": "Created",        // "Created" | "Changed" | "Unchanged"
        "filePath": "/path/to/field.field-meta.xml"
      }
    ]
  },
  "warnings": []
}
```

### Recommended jq One-Liners

```bash
# Check status and list deployed files
... --json 2>&1 | jq '{status: .result.status, files: [.result.files[] | {state, fullName, type}]}'

# Check for failures (use this with --dry-run)
... --json 2>&1 | jq '{status: .result.status, failures: [.result.details.componentFailures[]? | {fullName, problem}]}'

# Full summary with failures
... --json 2>&1 | jq '{status: .result.status, files: [.result.files[] | {state, fullName, type}], failures: [.result.details.componentFailures[]? | {fullName, problem}]}'
```

---

## sf project retrieve start

Retrieve metadata from a Salesforce org.

### Syntax

```bash
sf project retrieve start \
  --metadata "<Type>:<Name>" \     # Metadata type and name (repeatable)
  --target-org <alias> \
  --json
```

**Common flags:**
- `--source-dir <path>` — Retrieve into a specific directory
- `--metadata "CustomObject:MyObject__c"` — Retrieve an entire object and its fields

### Response Shape

```json
{
  "status": 0,
  "result": {
    "done": true,
    "status": "Succeeded",
    "success": true,
    "files": [
      {
        "fullName": "Property__c.Street_Address__c",
        "type": "CustomField",
        "state": "Changed",        // "Changed" | "Created" | "Unchanged"
        "filePath": "/path/to/field.field-meta.xml"
      }
    ]
  },
  "warnings": []
}
```

### Recommended jq One-Liners

```bash
# List retrieved files
... --json 2>&1 | jq '[.result.files[] | {state, fullName, type}]'
```

---

## sf sobject describe

Describe an sObject's metadata (fields, relationships, etc.).

### Syntax

```bash
sf sobject describe \
  --sobject <ObjectName> \         # API name (e.g., Property__c, Account)
  --target-org <alias> \
  --json
```

### Response Shape

The response is large. Key sections:

```json
{
  "status": 0,
  "result": {
    "name": "Property__c",
    "label": "Property",
    "custom": true,
    "fields": [                    // Array of all fields (standard + custom)
      {
        "name": "Id",
        "type": "id",
        "label": "Record ID",
        "custom": false
      },
      {
        "name": "Price__c",
        "type": "currency",
        "label": "Price",
        "custom": true,
        "precision": 18,
        "scale": 2
      }
    ],
    "childRelationships": [...]    // Objects that reference this one
  },
  "warnings": []
}
```

**Note**: Fields only appear in the describe output if the current user has FLS (Field-Level Security) access. If a custom field is missing, see [field-level-security.md](../tasks/field-level-security.md).

### Recommended jq One-Liners

```bash
# List all custom fields with type
... --json 2>&1 | jq '[.result.fields[] | select(.custom == true) | {name, type, label}]'

# List all fields (custom and standard)
... --json 2>&1 | jq '[.result.fields[] | {name, type, custom}]'

# Get just field names
... --json 2>&1 | jq '[.result.fields[].name]'

# Check if a specific field exists
... --json 2>&1 | jq '[.result.fields[] | select(.name == "Price__c")]'

# List child relationships
... --json 2>&1 | jq '[.result.childRelationships[] | {childSObject, field, relationshipName}]'
```

---

## sf data query

Run a SOQL query against the org.

### Syntax

```bash
sf data query \
  --query "<SOQL>" \               # SOQL query string
  --target-org <alias> \
  --json
```

**Common flags:**
- `--use-tooling-api` — Query the Tooling API (for metadata like CustomField, CustomObject)

### Response Shape

```json
{
  "status": 0,
  "result": {
    "records": [
      {
        "attributes": {
          "type": "Property__c",
          "url": "/services/data/v66.0/sobjects/Property__c/a00..."
        },
        "Id": "a00fj00000...",
        "Name": "123 Main St"
      }
    ],
    "totalSize": 1,
    "done": true
  },
  "warnings": []
}
```

### Recommended jq One-Liners

```bash
# Get records as clean JSON (remove attributes metadata)
... --json 2>&1 | jq '[.result.records[] | del(.attributes)]'

# Get record count
... --json 2>&1 | jq '.result.totalSize'

# Get specific fields from records
... --json 2>&1 | jq '[.result.records[] | {id: .Id, name: .Name}]'
```

### Tooling API Examples

The Tooling API lets you query metadata objects:

```bash
# List all custom fields on an object
sf data query \
  --query "SELECT Id, DeveloperName FROM CustomField WHERE TableEnumOrId = 'MyObject__c'" \
  --target-org <alias> --use-tooling-api --json 2>&1 | \
  jq '[.result.records[] | {id: .Id, name: .DeveloperName}]'

# Check if a custom object exists
sf data query \
  --query "SELECT Id, DeveloperName FROM CustomObject WHERE DeveloperName = 'MyObject'" \
  --target-org <alias> --use-tooling-api --json 2>&1 | \
  jq '.result.totalSize'
```

---

## sf org list

List all connected Salesforce orgs.

### Syntax

```bash
sf org list --json
```

**Common flags:**
- `--all` — Include expired and deleted scratch orgs

### Response Shape

```json
{
  "status": 0,
  "result": {
    "other": [...],                // Non-categorized orgs
    "sandboxes": [...],
    "nonScratchOrgs": [
      {
        "orgId": "00Dfj00000LjIr7EAF",
        "username": "user@example.com",
        "instanceUrl": "https://my-org.my.salesforce.com",
        "alias": "my-org",
        "connectedStatus": "Connected",
        "isSandbox": false,
        "isScratch": false,
        "tracksSource": false
      }
    ],
    "devHubs": [...],
    "scratchOrgs": [...]
  },
  "warnings": []
}
```

### Recommended jq One-Liners

```bash
# List all connected orgs with alias and status
... --json 2>&1 | jq '[.result.nonScratchOrgs[] | {alias, username, connectedStatus}]'

# Find a specific org by alias
... --json 2>&1 | jq '[.result.nonScratchOrgs[] | select(.alias == "my-org")]'
```

---

## sf org display

Display details about a connected org.

### Syntax

```bash
sf org display \
  --target-org <alias> \
  --json
```

### Response Shape

```json
{
  "status": 0,
  "result": {
    "id": "00Dfj00000LjIr7EAF",
    "apiVersion": "66.0",
    "accessToken": "00D...",
    "instanceUrl": "https://my-org.my.salesforce.com",
    "username": "user@example.com",
    "clientId": "PlatformCLI",
    "connectedStatus": "Connected",
    "alias": "my-org"
  },
  "warnings": [...]
}
```

### Recommended jq One-Liners

```bash
# Get org instance URL
... --json 2>&1 | jq -r '.result.instanceUrl'

# Get connection summary
... --json 2>&1 | jq '{alias: .result.alias, username: .result.username, url: .result.instanceUrl, status: .result.connectedStatus}'
```

---

## sf data create record

Create a new data record.

### Syntax

```bash
sf data create record \
  --sobject <ObjectName> \
  --values "Field1=Value1 Field2=Value2" \
  --target-org <alias> \
  --json
```

### Recommended jq One-Liner

```bash
# Get the new record ID
... --json 2>&1 | jq -r '.result.id'
```

---

## sf data delete record

Delete a data record.

### Syntax

```bash
sf data delete record \
  --sobject <ObjectName> \
  --record-id <Id> \
  --target-org <alias> \
  --json
```

---

## Common Error Patterns

All error responses follow this structure:

```json
{
  "status": 1,
  "name": "ERROR_CODE",
  "message": "Human-readable error message",
  "exitCode": 1,
  "warnings": []
}
```

Common errors:

| Error Code | Meaning |
|-----------|---------|
| `INVALID_TYPE` | sObject type doesn't exist or isn't accessible |
| `INVALID_FIELD` | Field doesn't exist on the queried object |
| `INSUFFICIENT_ACCESS_OR_READONLY` | Permission issue — check profile/FLS |
| `MALFORMED_QUERY` | SOQL syntax error |
