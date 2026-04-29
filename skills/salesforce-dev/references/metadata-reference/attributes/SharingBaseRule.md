# SharingBaseRule — Attribute Reference

## Fields

| Field Name | Field Type | Description |
|------------|------------|-------------|
| accessLevel | string | Required. The access level that the sharing rule grants. |
| accountSettings | AccountSharingRuleSettings[] | The access level for the account’s children (case, contact, and opportunity). |
| description | string | Describes the sharing rule. Maximum of 1000 characters. |
| label | string | Required. Label for the sharing rule. |
| sharedTo | SharedTo | Required. Specifies who the record is shared with. |

## AccountSharingRuleSettings

Defines the access level for the case, contact, and opportunity associated with the account.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| caseAccessLevel | string | Required. The access level that the user or group has to cases associated with the account. Possible values are: None Read Edit |
| contactAccessLevel | string | Required. The access level that the user or group has to contacts associated with the account. Possible values are: None Read Edit |
| opportunityAccessLevel | string | Required. The access level that the user or group has to opportunities associated with the account. Possible values are: None Read Edit |
