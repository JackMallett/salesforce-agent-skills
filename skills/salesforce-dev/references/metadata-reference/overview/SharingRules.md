# SharingRules - Metadata API

## Description

Represents the base container for sharing rules, which can be criteria-based, ownership-based, territory-based, or for guest user access. SharingRules enables you to share records with a set of users, using rules that specify the access level for the target user group.

## File Information

In API version 33.0 and later, components are stored in the sharingRules folder and their file name matches the object name with the suffix .sharingRules. Criteria-based, owner-based, territory-based, and guest user sharing rules are all contained in a object.sharingRule file.

Before API version 33.0, SharingRules components are stored in their corresponding object directory and the file name matches the object name. For example, the accountSharingRules directory contains an Account.sharingRules file for account sharing rules. SharingRules for custom objects are stored in the customObjectSharingRules directory, which contains files with the .sharingRules extension such as ObjA__c.sharingRules, where ObjA refers to the developer name of a custom object type.

## Declarative Metadata Sample Definition

The following sample XML definition represents a criteria-based sharing rule in API version 33.0.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SharingRules xmlns="http://soap.sforce.com/2006/04/metadata">
    <sharingCriteriaRules>
        <fullName>AccountCriteriaShareWithCEO</fullName>
        <accessLevel>Edit</accessLevel>
        <accountSettings>
            <caseAccessLevel>Read</caseAccessLevel>
            <contactAccessLevel>Edit</contactAccessLevel>
            <opportunityAccessLevel>Edit</opportunityAccessLevel>
        </accountSettings>
        <criteriaItems>
            <field>Name</field>
            <operation>startsWith</operation>
            <value>Test</value>
        </criteriaItems>
        <description>my account criteria rule description</description>
        <label>AccountCriteriaShareWithCEO</label>
        <sharedTo>
            <role>CEO</role>
        </sharedTo>
    </sharingCriteriaRules>
</SharingRules>
```

The following sample XML definition represents an ownership-based sharing rule in API version 33.0.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SharingRules xmlns="http://soap.sforce.com/2006/04/metadata">
    <sharingOwnerRules>
        <fullName>MyCase</fullName>
        <accessLevel>Edit</accessLevel>
        <description>my case test owner sharing rule desc</description>
        <label>MyCase</label>
        <sharedFrom>
            <role>COO</role>
        </sharedFrom>
        <sharedTo>
            <role>CEO</role>
        </sharedTo>
    </sharingOwnerRules>
</SharingRules>
```

The following sample XML definition represents a territory-based sharing rule in API version 33.0.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SharingRules xmlns="http://soap.sforce.com/2006/04/metadata">
    <sharingTerritoryRules>
        <fullName>MyAccountTerritoryRule</fullName>
        <accessLevel>Read</accessLevel>
        <accountSettings>
            <caseAccessLevel>None</caseAccessLevel>
            <contactAccessLevel>Read</contactAccessLevel>
            <opportunityAccessLevel>None</opportunityAccessLevel>
        </accountSettings>
        <description>MyAccountTerritoryRule desc</description>
        <label>MyAccountTerritoryRule</label>
        <sharedFrom>
            <territory>My_territory</territory>
        </sharedFrom>
        <sharedTo>
            <role>CEO</role>
        </sharedTo>
    </sharingTerritoryRules>
</SharingRules>
```

The following is the definition of two account owner-based sharing rules in API version 32.0 and earlier. The file name corresponds to Account.sharingRules under the accountSharingRules directory. In this definition, ownerRules corresponds to AccountOwnerSharingRule.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<AccountSharingRules xmlns="http://soap.sforce.com/2006/04/metadata">
    <ownerRules>
        <fullName>G1Dev_G2New</fullName>
        <sharedFrom>
            <group>G1Dev</group>
        </sharedFrom>
        <sharedTo>
            <group>G2New</group>
        </sharedTo>
        <accountAccessLevel>Read</caseAccessLevel>
        <caseAccessLevel>None</caseAccessLevel>
        <contactAccessLevel>Read</contactAccessLevel>
        <name>G1Dev_G2New</name>
        <opportunityAccessLevel>Edit</opportunityAccessLevel>
    </ownerRules>
    <ownerRules>
        <fullName>G2New_R1New</fullName>
        <sharedFrom>
            <group>G2New</group>
        </sharedFrom>
        <sharedTo>
            <roleAndSubordinates>R1New</roleAndSubordinates>
        </sharedTo>
        <accountAccessLevel>Edit</accountAccessLevel>
        <caseAccessLevel>Read</caseAccessLevel>
        <contactAccessLevel>Edit</contactAccessLevel>
        <name>G2New_R1New</name>
        <opportunityAccessLevel>None</opportunityAccessLevel>
    </ownerRules>
</AccountSharingRules>
```

The following is the definition of a user criteria-based sharing rule and a user membership-based sharing rule in API version 32.0 and earlier. The file name corresponds to User.sharingRules under the userSharingRules directory.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<UserSharingRules xmlns="http://soap.sforce.com/2006/04/metadata">
    <criteriaBasedRules>
        <fullName>shareUsers2</fullName>
        <sharedTo>
            <group>Asia_Division</group>
        </sharedTo>
        <criteriaItems>
            <field>FirstName</field>
            <operation>equals</operation>
            <value>John</value>
        </criteriaItems>
        <name>shareUsers2</name>
        <userAccessLevel>Read</userAccessLevel>
    </criteriaBasedRules>
    <membershipRules>
        <fullName>shareUsers1</fullName>
        <sharedTo>
            <group>South_America_Division</group>
        </sharedTo>
        <sharedFrom>
            <group>Asia_Division</group>
        </sharedFrom>
        <name>shareUsers1</name>
        <userAccessLevel>Read</userAccessLevel>
    </membershipRules>
</UserSharingRules>
```
