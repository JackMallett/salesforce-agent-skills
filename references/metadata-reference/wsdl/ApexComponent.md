# ApexComponent — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="ApexComponent">
  <xsd:complexContent>
    <xsd:extension base="tns:MetadataWithContent">
      <xsd:sequence>
        <xsd:element name="apiVersion" minOccurs="0" type="xsd:double"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="label" type="xsd:string"/>
        <xsd:element name="packageVersions" minOccurs="0" maxOccurs="unbounded" type="tns:PackageVersion"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="MetadataWithContent">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="content" minOccurs="0" type="xsd:base64Binary"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="PackageVersion">
  <xsd:sequence>
    <xsd:element name="majorNumber" type="xsd:int"/>
    <xsd:element name="minorNumber" type="xsd:int"/>
    <xsd:element name="namespace" minOccurs="0" type="xsd:string"/>
    <xsd:element name="packageId" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
```
