# Role — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="Role">
  <xsd:complexContent>
    <xsd:extension base="tns:RoleOrTerritory">
      <xsd:sequence>
        <xsd:element name="parentRole" minOccurs="0" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="RoleOrTerritory">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="caseAccessLevel" minOccurs="0" type="xsd:string"/>
        <xsd:element name="contactAccessLevel" minOccurs="0" type="xsd:string"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="mayForecastManagerShare" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="name" type="xsd:string"/>
        <xsd:element name="opportunityAccessLevel" minOccurs="0" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
```
