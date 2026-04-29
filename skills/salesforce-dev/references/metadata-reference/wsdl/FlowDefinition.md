# FlowDefinition — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="FlowDefinition">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="activeVersionNumber" minOccurs="0" type="xsd:int"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="masterLabel" minOccurs="0" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
```
