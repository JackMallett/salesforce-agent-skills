# ApexTrigger — Attribute Reference

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apiVersion | double | Required. The API version for this trigger. Every trigger has an API version specified at creation. |
| content | base64 | The Apex trigger definition. This field is inherited from the MetadataWithContent component. |
| fullName | string | The Apex trigger name. The name can only contain characters, letters, and the underscore (_) character, must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters. This field is inherited from the Metadata component. |
| packageVersions | PackageVersion[] | The list of installed managed package versions that are referenced by this Apex trigger.For more information about managed packages, see the Second-Generation Managed Packaging Developer Guide. This field is available in API version 16.0 and later. |
| status | ApexCodeUnitStatus (enumeration of type string) | Required. The status of the Apex trigger. The following string values are valid: Active - The trigger is active. Inactive - The trigger is inactive, but not deleted. Deleted - The trigger is marked for deletion. Useful for managed packages, because it allows a trigger to be deleted when a managed package is updated. |
