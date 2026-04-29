# QuickAction — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:simpleType name="ActionSubtype">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="ScreenAction"/>
    <xsd:enumeration value="Action"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="FieldOverride">
  <xsd:sequence>
    <xsd:element name="field" type="xsd:string"/>
    <xsd:element name="formula" minOccurs="0" type="xsd:string"/>
    <xsd:element name="literalValue" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="LayoutSectionStyle">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="TwoColumnsTopToBottom"/>
    <xsd:enumeration value="TwoColumnsLeftToRight"/>
    <xsd:enumeration value="OneColumn"/>
    <xsd:enumeration value="CustomLinks"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="QuickAction">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="actionSubtype" minOccurs="0" type="tns:ActionSubtype"/>
        <xsd:element name="canvas" minOccurs="0" type="xsd:string"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="fieldOverrides" minOccurs="0" maxOccurs="unbounded" type="tns:FieldOverride"/>
        <xsd:element name="flowDefinition" minOccurs="0" type="xsd:string"/>
        <xsd:element name="height" minOccurs="0" type="xsd:int"/>
        <xsd:element name="icon" minOccurs="0" type="xsd:string"/>
        <xsd:element name="isProtected" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="label" minOccurs="0" type="xsd:string"/>
        <xsd:element name="lightningComponent" minOccurs="0" type="xsd:string"/>
        <xsd:element name="lightningWebComponent" minOccurs="0" type="xsd:string"/>
        <xsd:element name="optionsCreateFeedItem" type="xsd:boolean"/>
        <xsd:element name="page" minOccurs="0" type="xsd:string"/>
        <xsd:element name="quickActionLayout" minOccurs="0" type="tns:QuickActionLayout"/>
        <xsd:element name="quickActionSendEmailOptions" minOccurs="0" type="tns:QuickActionSendEmailOptions"/>
        <xsd:element name="standardLabel" minOccurs="0" type="tns:QuickActionLabel"/>
        <xsd:element name="successMessage" minOccurs="0" type="xsd:string"/>
        <xsd:element name="targetObject" minOccurs="0" type="xsd:string"/>
        <xsd:element name="targetParentField" minOccurs="0" type="xsd:string"/>
        <xsd:element name="targetRecordType" minOccurs="0" type="xsd:string"/>
        <xsd:element name="type" type="tns:QuickActionType"/>
        <xsd:element name="width" minOccurs="0" type="xsd:int"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:simpleType name="QuickActionLabel">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="LogACall"/>
    <xsd:enumeration value="LogANote"/>
    <xsd:enumeration value="New"/>
    <xsd:enumeration value="NewRecordType"/>
    <xsd:enumeration value="Update"/>
    <xsd:enumeration value="NewChild"/>
    <xsd:enumeration value="NewChildRecordType"/>
    <xsd:enumeration value="CreateNew"/>
    <xsd:enumeration value="CreateNewRecordType"/>
    <xsd:enumeration value="SendEmail"/>
    <xsd:enumeration value="QuickRecordType"/>
    <xsd:enumeration value="Quick"/>
    <xsd:enumeration value="EditDescription"/>
    <xsd:enumeration value="Defer"/>
    <xsd:enumeration value="ChangeDueDate"/>
    <xsd:enumeration value="ChangePriority"/>
    <xsd:enumeration value="ChangeStatus"/>
    <xsd:enumeration value="SocialPost"/>
    <xsd:enumeration value="Escalate"/>
    <xsd:enumeration value="EscalateToRecord"/>
    <xsd:enumeration value="OfferFeedback"/>
    <xsd:enumeration value="RequestFeedback"/>
    <xsd:enumeration value="AddRecord"/>
    <xsd:enumeration value="AddMember"/>
    <xsd:enumeration value="Reply"/>
    <xsd:enumeration value="ReplyAll"/>
    <xsd:enumeration value="Forward"/>
    <xsd:enumeration value="ScheduleAppointment"/>
    <xsd:enumeration value="EnrollInProgram"/>
    <xsd:enumeration value="ModifyAppointment"/>
    <xsd:enumeration value="PatientDetails"/>
    <xsd:enumeration value="AcceptBroadcast"/>
    <xsd:enumeration value="SelectCoverage"/>
    <xsd:enumeration value="SummarizeCase"/>
    <xsd:enumeration value="AssetHierarchy"/>
    <xsd:enumeration value="PartReturnRequest"/>
    <xsd:enumeration value="PerformCount"/>
    <xsd:enumeration value="ViewCoverage"/>
    <xsd:enumeration value="Quip"/>
    <xsd:enumeration value="SendConversationMessage"/>
    <xsd:enumeration value="NewQuote"/>
    <xsd:enumeration value="LaunchDataCapture"/>
    <xsd:enumeration value="RelocateAsset"/>
    <xsd:enumeration value="ReplaceAsset"/>
    <xsd:enumeration value="CloseCase"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="QuickActionLayout">
  <xsd:sequence>
    <xsd:element name="layoutSectionStyle" type="tns:LayoutSectionStyle"/>
    <xsd:element name="quickActionLayoutColumns" minOccurs="0" maxOccurs="unbounded" type="tns:QuickActionLayoutColumn"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="QuickActionLayoutColumn">
  <xsd:sequence>
    <xsd:element name="quickActionLayoutItems" minOccurs="0" maxOccurs="unbounded" type="tns:QuickActionLayoutItem"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="QuickActionLayoutItem">
  <xsd:sequence>
    <xsd:element name="emptySpace" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="field" minOccurs="0" type="xsd:string"/>
    <xsd:element name="uiBehavior" minOccurs="0" type="tns:UiBehavior"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="QuickActionSendEmailOptions">
  <xsd:sequence>
    <xsd:element name="defaultEmailTemplateName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="ignoreDefaultEmailTemplateSubject" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="QuickActionType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Create"/>
    <xsd:enumeration value="VisualforcePage"/>
    <xsd:enumeration value="Post"/>
    <xsd:enumeration value="SendEmail"/>
    <xsd:enumeration value="LogACall"/>
    <xsd:enumeration value="SocialPost"/>
    <xsd:enumeration value="Canvas"/>
    <xsd:enumeration value="Update"/>
    <xsd:enumeration value="LightningComponent"/>
    <xsd:enumeration value="LightningWebComponent"/>
    <xsd:enumeration value="Flow"/>
    <xsd:enumeration value="MobileExtension"/>
    <xsd:enumeration value="Quip"/>
    <xsd:enumeration value="SendConversationMessage"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="UiBehavior">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Edit"/>
    <xsd:enumeration value="Required"/>
    <xsd:enumeration value="Readonly"/>
  </xsd:restriction>
</xsd:simpleType>
```
