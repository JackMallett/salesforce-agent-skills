# Profiles and Permissions

## How Profiles Control Field Access

Every Salesforce user is assigned exactly one profile. The profile determines:
- Which objects the user can access (CRUD permissions)
- Which fields on those objects the user can see and edit (Field-Level Security)
- Which apps, tabs, and page layouts the user sees

When deploying metadata, you control FLS by deploying profile metadata with `<fieldPermissions>` entries.

## Profile Metadata Structure

**File path**: `force-app/main/default/profiles/<ProfileName>.profile-meta.xml`

The profile name in the file path must match the profile's API name. Common profile API names:
- `Admin` — System Administrator
- `Standard` — Standard User
- `StandardAul` — Standard Platform User

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldPermissions>
        <editable>true</editable>
        <field>MyObject__c.MyField__c</field>
        <readable>true</readable>
    </fieldPermissions>
    <fieldPermissions>
        <editable>false</editable>
        <field>MyObject__c.SensitiveField__c</field>
        <readable>true</readable>
    </fieldPermissions>
</Profile>
```

- `<readable>true</readable>` — User can see the field
- `<editable>true</editable>` — User can edit the field (requires readable to also be true)
- `<editable>false</editable>` + `<readable>true</readable>` — Read-only access

## Deploying FLS for Multiple Profiles

You can deploy multiple profile files at once:

```bash
sf project deploy start \
  --source-dir force-app/main/default/profiles/ \
  --target-org <alias> --dry-run --json 2>&1 | \
  jq '{status: .result.status, failures: [.result.details.componentFailures[]? | {fullName, problem}]}'
```

## Permission Sets as an Alternative

Permission sets grant additional access on top of a profile. They are useful when:
- Different users with the same profile need different field access
- You want to grant access without modifying the profile

Permission set metadata follows a similar structure but lives under `force-app/main/default/permissionsets/`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>My Permission Set</label>
    <fieldPermissions>
        <editable>true</editable>
        <field>MyObject__c.MyField__c</field>
        <readable>true</readable>
    </fieldPermissions>
</PermissionSet>
```

## Best Practices

- **Always deploy Admin profile FLS** when creating new custom fields. This ensures the System Administrator can see and work with the fields immediately.
- **Ask the user** if they want to grant access to other profiles before deploying FLS for non-Admin profiles. Different orgs have different profile structures.
- **Use permission sets** for granular access control rather than modifying standard profiles directly.
- **Remember**: Required fields and Master-Detail fields do not need FLS entries. See [field-level-security.md](field-level-security.md).
