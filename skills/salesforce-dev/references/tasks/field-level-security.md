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

### For Multiple Profiles

Profiles are the trickiest metadata type to work with safely. A full retrieve pulls FLS, object permissions, tab visibility, record type access, page layout assignments, and more. Deploying a retrieved-then-modified full profile risks **overwriting concurrent changes** to unrelated settings.

The safe approach: deploy **minimal partial profile XMLs alongside the related field metadata**. When profiles are deployed alongside fields/objects, Salesforce does an **additive merge** — it only touches the permissions explicitly in your XML and leaves everything else untouched.

#### Step 1: Find profile API names

The display name you see in Salesforce Setup is NOT the API name used in metadata filenames. You need the API name to create the profile XML file.

**Common standard profile mappings:**

| Display Name | API Name (filename) |
|---|---|
| System Administrator | `Admin` |
| Standard User | `Standard` |
| Marketing User | `MarketingProfile` |
| Contract Manager | `ContractManager` |
| Read Only | `ReadOnly` |
| Solution Manager | `SolutionManager` |
| Standard Platform User | `StandardAul` |
| Custom: Sales Profile | `Custom%3A Sales Profile` (URL-encoded colon) |

**List all profiles in the org:**
```bash
sf data query -q "SELECT Id, Name FROM Profile" --target-org <alias>
```

**Map display names to API names via Tooling API:**

The `Profile` sObject in the standard API only exposes `Name` (display name). To get the metadata API name, query the `Profile` object through the Tooling API which exposes the `FullName` field — this is the exact value you need for the filename:

```bash
sf data query \
  -q "SELECT Id, Name, FullName FROM Profile WHERE Name IN ('System Administrator', 'Standard User', 'Custom: Sales Profile')" \
  --target-org <alias> --use-tooling-api
```

The `FullName` column is the metadata API name. Use it as the filename: `<FullName>.profile-meta.xml`.

**If FullName contains special characters** (like colons in custom profiles), URL-encode them in the filename: `:` → `%3A`. For example, `Custom: Sales Profile` → `Custom%3A Sales Profile.profile-meta.xml`.

**Retrieve to confirm:** If you're unsure about the exact filename, retrieve the profile and let the CLI tell you:
```bash
sf project retrieve start --metadata "Profile:Admin" --target-org <alias>
```
The retrieved filename in the output is the authoritative API name.

#### Step 2: Create a minimal profile XML per profile

Each file contains ONLY the new `<fieldPermissions>` entries — nothing else:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldPermissions>
        <editable>true</editable>
        <field>Energy_Audit__c.Type_of_Installation__c</field>
        <readable>true</readable>
    </fieldPermissions>
    <fieldPermissions>
        <editable>true</editable>
        <field>Energy_Audit__c.Audit_Notes__c</field>
        <readable>true</readable>
    </fieldPermissions>
</Profile>
```

Save each to `force-app/main/default/profiles/<APIName>.profile-meta.xml`.

Set `<editable>false</editable>` for read-only access, `<editable>true</editable>` for read-write.

#### Step 3: Deploy all profiles alongside the field metadata

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/MyObject__c/fields/MyField__c.field-meta.xml \
  --source-dir force-app/main/default/profiles/Admin.profile-meta.xml \
  --source-dir force-app/main/default/profiles/Standard.profile-meta.xml \
  --source-dir "force-app/main/default/profiles/Custom%3A Sales Profile.profile-meta.xml" \
  --target-org <alias> --dry-run
```

Deploying the profiles **alongside the fields** is what triggers the safe additive merge behavior.

#### Alternative: Permission Sets

For multi-profile scenarios, Permission Sets are often cleaner — no profile wrangling needed:

**File path**: `force-app/main/default/permissionsets/Energy_Audit_Access.permissionset-meta.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Energy Audit Access</label>
    <fieldPermissions>
        <editable>true</editable>
        <field>Energy_Audit__c.Type_of_Installation__c</field>
        <readable>true</readable>
    </fieldPermissions>
    <fieldPermissions>
        <editable>true</editable>
        <field>Energy_Audit__c.Audit_Notes__c</field>
        <readable>true</readable>
    </fieldPermissions>
</PermissionSet>
```

Deploy the Permission Set, then assign it to users. This avoids profile complexity entirely and is the recommended approach when granting the same FLS to users across multiple profiles.

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
  --target-org <alias> --use-tooling-api --json | \
  jq '[.result.records[] | {id: .Id, name: .DeveloperName}]'
```

If the field appears here but not in `sf sobject describe`, FLS is the problem.

### Step 2: Check current FLS

```bash
sf data query \
  --query "SELECT Id, Field, PermissionsRead, PermissionsEdit FROM FieldPermissions WHERE SobjectType = 'MyObject__c'" \
  --target-org <alias> --json | \
  jq '[.result.records[] | {field: .Field, read: .PermissionsRead, edit: .PermissionsEdit}]'
```

If your field is not listed, deploy the profile FLS as described above.

### Step 3: Deploy FLS and verify

After deploying the Admin profile with `<fieldPermissions>`:

```bash
sf sobject describe --sobject MyObject__c --target-org <alias> --json | \
  jq '[.result.fields[] | select(.custom == true) | {name, type, label}]'
```

The field should now appear in the output.
