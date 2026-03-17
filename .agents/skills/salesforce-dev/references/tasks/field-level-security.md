# Field-Level Security (FLS)

## The Core Problem

When you create custom fields through the Salesforce **Setup UI**, FLS is automatically granted to the System Administrator profile. But when you deploy custom fields via the **Metadata API** (`sf project deploy start`), FLS is **NOT automatically granted to any profile** — not even System Administrator.

This means fields will exist in the org but be completely invisible in the UI and in `sf sobject describe` output.

## The Three Security Layers

Salesforce has three independent security layers. All three must allow access for a user to see a field value:

1. **Object-level (CRUD)** — Can the user access the object? Controlled by profile object permissions.
2. **Field-level (FLS)** — Can the user see this specific field? Controlled by profile field permissions. **This is the one that must be explicitly set when deploying via Metadata API.**
3. **Record-level (Sharing)** — Can the user see this specific record? Controlled by OWD, sharing rules, role hierarchy. "View All Data" bypasses this layer.

**"View All Data" does NOT bypass FLS.** It only bypasses record-level sharing. This is a common misconception. Even with "Modify All Data" permission, if FLS is not set, the field is invisible.

## How to Grant FLS

### For System Administrator Profile

Deploy a profile metadata file alongside your custom fields:

**File path**: `force-app/main/default/profiles/Admin.profile-meta.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldPermissions>
        <editable>true</editable>
        <field>MyObject__c.MyField__c</field>
        <readable>true</readable>
    </fieldPermissions>
    <!-- Add one <fieldPermissions> block per field -->
</Profile>
```

See template: [profile-field-permissions.xml](../metadata-templates/profile-field-permissions.xml)

Deploy the profile alongside the fields:

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/MyObject__c \
  --source-dir force-app/main/default/profiles/Admin.profile-meta.xml \
  --target-org <alias> --json
```

### For Other Profiles

See [profiles-and-permissions.md](profiles-and-permissions.md) for granting FLS to profiles other than System Administrator.

## Fields That Do NOT Need FLS Entries

These field types are automatically visible and do not need `<fieldPermissions>` in the profile:

- **Required fields** (`<required>true</required>`) — Always visible to all profiles
- **Master-Detail relationship fields** — Always visible (they inherit from the relationship)

**If you include FLS for these fields, the deploy will fail** with: `"You cannot deploy to a required field: ObjectName.FieldName"`

## Diagnosing FLS Issues

### Symptom: Fields exist but aren't visible

If you deployed fields and they don't appear in `sf sobject describe`, FLS is almost certainly the issue.

### Step 1: Confirm the field exists in the org

Use the Tooling API (bypasses FLS):

```bash
sf data query \
  --query "SELECT Id, DeveloperName FROM CustomField WHERE TableEnumOrId = 'MyObject__c'" \
  --target-org <alias> --use-tooling-api --json 2>&1 | \
  jq '[.result.records[] | {id: .Id, name: .DeveloperName}]'
```

If the field appears here but not in `sf sobject describe`, FLS is the problem.

### Step 2: Check current FLS

```bash
sf data query \
  --query "SELECT Id, Field, PermissionsRead, PermissionsEdit FROM FieldPermissions WHERE SobjectType = 'MyObject__c'" \
  --target-org <alias> --json 2>&1 | \
  jq '[.result.records[] | {field: .Field, read: .PermissionsRead, edit: .PermissionsEdit}]'
```

If your field is not listed, deploy the profile FLS as described above.

### Step 3: Deploy FLS and verify

After deploying the Admin profile with `<fieldPermissions>`:

```bash
sf sobject describe --sobject MyObject__c --target-org <alias> --json 2>&1 | \
  jq '[.result.fields[] | select(.custom == true) | {name, type, label}]'
```

The field should now appear in the output.
