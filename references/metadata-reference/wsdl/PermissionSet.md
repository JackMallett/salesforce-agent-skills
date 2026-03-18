# PermissionSet — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="MutingPermissionSet">
  <xsd:complexContent>
    <xsd:extension base="tns:PermissionSet">
      <xsd:sequence>
        <xsd:element name="label" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="PermissionSet">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="agentAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetAgentAccess"/>
        <xsd:element name="applicationVisibilities" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetApplicationVisibility"/>
        <xsd:element name="classAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetApexClassAccess"/>
        <xsd:element name="customMetadataTypeAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetCustomMetadataTypeAccess"/>
        <xsd:element name="customPermissions" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetCustomPermissions"/>
        <xsd:element name="customSettingAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetCustomSettingAccess"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="emailRoutingAddressAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetEmailRoutingAddressAccess"/>
        <xsd:element name="externalCredentialPrincipalAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetExternalCredentialPrincipalAccess"/>
        <xsd:element name="externalDataSourceAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetExternalDataSourceAccess"/>
        <xsd:element name="fieldPermissions" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetFieldPermissions"/>
        <xsd:element name="flowAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetFlowAccess"/>
        <xsd:element name="genComputingSummaryDefAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetGenComputingSummaryDefAccess"/>
        <xsd:element name="hasActivationRequired" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="label" type="xsd:string"/>
        <xsd:element name="license" minOccurs="0" type="xsd:string"/>
        <xsd:element name="objectPermissions" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetObjectPermissions"/>
        <xsd:element name="pageAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetApexPageAccess"/>
        <xsd:element name="recordTypeVisibilities" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetRecordTypeVisibility"/>
        <xsd:element name="servicePresenceStatusAccesses" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetServicePresenceStatusAccess"/>
        <xsd:element name="tabSettings" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetTabSetting"/>
        <xsd:element name="userPermissions" minOccurs="0" maxOccurs="unbounded" type="tns:PermissionSetUserPermission"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="PermissionSetAgentAccess">
  <xsd:sequence>
    <xsd:element name="agentName" type="xsd:string"/>
    <xsd:element name="enabled" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetApexClassAccess">
  <xsd:sequence>
    <xsd:element name="apexClass" type="xsd:string"/>
    <xsd:element name="enabled" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetApexPageAccess">
  <xsd:sequence>
    <xsd:element name="apexPage" type="xsd:string"/>
    <xsd:element name="enabled" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetApplicationVisibility">
  <xsd:sequence>
    <xsd:element name="application" type="xsd:string"/>
    <xsd:element name="visible" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetCustomMetadataTypeAccess">
  <xsd:sequence>
    <xsd:element name="enabled" type="xsd:boolean"/>
    <xsd:element name="name" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetCustomPermissions">
  <xsd:sequence>
    <xsd:element name="enabled" type="xsd:boolean"/>
    <xsd:element name="name" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetCustomSettingAccess">
  <xsd:sequence>
    <xsd:element name="enabled" type="xsd:boolean"/>
    <xsd:element name="name" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetEmailRoutingAddressAccess">
  <xsd:sequence>
    <xsd:element name="enabled" type="xsd:boolean"/>
    <xsd:element name="name" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetExternalCredentialPrincipalAccess">
  <xsd:sequence>
    <xsd:element name="enabled" type="xsd:boolean"/>
    <xsd:element name="externalCredentialPrincipal" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetExternalDataSourceAccess">
  <xsd:sequence>
    <xsd:element name="enabled" type="xsd:boolean"/>
    <xsd:element name="externalDataSource" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetFieldPermissions">
  <xsd:sequence>
    <xsd:element name="editable" type="xsd:boolean"/>
    <xsd:element name="field" type="xsd:string"/>
    <xsd:element name="readable" minOccurs="0" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetFlowAccess">
  <xsd:sequence>
    <xsd:element name="enabled" type="xsd:boolean"/>
    <xsd:element name="flow" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetGenComputingSummaryDefAccess">
  <xsd:sequence>
    <xsd:element name="configName" type="xsd:string"/>
    <xsd:element name="enabled" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetObjectPermissions">
  <xsd:sequence>
    <xsd:element name="allowCreate" type="xsd:boolean"/>
    <xsd:element name="allowDelete" type="xsd:boolean"/>
    <xsd:element name="allowEdit" type="xsd:boolean"/>
    <xsd:element name="allowRead" type="xsd:boolean"/>
    <xsd:element name="modifyAllRecords" type="xsd:boolean"/>
    <xsd:element name="object" type="xsd:string"/>
    <xsd:element name="viewAllFields" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="viewAllRecords" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetRecordTypeVisibility">
  <xsd:sequence>
    <xsd:element name="recordType" type="xsd:string"/>
    <xsd:element name="visible" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetServicePresenceStatusAccess">
  <xsd:sequence>
    <xsd:element name="enabled" type="xsd:boolean"/>
    <xsd:element name="servicePresenceStatus" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetTabSetting">
  <xsd:sequence>
    <xsd:element name="tab" type="xsd:string"/>
    <xsd:element name="visibility" type="tns:PermissionSetTabVisibility"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="PermissionSetTabVisibility">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="None"/>
    <xsd:enumeration value="Available"/>
    <xsd:enumeration value="Visible"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="PermissionSetUserPermission">
  <xsd:sequence>
    <xsd:element name="enabled" type="xsd:boolean"/>
    <xsd:element name="name" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
```
