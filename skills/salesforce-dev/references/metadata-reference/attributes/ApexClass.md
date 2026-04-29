# ApexClass — Attribute Reference

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apiVersion | double | The API version for this class. Every class has an API version specified at creation. |
| content | base64 | The Apex class definition. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. This field is inherited from the MetadataWithContent component. |
| fullName | string | The Apex class name. The name can only contain characters, letters, and the underscore (_) character, must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters. This field is inherited from the Metadata component. |
| packageVersions | PackageVersion[] | The list of installed managed package versions that are referenced by this Apex class.For more information about managed packages, see Second-Generation Managed Packages in the Salesforce DX Developer Guide. This field is available in API version 16.0 and later. |
| status | ApexCodeUnitStatus (enumeration of type string) | The status of the Apex class. The following string values are valid: Active - The class is active. Deleted - The class is marked for deletion. This value is useful for managed packages, because it allows a class to be deleted when a managed package is updated. ApexCodeUnitStatus includes an Inactive option, but it’s only supported for ApexTrigger; it isn’t supported for ApexClass. |

## PackageVersion

PackageVersion identifies a version of a managed package. A package version is a number that identifies the set of components included in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). The major and minor numbers increase to a chosen value during every major release. The patchNumber is generated and updated only for a patch release. It’s available in API version 16.0 and later. See Set Package Versions for Apex Classes and Triggers in the Apex Developer Guide.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| namespace | string | Required. In a packaging context, a namespace prefix is a one to 15-character alphanumeric identifier that distinguishes your package and its contents from packages of other developers on AppExchange. Namespace prefixes are case-insensitive. For example, ABC and abc aren’t recognized as unique. Your namespace prefix must be globally unique across all Salesforce orgs.Salesforce automatically prepends your namespace prefix, followed by two underscores (“__”), to all unique component names in your Salesforce organization. A unique package component is one that requires a name that no other component has within Salesforce, such as custom objects, custom fields, custom links, s-controls, and validation rules. For more information about namespaces, see Create and Register Your Namespace in the Second-Generation Managed Packaging Developer Guide. |
| majorNumber | int | Required. The major number of the package version. A package version number has a majorNumber.minorNumber format. |
| minorNumber | int | Required. The minor number of the package version. A package version number has a majorNumber.minorNumber format. |
