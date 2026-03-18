# Profile — Attribute Reference

## Fields

The content of a profile returned by Metadata API depends on the content requested in the RetrieveRequest message. For example, profiles only include field-level security for fields included in custom objects returned in the same RetrieveRequest as the profiles. The profile definition contains the following fields: If you deploy a profile that doesn’t exist in the target org and don't specify any permissions or settings, then the resulting profile contains all permissions and settings in the standard Minimum Access - Salesforce profile (API version 60.0 and later) or the standard Standard User profile (API version 59.0 and earlier).

| Field Name | Field Type | Description |
|------------|------------|-------------|
| agentAccesses | ProfileAgentAccess[] | Indicates which agents are visible to users assigned to this profile. Available in API version 63.0 and later. |
| applicationVisibilities | ProfileApplicationVisibility[] | Indicates which apps are visible to users assigned to this profile. In API version 29.0 and earlier, this field supports custom apps only. In API version 30.0 and later, this field supports both standard and custom apps. |
| categoryGroupVisibilities | ProfileCategoryGroupVisibility[] | Indicates which data category groups are visible to users assigned to this profile. Available in API version 41.0 and later. |
| classAccesses | ProfileApexClassAccess[] | Indicates which top-level Apex classes have methods that users assigned to this profile can execute. |
| custom | boolean | Indicates whether the profile is a custom (true) or standard (false) profile. Available in API version 30.0 and later. |
| customMetadataTypeAccesses | ProfileCustomMetadataTypeAccess[] | Indicates the custom metadata types that are read-accessible to a user assigned to this profile. Available in API version 47.0 and later. |
| customPermissions | ProfileCustomPermissions[] | Indicates which custom permissions are available to users assigned to this profile. Available in API version 31.0 and later. |
| customSettingAccesses | ProfileCustomSettingAccesses[] | Indicates the custom settings that are read-accessible to a user assigned to this profile. Available in API version 47.0 and later. |
| description | string | The profile description. Limit: 255 characters. Available in API version 30.0 and later. |
| externalDataSourceAccesses | ProfileExternalDataSourceAccess[] | Indicates which data sources with identity type of Per User are available to users assigned to this profile. Available in API version 27.0 and later. |
| fieldLevelSecurities | ProfileFieldLevelSecurity[] | Indicates which fields are visible to a user assigned to this profile, and the kind of access available (editable or hidden). This field is available in API version 22.0 and earlier. |
| fieldPermissions | ProfileFieldLevelSecurity[] | Indicates which fields are visible to a user assigned to this profile, and the kind of access available (editable or readable). This field is available in API version 23.0 and later. |
| flowAccesses | ProfileFlowAccess[] | Indicates which flows can be accessed by a user assigned to this profile. Available in API version 47.0 and later. |
| fullName | string | The name can only contain characters, letters, and the underscore (_) character. The name must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call. |
| layoutAssignments | ProfileLayoutAssignments[] | Indicates which layout to use for this profile. |
| loginFlows | LoginFlow[] | Indicates a business process that you direct users to before they access Salesforce. |
| loginHours | ProfileLoginHours[] | Indicates the hours within which a user with this profile can log in. If not specified, the profile doesn’t restrict a user’s login hours.This field is available in API version 25.0 and later. |
| loginIpRanges | ProfileLoginIpRange[] | The list of IP address ranges from which users with a particular profile can log in.This field is available in API version 17.0 and later. |
| objectPermissions | ProfileObjectPermissions[] | Indicates which objects are accessible to a user assigned to this profile, and the kind of access available (create, read, edit, delete, and so on). In API version 28.0 and later, this field is only retrieved when allowRead is true. In API version 50.0 and later, editing standard objects on standard profiles is disabled. |
| pageAccesses | ProfileApexPageAccess[] | Indicates which Visualforce pages that users assigned to this profile can execute. |
| profileActionOverrides | ProfileActionOverride[] | A list of the Lightning Experience Home page action overrides that are assigned to this profile. When a user logs in with a profile, a matching ProfileActionOverride assignment takes precedence over existing overrides for the Home tab specified in ActionOverride.This field is available in API versions 37.0 to 44.0. |
| recordTypeVisibilities | ProfileRecordTypeVisibility[] | Indicates the visibility of record types for users assigned to this profile. In API version 29.0 and later, this field isn’t retrieved or deployed for inactive record types. |
| ServicePresenceStatusAccesses | ProfileServicePresenceStatusAccess[] | Indicates which Service presence statuses that the user assigned to this profile can execute. Available in API version 64.0 and later. |
| tabVisibilities | ProfileTabVisibility[] | Indicates which record types are visible to a user assigned to this profile, and therefore which tabs within an app are visible. |
| userLicense | string | The User License for the profile. A user license determines the baseline of features that the user can access. Every user must have exactly one user license.This field is available in API version 17.0 and later. |
| userPermissions | ProfileUserPermission[] | Specifies a user permission (such as “API Enabled”) and whether it’s enabled for this profile. This field retrieves only enabled user permissions. Available in API version 29.0 and later. |

## LoginFlow

LoginFlow represents a business process that you direct users to before they access Salesforce. You can use Metadata API to define existing flows as login flows and to edit login flow definitions. To delete login flow definitions, use the Login Flow page.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| flow | string | Required only if the uiLoginFlowType is VisualWorkflow. The fullName of the Flow. Before you can deploy the LoginFlow, the Flow referenced here must be deployed in your org and its status must be Active. |
| flowtype | LoginFlowType (enumeration of type string) | Required. The value is UI. |
| friendlyname | string | Required. The name of the LoginFlow. |
| uiLoginFlowType | UiLoginFlowType (enumeration of type string) | Required. The type of login flow. These are valid values. VisualWorkflow—Indicates a Salesforce Flow. You can create these flows using Flow Builder. VisualForce—Indicates a flow created using Visualforce. |
| useLightningRuntime | boolean | Indicates if Lightning Runtime is used (true) or not (false (default)). Used only if uiLoginFlowType is VisualWorkflow. |
| vfFlowPage | string | Required only if the uiLoginFlowType is VisualForce. The name of the VisualForce page. |
| vfFlowPageTitle | string | Required only if the uiLoginFlowType is VisualForce. The name of the VisualForce page. |

## ProfileActionOverride

ProfileActionOverride represents a user profile-based override of an ActionOverride on a standard Home tab in Lightning Experience.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| actionName | string | Required. The possible values are the same as the actions you can override: accept clone delete edit list new tab view |
| content | string | Set this field if type is set to flexipage, lightningcomponent, scontrol, or visualforce. It refers to the name of the Lightning page, Lightning component, s-control, or Visualforce page to use as the override. To reference installed components, use this format: Component_namespace__Component_name. |
| formFactor | FormFactor (enumeration of type string) | The size of the page being overridden.The Large value represents the Lightning Experience desktop environment and is valid only for the flexipage and lightningcomponent types. The Small value represents the Salesforce mobile app on a phone or tablet. The Medium value is reserved for future use. The null value (which is the same as specifying no value) represents Salesforce Classic. |
| pageOrSobjectType | string | The name of the sObject type being overridden. Valid values are standard and custom.This value must be standard-home when actionName is tab. |
| recordType | string | The record type assigned to the ProfileActionOverride. If the PageOrSobjectType is standard-home, this field is null. |
| type | ActionOverrideType (enumeration of type string) | Required. Represents the type of action override. Valid values are described in ActionOverrideType. |

## ProfileAgentAccess

ProfileAgentAccess represents the agent access configuration for users assigned through a profile.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| agentName | string | Required. The name of the employee agent. |
| enabled | boolean | Required. Indicates whether users assigned to this profile can use the Agentforce Employee Agent (true) or not (false). |

## ProfileApplicationVisibility

ProfileApplicationVisibility determines whether an app is visible to a user assigned to this profile.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| application | string | Required. The name of the app. |
| default | boolean | Required. Indicates whether the app is the default app (true) or not (false). Only one app per profile can be set to true. |
| visible | boolean | Required. Indicates whether this app is visible to users assigned to this profile (true) or not (false). |

## ProfileCategoryGroupVisibility

ProfileCategoryGroupVisibility determines whether a data category group is visible to a user assigned to this profile. Available in API version 41.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| dataCategories | string[] | Array of one or more data category names. |
| dataCategoryGroup | string | Required. The name of the data category group. |
| visibility | CategoryGroupVisibility (enumeration of type string) | Required. Indicates the visibility of the data category. Valid values are: ALL CUSTOM NONE |

## ProfileCustomMetadataTypeAccess

ProfileCustomMetadataTypeAccess represents the custom metadata type access for users assigned to a profile. Available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the records for this custom metadata type are readable (true) or not (false). |
| name | string | Required. The custom metadata type name. |

## ProfileApexClassAccess

ProfileApexClassAccess determines which top-level Apex classes have methods that users assigned to this profile can execute.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexClass | string | Required. The Apex class name. |
| enabled | boolean | Required. Indicates whether users assigned to this profile can execute methods in the top-level class (true) or not (false). |

## ProfileCustomPermissions

ProfileCustomPermissions represents the custom permissions access for users assigned to a profile. Only enabled custom permissions are retrieved.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the custom permission is enabled (true) or not (false). |
| name | string | Required. The custom permission name. |

## ProfileCustomSettingAccesses

ProfileCustomSettingAccesses represents the custom setting access for users assigned to a profile. Available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the records for this custom setting are readable (true) or not (false). |
| name | string | Required. The custom setting name. |

## ProfileExternalDataSourceAccess

ProfileExternalDataSourceAccess represents the data source access for users with identity type of Per User. Available in API version 27.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the data source is enabled (true) or not (false). |
| externalDataSource | string | The name of the external data source. |

## ProfileFieldLevelSecurity

ProfileFieldLevelSecurity represents the field level security for users assigned to a profile. In API version 30.0 and later, permissions for required fields can’t be retrieved or deployed.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| editable | boolean | Required. Indicates whether this field is editable (true) or not (false). In API version 30.0 and later, when deploying a new custom field, this field is false by default. |
| field | string | Required. Indicates the name of the field.When referencing shared Activity fields, specify Event or Task. For example, Event.Meeting__c. |
| hidden | boolean | Indicates whether this field is hidden (true) or not (false). This field is available in API version 22.0 and earlier. For portal profiles, this field is set to true by default in API version 19.0 and later. |
| readable | boolean | Indicates whether this field is readable (true) or not (false). This field is available in API version 23.0 and later. It replaces the hidden field.In API version 30.0 and later, when deploying a new custom field, this field is false by default. For portal profiles, this field is set to false by default. |

## ProfileFlowAccess

ProfileFlowAccess represents which flows a profile grants access to. Available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether users assigned this profile can access the flow (true) or not (false). The default value is false. |
| flow | string | Required. The name of the flow to which access is granted. |

## ProfileLayoutAssignments

ProfileLayoutAssignments determines which layout to use for a profile and a given entity.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| layout | string | Required. Indicates the layout for this particular entity. |
| recordType | string | This field is optional. If the recordType of the record matches a layout assignment rule, it uses the specified layout. |

## ProfileLoginHours

ProfileLoginHours restricts the days and times within which users with a particular profile can log in.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| weekdayStart | string | Specifies the earliest time on that day that a user with this profile can log in. If a start time for a particular day is specified, an end time for that day also must be specified. Start can’t be greater than end for a particular day. Valid values for weekday: monday, tuesday, wednesday, thursday, friday, saturday, or sunday. For example, mondayStart indicates the beginning of the login period for Monday. Valid values for Start: the number of minutes since midnight. Must be evenly divisible by 60 (full hours). For example, 300 is 5:00 AM. |
| weekdayEnd | string | Specifies the time on that day that a user with this profile must log out by. Valid values for weekday: monday, tuesday, wednesday, thursday, friday, saturday, or sunday. For example, mondayEnd indicates the close of the login period for Monday. Valid values for End: the number of minutes since midnight. Must be evenly divisible by 60 (full hours). For example, 1020 is 5:00 PM. |

## ProfileLoginIpRange

ProfileLoginIpRange IP defines an IP address range that users with a particular profile can log in from.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| description | string | Use this field to identify the purpose of the range, such as which part of a network corresponds to this range. This field is available in API version 31.0 and later. |
| endAddress | string | Required. The end IP address for the range. |
| startAddress | string | Required. The start IP address for the range. |

## ProfileObjectPermissions

ProfileObjectPermissions represents a user's access to objects.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| allowCreate | boolean | Indicates whether the object referenced by the object field can be created by the users assigned to this profile (true) or not (false).This field is named revokeCreate before version 14.0 and the logic is reversed. The field name change and the update from true to false and the reverse is automatically handled between versions and doesn’t require any manual editing of existing XML component files. |
| allowDelete | boolean | Indicates whether the object referenced by the object field can be deleted by the users assigned to this profile (true) or not (false).This field is named revokeDelete before version 14.0 and the logic is reversed. The field name change and the update from true to false and the reverse is automatically handled between versions and doesn’t require any manual editing of existing XML component files. |
| allowEdit | boolean | Indicates whether the object referenced by the object field can be edited by the users assigned to this profile (true) or not (false).This field is named revokeEdit before version 14.0 and the logic is reversed. The field name change and the update from true to false and the reverse is automatically handled between versions and doesn’t require any manual editing of existing XML component files. |
| allowRead | boolean | Indicates whether the object referenced by the object field can be seen by the users assigned to this profile (true) or not (false).This field is named revokeRead before version 14.0 and the logic is reversed. The field name change and the update from true to false and the reverse is automatically handled between versions and doesn’t require any manual editing of existing XML component files. |
| modifyAllRecords | boolean | Indicates whether all records for the object referenced by the object field can be read, edited, or deleted by the users assigned to this profile (true) or not (false), regardless of the sharing settings for the object. This setting is equivalent to the Modify All Data user permission limited to the individual object level. Available in API version 15.0 and later. This field isn’t available for all objects. Refer to the profile in the user interface to determine which objects currently support these permissions. Profiles with Modify All Data ignore modifyAllRecords entries in Metadata API and don't return an error if Modify All Data is enabled on the profile. |
| object | string | Required. The name of the object whose permissions are altered by this profile, for example, MyCustomObject__c. |
| viewAllFields | boolean | Indicates whether all fields and field data for the object referenced by the object field can be read by the users assigned to this profile (true) or not (false). Available in API version 63.0 and later. |
| viewAllRecords | boolean | Indicates whether all records for the object referenced by the object field can be read by the users assigned to this profile (true) or not (false), regardless of the sharing settings for the object. This setting includes private records (records with no parent object). This setting is equivalent to the View All Data user permission limited to the individual object level. Available in API version 15.0 and later. This field isn’t available for all objects. Refer to the profile in the user interface to determine which objects currently support these permissions. Profiles with "View All Data" ignore viewAllRecords entries in the Metadata API and don't return an error if View All Data is enabled on the profile. |

## ProfileApexPageAccess

ProfileApexPageAccess determines which Visualforce pages that users assigned to this profile can execute.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexPage | string | Required. The Visualforce page name. |
| enabled | boolean | Required. Indicates whether users assigned to this profile can execute the Visualforce page (true) or not (false). |

## ProfileRecordTypeVisibility

ProfileRecordTypeVisibility represents the visibility of record types for this profile. Record types let you offer different business processes, picklist values, and page layouts to different users.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| default | boolean | Required. Indicates whether the record type is the default when users with this profile create records for this object (true) or not (false). |
| personAccountDefault | boolean | When Person Accounts is enabled, this field indicates whether the record type is this profile’s default person account record type (true) or not (false). When Person Accounts is disabled, this field’s value has no impact.Person accounts aren’t enabled by default in Salesforce. To request person accounts, contact Salesforce. |
| recordType | string | Required. The record type name, for example Account.MyRecordType. |
| visible | boolean | Required. Indicates whether this record type is visible to users assigned to this profile (true) or not (false). |

## ProfileTabVisibility

ProfileTabVisibility represents the visibility of tabs for this profile. For version 17.0 and later, ProfileTabVisibility supports visibility of tabs for standard objects. The manifest file must include the standard object corresponding to a standard tab to retrieve the tab visibility in a profile.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| tab | string | Required. The name of the tab. |
| visibility | TabVisibility (enumeration of type string) | Required. Indicates the visibility of the tab. Valid values are: DefaultOff—The tab is available on the All Tabs page. Users can individually customize their display to make the tab visible in any app. DefaultOn—The tab is available on the All Tabs page and appears in the visible tabs for its associated app. Users can individually customize their display to hide the tab or make it visible in other apps. Hidden—The tab isn’t available on the All Tabs page or visible in any apps. In API version 36.0 and earlier, Hidden is returned only if visibility was set using the API. If it was set to Hidden from the profile in Salesforce, the API doesn’t return a visibility value. For version 37.0 and later, when tab visibility is set to hidden, the API returns Hidden, regardless of how the value was set. |

## ProfileUserPermission

ProfileUserPermission represents an app or system permission for a profile. Use one of these elements for each permission.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| enabled | boolean | Required. Indicates whether the permission is enabled (true) or disabled (false). |
| name | string | Required. The permission name. |

## ProfileServicePresenceStatusAccess

Represents the presence statuses that reps assigned to this profile have access. Available in API version 64.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| servicePresenceStatus | string | Required. The name of Service Presence Status. |
| enabled | boolean | Required. Indicates whether the rep assigned to this profile has access to the presence status (true) or not (false). |
