# LightningComponentBundle — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="Capabilities">
  <xsd:sequence>
    <xsd:element name="capability" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="LightningComponentBundle">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="ai" minOccurs="0" type="xsd:base64Binary"/>
        <xsd:element name="apiVersion" minOccurs="0" type="xsd:double"/>
        <xsd:element name="capabilities" minOccurs="0" type="tns:Capabilities"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="isExplicitImport" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="isExposed" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="lwcResources" minOccurs="0" type="tns:LwcResources"/>
        <xsd:element name="masterLabel" minOccurs="0" type="xsd:string"/>
        <xsd:element name="runtimeNamespace" minOccurs="0" type="xsd:string"/>
        <xsd:element name="targetConfigs" minOccurs="0" type="xsd:base64Binary"/>
        <xsd:element name="targets" minOccurs="0" type="tns:Targets"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="LwcResource">
  <xsd:sequence>
    <xsd:element name="filePath" type="xsd:string"/>
    <xsd:element name="source" type="xsd:base64Binary"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="LwcResources">
  <xsd:sequence>
    <xsd:element name="lwcResource" minOccurs="0" maxOccurs="unbounded" type="tns:LwcResource"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="Targets">
  <xsd:sequence>
    <xsd:element name="target" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
```
