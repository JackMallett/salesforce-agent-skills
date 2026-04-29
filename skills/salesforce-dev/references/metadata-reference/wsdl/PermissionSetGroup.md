# PermissionSetGroup — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PermissionSetGroup">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="hasActivationRequired" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="label" type="xsd:string"/>
        <xsd:element name="mutingPermissionSets" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
        <xsd:element name="permissionSets" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
        <xsd:element name="status" minOccurs="0" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
```
