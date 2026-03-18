# ApexPage — Attribute Reference

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apiVersion | double | Required. The API version for this page. Every page has an API version specified at creation. This field is available in API version 15.0 and later. If you set this field to a number lower than 15.0, it’s changed to 15.0. |
| content | base64Binary | The page content. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. This field is inherited from the MetadataWithContent component. |
| description | string | A description of what the page does. |
| fullName | string | The page developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| availableInTouch | boolean | Indicates if Visualforce tabs associated with the Visualforce page can be used in the Salesforce mobile app. (Use of this field for Salesforce Touch is deprecated.). This field is available in API version 27.0 and later. Standard object tabs that are overridden with a Visualforce page aren’t supported in the Salesforce mobile app, even if you set this field for the page. The default page for the object is displayed instead of the Visualforce page. |
| confirmationTokenRequired | boolean | Indicates whether GET requests for the page require a CSRF confirmation token. This field is available in API version 28.0 and later. If you change this field’s value from false to true, links to the page require a CSRF token to be added to them, or the page is inaccessible. |
| label | string | Required. The label for this page. |
| packageVersions | PackageVersion[] | The list of installed managed package versions that are referenced by this Visualforce page.For more information about managed packages, see Second-Generation Managed Packages in the Salesforce DX Developer Guide. This field is available in API version 16.0 and later. |
