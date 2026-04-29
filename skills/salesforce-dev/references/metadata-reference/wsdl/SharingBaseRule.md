# SharingBaseRule — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="AccountSharingRuleSettings">
  <xsd:sequence>
    <xsd:element name="caseAccessLevel" type="xsd:string"/>
    <xsd:element name="contactAccessLevel" type="xsd:string"/>
    <xsd:element name="opportunityAccessLevel" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="SharedTo">
  <xsd:sequence>
    <xsd:element name="allCustomerPortalUsers" minOccurs="0" type="xsd:string"/>
    <xsd:element name="allInternalUsers" minOccurs="0" type="xsd:string"/>
    <xsd:element name="allPartnerUsers" minOccurs="0" type="xsd:string"/>
    <xsd:element name="channelProgramGroup" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="channelProgramGroups" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="group" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="groups" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="guestUser" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="managerSubordinates" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="managers" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="portalRole" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="portalRoleAndSubordinates" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="queue" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="role" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="roleAndSubordinates" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="roleAndSubordinatesInternal" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="roles" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="rolesAndSubordinates" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="territories" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="territoriesAndSubordinates" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="territory" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="territoryAndSubordinates" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="SharingBaseRule">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="accessLevel" type="xsd:string"/>
        <xsd:element name="accountSettings" minOccurs="0" type="tns:AccountSharingRuleSettings"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="label" type="xsd:string"/>
        <xsd:element name="sharedTo" type="tns:SharedTo"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="SharingCriteriaRule">
  <xsd:complexContent>
    <xsd:extension base="tns:SharingBaseRule">
      <xsd:sequence>
        <xsd:element name="booleanFilter" minOccurs="0" type="xsd:string"/>
        <xsd:element name="criteriaItems" minOccurs="0" maxOccurs="unbounded" type="tns:FilterItem"/>
        <xsd:element name="includeRecordsOwnedByAll" type="xsd:boolean"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="SharingGuestRule">
  <xsd:complexContent>
    <xsd:extension base="tns:SharingBaseRule">
      <xsd:sequence>
        <xsd:element name="booleanFilter" minOccurs="0" type="xsd:string"/>
        <xsd:element name="criteriaItems" minOccurs="0" maxOccurs="unbounded" type="tns:FilterItem"/>
        <xsd:element name="includeHVUOwnedRecords" type="xsd:boolean"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="SharingOwnerRule">
  <xsd:complexContent>
    <xsd:extension base="tns:SharingBaseRule">
      <xsd:sequence>
        <xsd:element name="sharedFrom" type="tns:SharedTo"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="SharingRules">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="sharingCriteriaRules" minOccurs="0" maxOccurs="unbounded" type="tns:SharingCriteriaRule"/>
        <xsd:element name="sharingGuestRules" minOccurs="0" maxOccurs="unbounded" type="tns:SharingGuestRule"/>
        <xsd:element name="sharingOwnerRules" minOccurs="0" maxOccurs="unbounded" type="tns:SharingOwnerRule"/>
        <xsd:element name="sharingTerritoryRules" minOccurs="0" maxOccurs="unbounded" type="tns:SharingTerritoryRule"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="SharingTerritoryRule">
  <xsd:complexContent>
    <xsd:extension base="tns:SharingOwnerRule">
      <xsd:sequence/>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
```
