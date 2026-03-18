# ApexComponent — Attribute Reference

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apiVersion | double | The API version for this Visualforce component. Every component has an API version specified at creation. This field is available in API version 16.0 and later. |
| content | base64Binary | The component content. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. This field is inherited from the MetadataWithContent component. |
| description | string | A description of what the component does. |
| fullName | string | The component developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| label | string | Required. The label for this component. |
| packageVersions | PackageVersion[] | The list of installed managed package versions that are referenced by this Visualforce component. Package components and Visualforce custom component are distinct concepts. A package is comprised of many elements, such as custom objects, Apex classes and triggers, and custom pages and components. For more information about managed packages, see Second-Generation Managed Packages in the Salesforce DX Developer Guide. This field is available in API version 16.0 and later. |
