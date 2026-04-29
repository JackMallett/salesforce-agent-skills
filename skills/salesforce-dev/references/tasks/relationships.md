# Object Relationships

Salesforce supports two main types of custom relationships: **Lookup** and **Master-Detail**.

## Lookup Relationships

A Lookup is a loose relationship between two objects. The child record can exist independently of the parent.

- **Use when**: Objects are related but the child can stand alone (e.g., Contact to Account)
- **Deletion behavior**: Deleting the parent does NOT delete child records
- **Sharing model**: Child object keeps its own sharing model (`ReadWrite`)
- **Required**: Can be optional or required

### Creating a Lookup Field

Use the template: [field-lookup.xml](../metadata-templates/field-lookup.xml)

Key attributes:
- `<type>Lookup</type>`
- `<referenceTo>TargetObject</referenceTo>` — The object being looked up (use API name, e.g., `Contact` for standard, `Property__c` for custom)
- `<deleteConstraint>SetNull</deleteConstraint>` — What happens when the parent is deleted. Options: `SetNull` (clear the field), `Restrict` (prevent deletion), `Cascade` (delete child — rare for Lookup)
- `<relationshipName>` — The API name for the child relationship (used in SOQL, e.g., `SELECT Id FROM Property__c WHERE Contact__r.Name = 'Jane'`)
- `<relationshipLabel>` — The label shown on the parent's Related list

**FLS**: Lookup fields need FLS entries in the Admin profile unless they are required. See [field-level-security.md](field-level-security.md).

## Master-Detail Relationships

A Master-Detail is a tight parent-child relationship. The child (detail) is fully dependent on the parent (master).

- **Use when**: Child records should not exist without a parent (e.g., Offer cannot exist without a Property)
- **Deletion behavior**: Deleting the parent DELETES all child records (cascade delete)
- **Sharing model**: Child object inherits sharing from the parent (`ControlledByParent`)
- **Required**: Always required (you cannot create a detail record without a master)
- **Ownership**: Detail records inherit the owner from the master record

### Creating a Master-Detail Field

Use the template: [field-master-detail.xml](../metadata-templates/field-master-detail.xml)

Key attributes:
- `<type>MasterDetail</type>`
- `<referenceTo>ParentObject__c</referenceTo>`
- `<relationshipOrder>0</relationshipOrder>` — Use `0` for the first Master-Detail on the object, `1` for the second (max 2)
- `<reparentableMasterDetail>false</reparentableMasterDetail>` — Whether the detail can be reassigned to a different master

### CRITICAL: Object Sharing Model

When you add a Master-Detail field to an object, the object's sharing model **must** be `ControlledByParent`. If the object currently has `ReadWrite`, you must change both:

```xml
<sharingModel>ControlledByParent</sharingModel>
<externalSharingModel>ControlledByParent</externalSharingModel>
```

Use the template: [custom-object-controlled-by-parent.xml](../metadata-templates/custom-object-controlled-by-parent.xml)

If you forget this, the deploy will fail with: `"Cannot set sharingModel to ReadWrite on a CustomObject with a MasterDetail relationship field"`

**FLS**: Master-Detail fields do NOT need FLS entries in the Admin profile. They are automatically visible. Attempting to add FLS for them may cause errors.

## Adding a Relationship to an Existing Object

If the object already exists in the org with `sharingModel: ReadWrite` and you want to add a Master-Detail field:

1. Update the object XML to change `sharingModel` and `externalSharingModel` to `ControlledByParent`
2. Create the Master-Detail field XML
3. Deploy the object and field together

**Important**: If the object already has data records, you may not be able to convert to Master-Detail directly. All existing records need a parent value. You may need to:
- Populate the field as a Lookup first
- Ensure all records have a value
- Then convert to Master-Detail

## Comparison Table

| Feature | Lookup | Master-Detail |
|---------|--------|---------------|
| Child can exist alone | Yes | No |
| Delete parent deletes children | No (configurable) | Yes (always) |
| Sharing model | Independent | ControlledByParent |
| Required | Optional or required | Always required |
| Max per object | Unlimited | 2 |
| Roll-up summary fields | No | Yes (on parent) |
| FLS needed | Yes (unless required) | No |
