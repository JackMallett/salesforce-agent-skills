# Role — Attribute Reference

## Fields

This metadata type extends to subtype RoleOrTerritory.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| fullName | string | The unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. Corresponds to Role Name in the user interface. |
| parentRole | string | The role above this role in the hierarchy. |
