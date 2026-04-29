# SF CLI Command Reference

All commands output JSON when using the `--json` flag. This reference documents the response shape for each command.

## When to Use `jq`

**Don't use `jq` for deploy, dry-run, retrieve, org display, or org list.** These commands return small, readable JSON. Just use `--json` and read the output directly.

**Do use `jq` for `sf sobject describe` and `sf data query`** with many records — these can return large output where filtering is valuable.

**Never use `2>&1 | jq`.** The SF CLI writes warnings (e.g., update notices) to stderr. Redirecting stderr into jq with `2>&1` produces invalid JSON input and breaks parsing. When using jq, pipe only stdout: `--json | jq '...'`.

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

### Reading the Output

The output is small enough to read directly. Key fields to check:
- `result.status` — `"Succeeded"`, `"Failed"`, or `"SucceededPartial"`
- `result.numberComponentErrors` — should be `0`
- `result.details.componentFailures` — should be empty; if not, each entry has `fullName` and `problem`
- `result.files` — array of `{fullName, type, state}` for each deployed component

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

### Reading the Output

The output is small enough to read directly. Check `result.files` for the list of retrieved components and their `state` (`"Changed"`, `"Created"`, `"Unchanged"`).

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
... --json | jq '[.result.fields[] | select(.custom == true) | {name, type, label}]'

# List all fields (custom and standard)
... --json | jq '[.result.fields[] | {name, type, custom}]'

# Get just field names
... --json | jq '[.result.fields[].name]'

# Check if a specific field exists
... --json | jq '[.result.fields[] | select(.name == "Price__c")]'

# List child relationships
... --json | jq '[.result.childRelationships[] | {childSObject, field, relationshipName}]'
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
... --json | jq '[.result.records[] | del(.attributes)]'

# Get record count
... --json | jq '.result.totalSize'

# Get specific fields from records
... --json | jq '[.result.records[] | {id: .Id, name: .Name}]'
```

### Tooling API Examples

The Tooling API lets you query metadata objects:

```bash
# List all custom fields on an object
sf data query \
  --query "SELECT Id, DeveloperName FROM CustomField WHERE TableEnumOrId = 'MyObject__c'" \
  --target-org <alias> --use-tooling-api --json | \
  jq '[.result.records[] | {id: .Id, name: .DeveloperName}]'

# Check if a custom object exists
sf data query \
  --query "SELECT Id, DeveloperName FROM CustomObject WHERE DeveloperName = 'MyObject'" \
  --target-org <alias> --use-tooling-api --json | \
  jq '.result.totalSize'
```

---

## sf apex run

Execute anonymous Apex in an org.

### Syntax

```bash
sf apex run \
  --target-org <alias> \
  --file <path-to-apex-file> \
  --json
```

**Common flags:**
- `--file <path>` — Read Apex code from a local file instead of using interactive stdin
- `--api-version <value>` — Override the API version used for the request

### When to use it

Use this after deploying an Apex class when a Trailhead unit or manual verification step requires running a method such as `MyClass.myMethod(5);` in Execute Anonymous.

For non-interactive automation, prefer a temp file over interactive mode:

```bash
tmpfile=$(mktemp /tmp/run-apex.XXXXXX.apex)
printf 'AccountHandler.insertAccount(5);\n' > "$tmpfile"
sf apex run --target-org <alias> --file "$tmpfile" --json
```

### Response Shape

```json
{
  "status": 0,
  "result": {
    "success": true,
    "compiled": true,
    "compileProblem": "",
    "exceptionMessage": "",
    "exceptionStackTrace": "",
    "line": -1,
    "column": -1,
    "logs": "...debug log text..."
  },
  "warnings": []
}
```

### Reading the Output

Check these fields directly in the JSON output:
- `result.compiled` — should be `true`
- `result.success` — should be `true`
- `result.compileProblem` — populated when the anonymous Apex failed to compile
- `result.exceptionMessage` — populated when the code compiled but threw at runtime
- `result.logs` — raw debug log text from the execution

---

## sf package install

Install a package version into an org.

### Syntax

```bash
sf package install \
  --package <04t-version-id> \
  --target-org <alias> \
  --wait <minutes> \
  --publish-wait <minutes> \
  --no-prompt \
  --json
```

**Common flags:**
- `--package <04t...>` — Subscriber package version ID to install
- `--wait <minutes>` — How long to wait for installation completion
- `--publish-wait <minutes>` — How long to wait for package availability before install starts
- `--no-prompt` — Non-interactive install (required for automation)

### Response Shape

```json
{
  "status": 0,
  "result": {
    "Id": "0Hf...",
    "SubscriberPackageVersionKey": "04t...",
    "Status": "SUCCESS",
    "Errors": null
  },
  "warnings": []
}
```

### Reading the Output

Check these fields directly in the JSON output:
- `result.Status` — should be `"SUCCESS"`
- `result.Errors` — should be `null`
- `result.SubscriberPackageVersionKey` — confirms which package version was installed

---

## sf data tree import

Import related sample data from a plan file.

### Syntax

```bash
sf data tree import \
  --plan <path-to-plan.json> \
  --target-org <alias> \
  --json
```

### When to use it

Use this for seeded sample data or relationship-heavy fixtures where the plan file manages cross-record references.

### Response Shape

Successful imports can be terse in terminal wrappers. Verify success by querying the destination objects afterward when needed.

Error responses look like this:

```json
{
  "name": "SfError",
  "message": "Data Import failed",
  "exitCode": 1,
  "data": [
    {
      "referenceId": "18HenryStRef",
      "StatusCode": "REQUIRED_FIELD_MISSING",
      "Message": "Required fields are missing: [Street_Address__c]",
      "fields": "Street_Address__c"
    }
  ]
}
```

### Validation Pattern

After import, verify record creation directly:

```bash
sf data query --query "SELECT COUNT() FROM Broker__c" --target-org <alias> --json
sf data query --query "SELECT COUNT() FROM Property__c" --target-org <alias> --json
```

For `COUNT()` queries, the row count is in `result.totalSize`; `result.records` may be empty.

### Common Gotcha

If `sf data tree import` fails with `REQUIRED_FIELD_MISSING`, the data plan may be older than the installed schema. Describe the target object first:

```bash
sf sobject describe --sobject Property__c --target-org <alias> --json | \
  jq '[.result.fields[] | select(.name == "Street_Address__c" or .name == "Address__c") | {name, nillable, createable}]'
```

Then patch the data payload to supply the required field before retrying the import.

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

### Reading the Output

Small enough to read directly. Orgs are grouped under `result.nonScratchOrgs`, `result.scratchOrgs`, `result.sandboxes`, etc.

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

### Reading the Output

Small enough to read directly. Key fields: `result.instanceUrl`, `result.username`, `result.connectedStatus`.

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

### Reading the Output

Small output — the new record ID is at `result.id`.

### Notable record types you might need to insert

| sObject | Notes |
|---|---|
| `User` | `sf org create user` is **scratch-org only**. For Trailhead Playgrounds, sandboxes, and production, use `sf data create record --sobject User`. Required: `FirstName`, `LastName`, `Alias`, `Email`, `Username` (globally unique across all Salesforce orgs), `ProfileId`, `TimeZoneSidKey`, `LocaleSidKey`, `EmailEncodingKey`, `LanguageLocaleKey`. See [users-and-sharing.md](../tasks/users-and-sharing.md). |
| `PermissionSetAssignment` | Pass either `PermissionSetId` (regular permset) **or** `PermissionSetGroupId` (group), never both — passing both errors with `INVALID_CROSS_REFERENCE_KEY`. |

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
| `REQUIRED_FIELD_MISSING` | Data insert or import omitted a required field; describe the object and update the payload |
