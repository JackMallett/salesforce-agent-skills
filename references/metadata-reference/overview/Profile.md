# Profile - Metadata API

## Description

Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.

## File Information

- **File Suffix**: `.profile`
- **Directory Location**: `profiles`

## Declarative Metadata Sample Definition

The definition of a profile in an organization with a custom app, custom object, record type, tab, and user permission is:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <applicationVisibilities>
        <application>PubApps__Myriad_Publishing</application>
        <default>false</default>
        <visible>true</visible>
    </applicationVisibilities>
    <custom>true</custom>
    <objectPermissions>
        <object>TestWeblinks__c</object>
        <allowCreate>true</allowCreate>
        <allowDelete>true</allowDelete>
        <allowEdit>true</allowEdit>
        <allowRead>true</allowRead>
        <viewAllRecords>false</viewAllRecords>
        <modifyAllRecords>false</modifyAllRecords>
        <viewAllFields>false</viewAllFields>
    </objectPermissions>
    <recordTypeVisibilities>
        <default>true</default>
        <recordType>TestWeblinks__c.My First Recordtype</recordType>
        <visible>true</visible>
    </recordTypeVisibilities>
    <tabVisibilities>
        <tab>Myriad Publications</tab>
        <visibility>DefaultOn</visibility>
    </tabVisibilities>
    <userPermissions>
        <enabled>true</enabled>
        <name>APIEnabled</name>
    </userpermissions>
</Profile>
```
