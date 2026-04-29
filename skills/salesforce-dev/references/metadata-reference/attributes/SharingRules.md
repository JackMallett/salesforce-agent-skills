# SharingRules — Attribute Reference

## Fields

The following information assumes that you’re familiar with implementing sharing rules for standard objects and custom objects. For more information on these fields, see “Sharing Settings” in Salesforce Help.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| sharingCriteriaRules | SharingCriteriaRule[] | An array of criteria-based sharing rules. Available in API version 33.0 and later. |
| sharingGuestRules | SharingGuestRule[] | An array of guest user sharing rules. Available in API version 47.0 and later. |
| sharingOwnerRules | SharingOwnerRule[] | An array of ownership-based sharing rules. Available in API version 33.0 and later. |
| sharingTerritoryRules | SharingTerritoryRule[] | An array of territory-based sharing rules. Available in API version 33.0 and later. |

## SharingCriteriaRule

Defines a criteria-based sharing rule. It extends SharingBaseRule and inherits all its fields. Available in API version 33.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| booleanFilter | string | Advanced filter conditions that are specified for the sharing rule. |
| criteriaItems | FilterItem[] | An array of the boolean criteria (conditions) for the sharing rule. |
| includeRecordsOwnedByAll | boolean | Required. Indicates whether records owned by users who can’t have an assigned role are included in the records shared (true) or not (false). Examples of users who can’t have an assigned role are high-volume users and system users such as automated process users.or Salesforce system users. You can’t edit this field after the sharing rule is created. |

## SharingGuestRule

Defines a guest user sharing rule. It extends SharingBaseRule and inherits all its fields, except accountSettings. Available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| booleanFilter | string | Advanced filter conditions that are specified for the sharing rule. Available in API version 48.0 and later. |
| criteriaItems | FilterItem[] | An array of the boolean criteria (conditions) for the sharing rule. Available in API version 48.0 and later. |
| includeHVUOwnedRecords | boolean | Required. Indicates whether records owned by high-volume community or site users are included in the records shared (true) or not (false). By default, only records owned by authenticated users, guest users, and queues are included in sharing rules. This field has a default value of false. Available in API version 52.0 and later. You can’t edit this field after the sharing rule is created. |

## SharingOwnerRule

Defines an ownership-based sharing rule. It extends SharingBaseRule and inherits all its fields. Available in API version 33.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| sharedFrom | SharedTo | Required. Specifies the record owners. If you’re using Sales Territories, use modelName.territoryName for the shared-to and shared-from territory and territoryAndSubordinates values on the SharedTo type, where: modelName equals the name of the active territory model in the API. territoryName equals the territory’s name in the API. |

## AccountSharingRules

Represents the sharing rules for accounts. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| criteriaBasedRules | AccountCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | AccountOwnerSharingRule[] | List that defines user membership-based rules. |

## CampaignSharingRules

Represents the sharing rules for campaigns. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| criteriaBasedRules | CampaignCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | CampaignOwnerSharingRule[] | List that defines user membership-based rules. |

## CaseSharingRules

Represents the sharing rules for cases. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| criteriaBasedRules | CaseCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | CaseOwnerSharingRule[] | List that defines user membership-based rules. |

## ContactSharingRules

Represents the sharing rules for contacts. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| criteriaBasedRules | ContactCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | ContactOwnerSharingRule[] | List that defines user membership-based rules. |

## LeadSharingRules

Represents the sharing rules for leads. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| criteriaBasedRules | LeadCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | LeadOwnerSharingRule[] | List that defines user membership-based rules. |

## OpportunitySharingRules

Represents the sharing rules for opportunities. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| criteriaBasedRules | OpportunityCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | OpportunityOwnerSharingRule[] | List that defines user membership-based rules. |

## AccountTerritorySharingRules

Represents the sharing rules for account territories in the original territory management feature. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| rules | AccountTerritorySharingRule[] | List that defines user membership-based rules. The list of acceptable values for the sharedFrom fields are: territory territoryAndSubordinates |

## CustomObjectSharingRules

Represents the sharing rules for custom objects. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| criteriaBasedRules | CustomObjectCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| ownerRules | CustomObjectOwnerSharingRule[] | List that defines user membership-based rules. |

## UserSharingRules

Represents the sharing rules for users. With user sharing rules, you can share members of a group with members of another group. It extends the SharingRules metadata type and inherits its fullName field. Only available in API version 32.0 and earlier.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| criteriaBasedRules | UserCriteriaBasedSharingRule[] | List that defines user criteria-based rules. |
| membershipRules | UserMembershipSharingRule[] | List that defines user membership-based rules. |

## Child Metadata Types

This entity contains the following child metadata types:

- BaseSharingRule
- CriteriaBasedSharingRule
- OwnerSharingRule
