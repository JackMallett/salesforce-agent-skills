# PermissionSetGroup — Attribute Reference

## Fields

| Field Name | Field Type | Description |
|------------|------------|-------------|
| description | string | The permission set group description provided by the permission set group creator. |
| hasActivationRequired | boolean | Indicates whether the permission set group requires an associated active session (true) or not (false). The default value is false. This field is available in API version 53.0 and later. |
| label | string | Required. The permission set group label. |
| mutingPermissionSets | string | A permission set containing permissions to disable in the permission set group. This field is available in API version 46.0 and later. |
| permissionSets | string | A permission set or permission sets included in the permission set group. |
| status | string | Indicates permission set group recalculation status. Valid values are: Updated—The group is current. Outdated—The group requires recalculation. Updating—The group is in recalculation mode. Failed—The group recalculation failed. |
