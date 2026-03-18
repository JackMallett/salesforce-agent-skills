# CustomObject - Metadata API

## Description

Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.

## File Information

Custom object names are automatically appended with __c. The file suffix is .object for the custom object or standard object file.

External object names are automatically appended with __x. The file suffix is .object for the external object file.

Custom, standard, and external objects are stored in the objects folder in the corresponding package directory.

Note Retrieving a component of this metadata type in a project makes the component appear in any Profile and PermissionSet components that are retrieved in the same package.

## Declarative Metadata Sample Definition

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <deploymentStatus>Deployed</deploymentStatus>
    <description>test object with one field for eclipse ide testing</description>
    <fields>
        <fullName>Comments__c</fullName>
        <description>add your comments about this object here</description>
        <inlineHelpText>This field contains comments made about this object</inlineHelpText>
        <label>Comments</label>
        <length>32000</length>
        <type>LongTextArea</type>
        <visibleLines>30</visibleLines>
    </fields>
    <label>MyFirstObject</label>
    <nameField>
        <label>MyFirstObject Name</label>
        <type>Text</type>
    </nameField>
    <pluralLabel>MyFirstObjects</pluralLabel>
    <sharingModel>ReadWrite</sharingModel>
</CustomObject>
```

The following is the metadata definition of an external object for Salesforce Connect.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>CancelEdit</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Delete</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Edit</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Follow</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>List</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>New</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>SaveEdit</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Tab</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>View</actionName>
        <type>Default</type>
    </actionOverrides>
    <deploymentStatus>InDevelopment</deploymentStatus>
    <description>Products</description>
    <enableFeeds>false</enableFeeds>
    <externalDataSource>OData</externalDataSource>
    <externalIndexAvailable>false</externalIndexAvailable>
    <externalName>Products</externalName>
    <fields>
        <fullName>DiscontinuedDate__c</fullName>
        <description>DiscontinuedDate</description>
        <externalDeveloperName>DiscontinuedDate</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>DiscontinuedDate</label>
        <required>false</required>
        <type>DateTime</type>
    </fields>
    <fields>
        <fullName>ID__c</fullName>
        <description>ID</description>
        <externalDeveloperName>ID</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>ID</label>
        <precision>18</precision>
        <required>false</required>
        <scale>0</scale>
        <type>Number</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>Name__c</fullName>
        <description>Name</description>
        <externalDeveloperName>Name</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Name</label>
        <length>128</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>Price__c</fullName>
        <description>Price</description>
        <externalDeveloperName>Price</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Price</label>
        <precision>16</precision>
        <required>false</required>
        <scale>2</scale>
        <type>Number</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>Products__c</fullName>
        <externalDeveloperName>Products</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Products</label>
        <length>20</length>
        <referenceTo>Products__x</referenceTo>
        <relationshipLabel>Products</relationshipLabel>
        <relationshipName>Products</relationshipName>
        <type>ExternalLookup</type>
    </fields>
    <fields>
        <fullName>Rating__c</fullName>
        <description>Rating</description>
        <externalDeveloperName>Rating</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Rating</label>
        <precision>18</precision>
        <required>false</required>
        <scale>0</scale>
        <type>Number</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>ReleaseDate__c</fullName>
        <description>ReleaseDate</description>
        <externalDeveloperName>ReleaseDate</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>ReleaseDate</label>
        <required>false</required>
        <type>DateTime</type>
    </fields>
    <label>Products</label>
    <pluralLabel>Products</pluralLabel>
    <searchLayouts>
        <customTabListAdditionalFields>ExternalId</customTabListAdditionalFields>
        <lookupDialogsAdditionalFields>ExternalId</lookupDialogsAdditionalFields>
        <lookupPhoneDialogsAdditionalFields>ExternalId</lookupPhoneDialogsAdditionalFields>
        <searchResultsAdditionalFields>ExternalId</searchResultsAdditionalFields>
        <searchResultsAdditionalFields>DisplayUrl</searchResultsAdditionalFields>
        <searchResultsAdditionalFields>ID__c</searchResultsAdditionalFields>
    </searchLayouts>
</CustomObject>
```
