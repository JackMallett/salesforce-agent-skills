# Formula Fields and Roll-Up Summary Fields

## Formula Fields

Formula fields calculate values automatically using other fields on the same record (or related records via cross-object references). They are read-only.

### When to Use
- Calculate derived values (e.g., days remaining: `EndDate - TODAY()`)
- Display cross-object data (e.g., show Account field on Contact)
- Create clickable hyperlinks with `HYPERLINK()`
- Conditional logic with `IF()`, `CASE()`, checkbox formulas

### Metadata Structure

**File path**: `force-app/main/default/objects/OBJECT_NAME/fields/FIELD_NAME__c.field-meta.xml`

Use template: [field-formula.xml](../metadata-templates/field-formula.xml)

Key elements:
- `<formula>`: The formula expression
- `<formulaTreatBlanksAs>`: `BlankAsZero` or `BlankAsBlank`
- `<type>`: Return type — `Number`, `Currency`, `Text`, `Date`, `Checkbox`, `Percent`
- `<precision>` / `<scale>`: For numeric return types

### FLS for Formula Fields

Formula fields are read-only. In the Admin profile FLS entry:
```xml
<fieldPermissions>
    <editable>false</editable>
    <field>ObjectName.FieldName__c</field>
    <readable>true</readable>
</fieldPermissions>
```

### Common Formula Functions

| Function | Description | Example |
|----------|-------------|---------|
| `TODAY()` | Current date | `CloseDate - TODAY()` |
| `NOW()` | Current date/time | `NOW() - CreatedDate` |
| `IF(test, true_val, false_val)` | Conditional | `IF(Amount > 1000, "Big", "Small")` |
| `LEN(text)` | Text length | `LEN(AccountNumber)` |
| `HYPERLINK(url, label)` | Clickable link | `HYPERLINK("https://...", "Click")` |
| `ROUND(number, places)` | Round number | `ROUND(Amount * 0.88, 2)` |
| `ISBLANK(field)` | Check if empty | `IF(ISBLANK(Email), "N/A", Email)` |
| `TEXT(value)` | Convert to text | `TEXT(StageName)` |

### Standard Object Support

Formula fields work on both custom AND standard objects. For standard objects, use the standard object API name as the folder:
```
force-app/main/default/objects/Contract/fields/Days_Remaining__c.field-meta.xml
force-app/main/default/objects/Account/fields/My_Formula__c.field-meta.xml
```

---

## Roll-Up Summary Fields

Roll-up summary fields aggregate data from detail records in a master-detail relationship and display the result on the master record.

### When to Use
- Count related records
- Sum, min, or max a field across related detail records
- Works on standard parent-child relationships (e.g., Account → Opportunity)

### Metadata Structure

**File path**: `force-app/main/default/objects/MASTER_OBJECT/fields/FIELD_NAME__c.field-meta.xml`

Use template: [field-rollup-summary.xml](../metadata-templates/field-rollup-summary.xml)

Key elements:
- `<summarizedField>`: The detail field to aggregate (omit for COUNT)
- `<summaryForeignKey>`: The relationship field on the detail object
- `<summaryOperation>`: `count`, `sum`, `min`, or `max`
- `<type>`: Always `Summary`

### Summary Operations

| Operation | Supported Field Types | Needs `<summarizedField>`? |
|-----------|----------------------|---------------------------|
| `count` | N/A (counts records) | No — omit it |
| `sum` | Number, Currency, Percent | Yes |
| `min` | Number, Currency, Percent, Date, DateTime | Yes |
| `max` | Number, Currency, Percent, Date, DateTime | Yes |

### Optional Filtering

You can filter which detail records are included:
```xml
<summaryFilterItems>
    <field>Opportunity.StageName</field>
    <operation>notEqual</operation>
    <value>Closed Lost</value>
</summaryFilterItems>
```

### FLS for Roll-Up Summary Fields

Same as formula fields — read-only, set `editable` to `false`:
```xml
<fieldPermissions>
    <editable>false</editable>
    <field>Account.Potential_Value__c</field>
    <readable>true</readable>
</fieldPermissions>
```

### Deployment

Both formula and roll-up summary fields follow the standard deployment workflow. Deploy the field alongside the Admin profile FLS:

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/Account/fields/My_Rollup__c.field-meta.xml \
  --source-dir force-app/main/default/profiles/Admin.profile-meta.xml \
  --target-org <alias> --dry-run --json 2>&1 | \
  jq '{status: .result.status, failures: [.result.details.componentFailures[]? | {fullName, problem}]}'
```
