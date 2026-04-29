# FlexiPage — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="ComponentInstance">
  <xsd:sequence>
    <xsd:element name="componentInstanceProperties" minOccurs="0" maxOccurs="unbounded" type="tns:ComponentInstanceProperty"/>
    <xsd:element name="componentName" type="xsd:string"/>
    <xsd:element name="identifier" minOccurs="0" type="xsd:string"/>
    <xsd:element name="visibilityRule" minOccurs="0" type="tns:UiFormulaRule"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ComponentInstanceProperty">
  <xsd:sequence>
    <xsd:element name="name" minOccurs="0" type="xsd:string"/>
    <xsd:element name="type" minOccurs="0" type="tns:ComponentInstancePropertyTypeEnum"/>
    <xsd:element name="value" minOccurs="0" type="xsd:string"/>
    <xsd:element name="valueList" minOccurs="0" type="tns:ComponentInstancePropertyList"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ComponentInstancePropertyList">
  <xsd:sequence>
    <xsd:element name="valueListItems" minOccurs="0" maxOccurs="unbounded" type="tns:ComponentInstancePropertyListItem"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ComponentInstancePropertyListItem">
  <xsd:sequence>
    <xsd:element name="value" minOccurs="0" type="xsd:string"/>
    <xsd:element name="visibilityRule" minOccurs="0" type="tns:UiFormulaRule"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ComponentInstancePropertyTypeEnum">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="decorator"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="FieldInstance">
  <xsd:sequence>
    <xsd:element name="fieldInstanceProperties" minOccurs="0" maxOccurs="unbounded" type="tns:FieldInstanceProperty"/>
    <xsd:element name="fieldItem" type="xsd:string"/>
    <xsd:element name="identifier" minOccurs="0" type="xsd:string"/>
    <xsd:element name="visibilityRule" minOccurs="0" type="tns:UiFormulaRule"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="FieldInstanceProperty">
  <xsd:sequence>
    <xsd:element name="name" minOccurs="0" type="xsd:string"/>
    <xsd:element name="value" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="FlexiPage">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="events" minOccurs="0" maxOccurs="unbounded" type="tns:FlexiPageEvent"/>
        <xsd:element name="flexiPageRegions" minOccurs="0" maxOccurs="unbounded" type="tns:FlexiPageRegion"/>
        <xsd:element name="masterLabel" type="xsd:string"/>
        <xsd:element name="parentFlexiPage" minOccurs="0" type="xsd:string"/>
        <xsd:element name="platformActionlist" minOccurs="0" type="tns:PlatformActionList"/>
        <xsd:element name="quickActionList" minOccurs="0" type="tns:QuickActionList"/>
        <xsd:element name="sobjectType" minOccurs="0" type="xsd:string"/>
        <xsd:element name="template" type="tns:FlexiPageTemplateInstance"/>
        <xsd:element name="type" type="tns:FlexiPageType"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="FlexiPageEvent">
  <xsd:sequence>
    <xsd:element name="sourceName" type="xsd:string"/>
    <xsd:element name="sourceProperties" minOccurs="0" maxOccurs="unbounded" type="tns:FlexiPageEventSourceProperty"/>
    <xsd:element name="sourceType" type="tns:FlexipageEventSourceTypeEnum"/>
    <xsd:element name="targets" minOccurs="0" maxOccurs="unbounded" type="tns:FlexiPageEventTarget"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="FlexiPageEventPropertyMapping">
  <xsd:sequence>
    <xsd:element name="name" type="xsd:string"/>
    <xsd:element name="value" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="FlexiPageEventSourceProperty">
  <xsd:sequence>
    <xsd:element name="name" type="xsd:string"/>
    <xsd:element name="value" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="FlexiPageEventTarget">
  <xsd:sequence>
    <xsd:element name="mappings" minOccurs="0" maxOccurs="unbounded" type="tns:FlexiPageEventPropertyMapping"/>
    <xsd:element name="method" type="xsd:string"/>
    <xsd:element name="name" type="xsd:string"/>
    <xsd:element name="properties" minOccurs="0" maxOccurs="unbounded" type="tns:FlexiPageEventTargetProperty"/>
    <xsd:element name="type" type="tns:FlexipageEventTargetTypeEnum"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="FlexiPageEventTargetProperty">
  <xsd:sequence>
    <xsd:element name="name" type="xsd:string"/>
    <xsd:element name="value" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="FlexiPageRegion">
  <xsd:sequence>
    <xsd:element name="appendable" minOccurs="0" type="tns:RegionFlagStatus"/>
    <xsd:element name="itemInstances" minOccurs="0" maxOccurs="unbounded" type="tns:ItemInstance"/>
    <xsd:element name="mode" minOccurs="0" type="tns:FlexiPageRegionMode"/>
    <xsd:element name="name" type="xsd:string"/>
    <xsd:element name="prependable" minOccurs="0" type="tns:RegionFlagStatus"/>
    <xsd:element name="replaceable" minOccurs="0" type="tns:RegionFlagStatus"/>
    <xsd:element name="type" type="tns:FlexiPageRegionType"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="FlexiPageRegionMode">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Append"/>
    <xsd:enumeration value="Prepend"/>
    <xsd:enumeration value="Replace"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="FlexiPageRegionType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Region"/>
    <xsd:enumeration value="Facet"/>
    <xsd:enumeration value="Background"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="FlexiPageTemplateInstance">
  <xsd:sequence>
    <xsd:element name="name" type="xsd:string"/>
    <xsd:element name="properties" minOccurs="0" maxOccurs="unbounded" type="tns:ComponentInstanceProperty"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="FlexiPageType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="AppPage"/>
    <xsd:enumeration value="ObjectPage"/>
    <xsd:enumeration value="RecordPage"/>
    <xsd:enumeration value="HomePage"/>
    <xsd:enumeration value="ForecastingPage"/>
    <xsd:enumeration value="MailAppAppPage"/>
    <xsd:enumeration value="CommAppPage"/>
    <xsd:enumeration value="CommForgotPasswordPage"/>
    <xsd:enumeration value="CommLoginPage"/>
    <xsd:enumeration value="CommObjectPage"/>
    <xsd:enumeration value="CommQuickActionCreatePage"/>
    <xsd:enumeration value="CommRecordPage"/>
    <xsd:enumeration value="CommRelatedListPage"/>
    <xsd:enumeration value="CommSearchResultPage"/>
    <xsd:enumeration value="CommGlobalSearchResultPage"/>
    <xsd:enumeration value="CommSelfRegisterPage"/>
    <xsd:enumeration value="CommThemeLayoutPage"/>
    <xsd:enumeration value="UtilityBar"/>
    <xsd:enumeration value="RecordPreview"/>
    <xsd:enumeration value="EmbeddedServicePage"/>
    <xsd:enumeration value="CommCheckoutPage"/>
    <xsd:enumeration value="CommOrderConfirmationPage"/>
    <xsd:enumeration value="CommFlowPage"/>
    <xsd:enumeration value="EmailTemplatePage"/>
    <xsd:enumeration value="ApplicationLayout"/>
    <xsd:enumeration value="CommNoSearchResultsPage"/>
    <xsd:enumeration value="CommElectronicSignaturePage"/>
    <xsd:enumeration value="CommContractDocumentsPage"/>
    <xsd:enumeration value="CommContractDetailViewPage"/>
    <xsd:enumeration value="EmailContentPage"/>
    <xsd:enumeration value="ServiceDocument"/>
    <xsd:enumeration value="LandingPage"/>
    <xsd:enumeration value="CdpRecordPage"/>
    <xsd:enumeration value="SlackAppHome"/>
    <xsd:enumeration value="SlackMessage"/>
    <xsd:enumeration value="SlackModal"/>
    <xsd:enumeration value="SlackNotification"/>
    <xsd:enumeration value="EasyHomePage"/>
    <xsd:enumeration value="CardPage"/>
    <xsd:enumeration value="VoiceExtension"/>
    <xsd:enumeration value="ConfiguratorAppPage"/>
    <xsd:enumeration value="OmniSupervisorPage"/>
    <xsd:enumeration value="MobileAppPage"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="FlexipageEventSourceTypeEnum">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Component"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="FlexipageEventTargetTypeEnum">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="FlexipageServices"/>
    <xsd:enumeration value="LwcServices"/>
    <xsd:enumeration value="InvocableApexServices"/>
    <xsd:enumeration value="InvocableExternalServices"/>
    <xsd:enumeration value="ActionServices"/>
    <xsd:enumeration value="ViewServices"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ItemInstance">
  <xsd:sequence>
    <xsd:element name="componentInstance" minOccurs="0" type="tns:ComponentInstance"/>
    <xsd:element name="fieldInstance" minOccurs="0" type="tns:FieldInstance"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="PlatformActionList">
  <xsd:sequence>
    <xsd:element name="actionListContext" type="tns:PlatformActionListContext"/>
    <xsd:element name="platformActionListItems" minOccurs="0" maxOccurs="unbounded" type="tns:PlatformActionListItem"/>
    <xsd:element name="relatedSourceEntity" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="PlatformActionListContext">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="ListView"/>
    <xsd:enumeration value="RelatedList"/>
    <xsd:enumeration value="ListViewRecord"/>
    <xsd:enumeration value="RelatedListRecord"/>
    <xsd:enumeration value="Record"/>
    <xsd:enumeration value="FeedElement"/>
    <xsd:enumeration value="Chatter"/>
    <xsd:enumeration value="Global"/>
    <xsd:enumeration value="Flexipage"/>
    <xsd:enumeration value="MruList"/>
    <xsd:enumeration value="MruRow"/>
    <xsd:enumeration value="RecordEdit"/>
    <xsd:enumeration value="Photo"/>
    <xsd:enumeration value="BannerPhoto"/>
    <xsd:enumeration value="ObjectHomeChart"/>
    <xsd:enumeration value="ListViewDefinition"/>
    <xsd:enumeration value="Dockable"/>
    <xsd:enumeration value="Lookup"/>
    <xsd:enumeration value="Assistant"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="PlatformActionListItem">
  <xsd:sequence>
    <xsd:element name="actionName" type="xsd:string"/>
    <xsd:element name="actionType" type="tns:PlatformActionType"/>
    <xsd:element name="sortOrder" type="xsd:int"/>
    <xsd:element name="subtype" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="PlatformActionType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="QuickAction"/>
    <xsd:enumeration value="StandardButton"/>
    <xsd:enumeration value="CustomButton"/>
    <xsd:enumeration value="ProductivityAction"/>
    <xsd:enumeration value="ActionLink"/>
    <xsd:enumeration value="InvocableAction"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="QuickActionList">
  <xsd:sequence>
    <xsd:element name="quickActionListItems" minOccurs="0" maxOccurs="unbounded" type="tns:QuickActionListItem"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="QuickActionListItem">
  <xsd:sequence>
    <xsd:element name="quickActionName" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="RegionFlagStatus">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="disabled"/>
    <xsd:enumeration value="enabled"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="UiFormulaCriterion">
  <xsd:sequence>
    <xsd:element name="leftValue" type="xsd:string"/>
    <xsd:element name="operator" type="xsd:string"/>
    <xsd:element name="rightValue" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="UiFormulaRule">
  <xsd:sequence>
    <xsd:element name="booleanFilter" minOccurs="0" type="xsd:string"/>
    <xsd:element name="criteria" minOccurs="0" maxOccurs="unbounded" type="tns:UiFormulaCriterion"/>
  </xsd:sequence>
</xsd:complexType>
```
