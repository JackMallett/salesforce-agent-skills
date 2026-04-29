# PermissionSet — Attribute Reference

## Fields

| Field Name | Field Type | Description |
|------------|------------|-------------|
| agentAccesses | PermissionSetAgentAccess[] | Indicates which agents are visible to users assigned to this permission set. Available in API version 63.0 and later. |
| applicationVisibilities | PermissionSetApplicationVisibility[] | Indicates which apps are visible to users assigned to this permission set. Available in API version 29.0 and later. In API version 29.0, this field supports custom apps only. In API version 30.0 and later, this field supports both standard and custom apps. |
| classAccesses | PermissionSetApexClassAccess[] | Indicates which top-level Apex classes have methods that users assigned to this permission set can execute. Available in API version 23.0 and later. |
| customMetadataTypeAccesses | PermissionSetCustomMetadataTypeAccess[] | Indicates the custom metadata types that are read-accessible to a user assigned to this permission set. Available in API version 47.0 and later. |
| customPermissions | PermissionSetCustomPermissions[] | Indicates which custom permissions are available to users assigned to this permission set. Available in API version 31.0 and later. |
| customSettingAccesses | PermissionSetCustomSettingAccesses[] | Indicates the custom settings that are read-accessible to a user assigned to this permission set. Available in API version 47.0 and later. |
| description | string | The permission set description. Limit: 255 characters. |
| emailRoutingAddressAccesses | PermissionSetEmailRoutingAddressAccess[] | Indicates the Email Routing Address permissions that are available to users assigned to a permission set. Available in API version 62.0 and later. |
| externalCredentialPrincipalAccesses | PermissionSetExternalCredentialPrincipalAccess[] | Indicates which external credential principals are available to users assigned to this permission set. Available in API version 59.0 and later. |
| externalDataSourceAccesses | PermissionSetExternal DataSourceAccess[] | Indicates which data sources with identity type of Per User are available to users assigned to this permission set. Available in API version 27.0 and later. |
| fieldPermissions | PermissionSetFieldPermissions[] | Indicates which fields are accessible to a user assigned to this permission set, and the kind of access available (readable or editable). Available in API version 23.0 and later. |
| flowAccesses | PermissionSetFlowAccess[] | Indicates which flows can be accessed by a user assigned to this permission set. Available in API version 47.0 and later. |
| hasActivationRequired | boolean | Indicates whether the permission set requires an associated active session (true) or not (false). Available in API version 37.0 and later. |
| label | string | Required. The permission set label. Limit: 80 characters. |
| license | string | Either the related permission set license or the user license associated with this permission set. Available in API version 38.0 and later. Use this field instead of userLicense, which is deprecated and only available up to API Version 37.0. |
| objectPermissions | PermissionSetObjectPermissions[] | Indicates the objects that are accessible to a user assigned to this permission set, and the kind of access available (create, read, edit, delete, and so on). Available in API version 23.0 and later. |
| pageAccesses | PermissionSetApexPageAccess[] | Indicates which Visualforce pages that users assigned to this permission set can execute. Available in API version 23.0 and later. |
| recordTypeVisibilities | PermissionSetRecordTypeVisibility[] | Indicates which record types are visible to users assigned to this permission set. Available in API version 29.0 and later. This field is never retrieved or deployed for inactive record types. |
| ServicePresenceStatusAccesses | PermissionSetServicePresenceStatusAccess[] | Indicates which Service presence statuses that the user assigned to this profile can execute. Available in API version 64.0 and later. |
| tabSettings | PermissionSetTabVisibility[] | Indicates the tab visibility settings for this permission set. Available in API version 26.0 and later. |
| userLicense | string | Deprecated. The user license for the permission set. A user license determines the baseline of features that the user can access. Every user must have exactly one user license. Available up to API version 37.0. In API version 38.0 and later, use license. |
| userPermissions | PermissionSetUserPermissions[] | Specifies an app or system permission (such as “API Enabled”) and whether it's enabled for this permission set. In API version 28.0 and earlier, this field retrieves all user permissions, enabled or disabled. In API version 29.0 and later, this field retrieves only enabled user permissions. In API Version 40.0 and later, if a permission isn’t specified for a deployment, it’s disabled. |

## PermissionSetAgentAccess

PermissionSetAgentAccess represents the agent access configuration for users assigned through a permission set.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| agentName | string | Required. The name of the employee agent. |
| enabled | boolean | Required. Indicates whether users assigned to this permission set can use the Agentforce Employee Agent (true) or not (false). |

## PermissionSetApplicationVisibility

PermissionSetApplicationVisibility determines whether an app is visible to a user assigned to this permission set.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| application | string | Required. The app name. |
| visible | boolean | Required. Indicates whether this app is visible to users assigned to this permission set (true) or not (false). |

## PermissionSetApexClassAccess

PermissionSetApexClassAccess represents the Apex class access for users assigned to a permission set.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexClass | string | Required. The Apex class name. |
| enabled | boolean | Required. Indicates whether users assigned to this permission set can execute methods in the top-level class (true) or not (false). |

## PermissionSetCustomMetadataTypeAccess

PermissionSetCustomMetadataTypeAccess represents the custom metadata type access for users assigned to a permission set. Available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the records for this custom metadata type are readable (true) or not (false). |
| name | string | Required. The custom metadata type name. |

## PermissionSetCustomPermissions

PermissionSetCustomPermissions represents the custom permissions access for users assigned to a permission set. Only enabled custom permissions are retrieved.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the custom permission is enabled (true) or not (false). |
| name | string | Required. The custom permission name. |

## PermissionSetCustomSettingAccesses

PermissionSetCustomSettingAccesses represents the custom setting access for users assigned to a permission set. Available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the records for this custom setting are readable (true) or not (false). |
| name | string | Required. The custom setting name. |

## PermissionSetEmailRoutingAddressAccess

PermissionSetEmailRoutingAddressAccess represents the Email Routing Address access for users assigned to a permission set. Only enabled email routing addresses are retrieved.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the custom permission is enabled (true) or not (false). |
| name | string | Required. Represents an organization's Email-to-Case routing address. |

## PermissionSetExternalCredentialPrincipalAccess

PermissionSetExternalCredentialPrincipalAccess represents the access to the external credential’s principals. Users assigned to the permission set can make callouts using a named credential that references the external credential. Available in API version 59.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether external credential principal access is enabled on the permission set (true) or not (false). |
| externalCredentialPrincipal | string | Required. The name of the external credential and principal, separated by a dash. For example, myExternalCredential-myPrincipal.If the external credential and principal are part of a package, include the package’s namespace prefix with the principal’s name using this format: namespacePrefix__myExternalCredential-myPrincipal. Use two underscores (__) between the namespace prefix and the external credential principal’s name. |

## PermissionSetExternalDataSourceAccess

PermissionSetExternalDataSourceAccess represents the data source access for users with identity type of Per User. Available in API version 27.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the data source is enabled (true) or not (false). |
| externalDataSource | string | The name of the external data source. |

## PermissionSetFieldPermissions

PermissionSetFieldPermissions represents the field permissions for users assigned to a permission set. In API version 30.0 and later, permissions for required fields can’t be retrieved or deployed. In API version 54.0 and later, only field permissions enabled in the permission set are returned in queries. As of API version 38.0, you can change field permissions to make a field editable using the Metadata API for fields that you can't change through the user interface. For example, you can deploy Asset.ProductCode as an editable field even though you can't through the user interface.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| editable | boolean | Required. Indicates whether the field can be edited by the users assigned to this permission set (true) or not (false). |
| field | string | Required. The API name of the field (such as Warehouse__c.Description__c).When referencing shared Activity fields, specify Event or Task. For example, Event.Meeting__c. |
| readable | boolean | Indicates whether the field can be read by the users assigned to this permission set (true) or not (false). |

## PermissionSetFlowAccess

PermissionSetFlowAccess represents which flows a permission set grants access to. Available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether users assigned this permission set can access the flow (true) or not (false) The default value is false. |
| flow | string | Required. The name of the flow to which access is granted. |

## PermissionSetObjectPermissions

PermissionSetObjectPermissions represents the object permissions for a permission set. Use one of these elements for each permission.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| allowCreate | boolean | Required. Indicates whether the object referenced by the object field can be created by the users assigned to this permission set (true) or not (false). |
| allowDelete | boolean | Required. Indicates whether the object referenced by the object field can be deleted by the users assigned to this permission set (true) or not (false). |
| allowEdit | boolean | Required. Indicates whether the object referenced by the object field can be edited by the users assigned to this permission set (true) or not (false). |
| allowRead | boolean | Required. Indicates whether the object referenced by the object field can be viewed by the users assigned to this permission set (true) or not (false). |
| modifyAllRecords | boolean | Required. Indicates whether all records for the object referenced by the object field can be viewed, edited, or deleted by the users assigned to this permission set (true) or not (false), regardless of the sharing settings for the object. Includes private records (records with no parent object). Similar to the Modify All Data user permission, but limited to the individual object level. |
| object | string | Required. The API name of the object (such as Warehouse__c). |
| viewAllFields | string | Indicates whether all fields and field data for the object referenced by the object field can be viewed by the users assigned to this permission set (true) or not (false). Available in API version 63.0 and later. |
| viewAllRecords | boolean | Required. Indicates whether all records for the object referenced by the object field can be viewed by the users assigned to this permission set (true) or not (false), regardless of the sharing settings for the object. This setting includes private records (records with no parent object). The viewAllRecords field is similar to the View All Data user permission but limited to the individual object level. |

## PermissionSetApexPageAccess

PermissionSetApexPageAccess represents the Visualforce page access for users assigned to a permission set.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexPage | string | Required. The Visualforce page name. |
| enabled | boolean | Required. Indicates whether users assigned to this permission set can execute the Visualforce page (true) or not (false). |

## PermissionSetRecordTypeVisibility

PermissionSetRecordTypeVisibility represents the visibility of record types for this permission set.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| recordType | string | Required. The record type name, for example Account.MyRecordType. |
| visible | boolean | Required. Indicates whether the record type is visible to users assigned to this permission set (true) or not (false). |

## PermissionSetTabSetting

PermissionSetTabSetting represents the tab settings for a permission set.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| tab | string | Required. The tab name. |
| visibility | PermissionSetTabVisibility (enumeration of type string) | Required. Indicates the visibility settings for the tab. Valid values are: Available—The tab is available on the All Tabs page. Individual users can customize their display to make the tab visible in any app. None—The tab isn’t available on the All Tabs page or visible in any apps. Visible—The tab is available on the All Tabs page and appears in the visible tabs for its associated app. Individual users can customize their display to hide the tab or make it visible in other apps. |

## PermissionSetUserPermission

In API version 28.0 and earlier, PermissionSetUserPermission represents an app or system permission for a permission set. In API version 29.0 and later, this field retrieves only enabled user permissions. Use one of these elements for each permission.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the permission is enabled (true) or disabled (false). |
| name | string | Required. The name of the permission. |

## PermissionSetServicePresenceStatusAccess

Represents the presence statuses that reps assigned to this profile have access. Available in API version 64.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| servicePresenceStatus | string | Required. The name of Service Presence Status. |
| enabled | boolean | Required. Indicates whether the rep assigned to this profile has access to the presence status (true) or not (false). |
