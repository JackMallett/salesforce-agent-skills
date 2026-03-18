# Creating Custom Objects and Fields

## Creating a Custom Object

### 1. Create the object metadata file

**File path**: `force-app/main/default/objects/<ObjectName>__c/<ObjectName>__c.object-meta.xml`

Use the appropriate template from [metadata-templates/](../metadata-templates/):
- [custom-object.xml](../metadata-templates/custom-object.xml) — Standard custom object (Text or AutoNumber name)
- [custom-object-controlled-by-parent.xml](../metadata-templates/custom-object-controlled-by-parent.xml) — Object that will be the detail side of a Master-Detail relationship

Key decisions when creating an object:
- **Name field type**: `Text` (user enters a name) or `AutoNumber` (system generates, e.g. `OF-{0000}`)
- **Sharing model**: `ReadWrite` for standalone objects, `ControlledByParent` for Master-Detail children
- **Plural label**: Used in tab names and list views
- **Search**: Set `<enableSearch>true</enableSearch>` to allow records to appear in search results
- **Starts with vowel**: Set `<startsWith>Vowel</startsWith>` if the label begins with a vowel sound (e.g., "Energy Audit" → "an Energy Audit")
- **Feed tracking**: Set `<enableFeeds>true</enableFeeds>` to enable Chatter feed tracking. Add `<trackFeedHistory>true</trackFeedHistory>` to individual fields. See [ui-customization.md](ui-customization.md#feed-tracking-chatter).
- **Custom tab**: A tab is required to make the object accessible in Lightning apps. See [custom-tab.xml](../metadata-templates/custom-tab.xml).

### 2. Add custom fields

**File path**: `force-app/main/default/objects/<ObjectName>__c/fields/<FieldName>__c.field-meta.xml`

Browse [metadata-templates/](../metadata-templates/) for the right field type template. Common types:
- [field-currency.xml](../metadata-templates/field-currency.xml) — Currency values
- [field-date.xml](../metadata-templates/field-date.xml) — Date values
- [field-text.xml](../metadata-templates/field-text.xml) — Text and TextArea values
- [field-number.xml](../metadata-templates/field-number.xml) — Numeric values
- [field-checkbox.xml](../metadata-templates/field-checkbox.xml) — Boolean yes/no
- [field-picklist.xml](../metadata-templates/field-picklist.xml) — Dropdown selection
- [field-lookup.xml](../metadata-templates/field-lookup.xml) — Lookup relationship
- [field-master-detail.xml](../metadata-templates/field-master-detail.xml) — Master-Detail relationship
- [field-formula.xml](../metadata-templates/field-formula.xml) — Formula (calculated) fields
- [field-rollup-summary.xml](../metadata-templates/field-rollup-summary.xml) — Roll-up summary fields

For relationship fields, see [relationships.md](relationships.md) for important constraints.
For formula and roll-up summary fields, see [formulas-and-rollups.md](formulas-and-rollups.md) for detailed guidance.

### 3. Add Field-Level Security

**CRITICAL**: Fields deployed via the Metadata API are NOT automatically visible to any profile. You MUST deploy FLS alongside your fields or they will be invisible.

Use [profile-field-permissions.xml](../metadata-templates/profile-field-permissions.xml) as a template.

**File path**: `force-app/main/default/profiles/Admin.profile-meta.xml`

Add a `<fieldPermissions>` entry for each non-required, non-Master-Detail field:

```xml
<fieldPermissions>
    <editable>true</editable>
    <field>MyObject__c.MyField__c</field>
    <readable>true</readable>
</fieldPermissions>
```

**Fields that do NOT need FLS entries** (they are automatically visible):
- Required fields (`<required>true</required>`)
- Master-Detail relationship fields

Attempting to deploy FLS for these will cause an error: `"You cannot deploy to a required field"`.

For full details on FLS, see [field-level-security.md](field-level-security.md).
If you need to grant access to profiles other than Admin, see [profiles-and-permissions.md](profiles-and-permissions.md).

### 4. Deploy (dry-run first!)

Deploy the object, fields, and profile together:

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/MyObject__c \
  --source-dir force-app/main/default/profiles/Admin.profile-meta.xml \
  --target-org <alias> --dry-run --json 2>&1 | \
  jq '{status: .result.status, files: [.result.files[] | {state, fullName, type}], failures: [.result.details.componentFailures[]? | {fullName, problem}]}'
```

If no failures, deploy for real (remove `--dry-run`).

### 5. Retrieve auto-generated metadata

```bash
sf project retrieve start \
  --metadata "CustomObject:MyObject__c" \
  --target-org <alias> --json 2>&1 | \
  jq '[.result.files[] | {state, fullName, type}]'
```

This captures auto-generated fields the org adds: action overrides, `trackTrending`, `enableBulkApi`, `enableStreamingApi`, etc. These are needed for future deployments to avoid drift.

### 6. Verify

```bash
sf sobject describe --sobject MyObject__c --target-org <alias> --json 2>&1 | \
  jq '[.result.fields[] | select(.custom == true) | {name, type, label}]'
```

If custom fields are missing from the output, FLS is likely the issue. See [field-level-security.md](field-level-security.md).

## Adding Fields to an Existing Object

Follow steps 2-6 above. When adding fields to an object that already exists in the org, you can deploy just the new field files and the updated profile:

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/MyObject__c/fields/NewField__c.field-meta.xml \
  --source-dir force-app/main/default/profiles/Admin.profile-meta.xml \
  --target-org <alias> --dry-run --json 2>&1 | \
  jq '{status: .result.status, failures: [.result.details.componentFailures[]? | {fullName, problem}]}'
```

## Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot set sharingModel to ReadWrite on a CustomObject with a MasterDetail relationship field` | Object has a Master-Detail field but sharingModel is `ReadWrite` | Change `sharingModel` and `externalSharingModel` to `ControlledByParent` |
| `You cannot deploy to a required field` | Profile FLS entry for a required field | Remove the `<fieldPermissions>` entry for that field |
| Field exists in org but not visible in `sf sobject describe` | FLS not granted | Deploy Admin profile with `<fieldPermissions>` for the field |
| `Unchanged` state in deploy output for a field that should be new | Source tracking thinks field already exists | Use `--ignore-conflicts` flag or verify the field doesn't already exist via Tooling API |
