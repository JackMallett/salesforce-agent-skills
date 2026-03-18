# CustomField - Metadata API

## Description

Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects.

## File Information

Custom fields are user-defined fields and are part of the custom object or standard object definition. See CustomObject for more information. Standard fields are predefined on standard objects.

Note Retrieving a component of this metadata type in a project makes the component appear in any Profile and PermissionSet components that are retrieved in the same package.

## Declarative Metadata Sample Definition

The following example shows a field definition for a custom field that’s named Comments__c.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
....
<fields>
        <fullName>Comments__c</fullName>
        <description>Add your comments about this object here</description>
        <inlineHelpText>This field contains help text for this object</inlineHelpText>
        <label>Comments</label>
        <length>32000</length>
        <type>LongTextArea</type>
        <visibleLines>30</visibleLines>
</fields>
....
</CustomObject>
```

This XML is the definition for two fields on the Account standard object—a custom field (MyCustomAccountField__c), and a standard field (Phone) that has history tracking enabled.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <fields>
        <fullName>MyCustomAccountField__c</fullName>
        <description>A custom field on the Account standard object.</description>
        <externalId>false</externalId>
        <inlineHelpText>Some help text.</inlineHelpText>
        <label>MyCustomAccountField</label>
        <length>100</length>
        <required>false</required>
        <trackFeedHistory>false</trackFeedHistory>
        <trackHistory>false</trackHistory>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>Phone</fullName>
        <trackFeedHistory>false</trackFeedHistory>
        <trackHistory>true</trackHistory>
    </fields>
</CustomObject>
```
