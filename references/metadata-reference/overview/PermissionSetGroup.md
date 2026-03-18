# PermissionSetGroup - Metadata API

## Description

Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed.

## File Information

- **File Suffix**: `.permissionsetgroup`
- **Directory Location**: `permissionsetgroups`

## Declarative Metadata Sample Definition

When adding a permission set group, you can do something like this. Individual permissions are included in the permission set referenced, not in the permission set group.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSetGroup xmlns="http://soap.sforce.com/2006/04/metadata">
     <fullName>Finance_Mgmt_PermSetGroup</fullName>
     <description>Finance_Mgmt_PermSetGroup desc</description>
     <label>Finance_Mgmt_PermSetGroup</label>
     <permissionSets>Billing_PS</permissionSets>
</PermissionSetGroup>
```

The permission set Billing_PS contains the individual permissions included in Finance_Mgmt_PermSetGroup.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
     <fullName>Billing_PS</fullName>
     <description>Billing_PS</description>
     <label>Billing_PS</label>
     <hasActivationRequired>false</hasActivationRequired>
     <license>Salesforce</license>
     <userPermissions>
          <enabled>true</enabled>
          <name>ViewSetup</name>
     </userPermissions>
     <userPermissions>
          <enabled>true</enabled>
          <name>ViewRoles</name>
     </userPermissions>
     <userPermissions>
          <enabled>true</enabled>
          <name>EditBillingInfo</name>
    </userPermissions>
</PermissionSet>
```
