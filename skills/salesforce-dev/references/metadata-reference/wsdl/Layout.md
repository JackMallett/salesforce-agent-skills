# Layout — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="AnalyticsCloudComponentLayoutItem">
  <xsd:sequence>
    <xsd:element name="assetType" type="xsd:string"/>
    <xsd:element name="devName" type="xsd:string"/>
    <xsd:element name="error" minOccurs="0" type="xsd:string"/>
    <xsd:element name="filter" minOccurs="0" type="xsd:string"/>
    <xsd:element name="height" minOccurs="0" type="xsd:int"/>
    <xsd:element name="hideOnError" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showHeader" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showSharing" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showTitle" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="width" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="Container">
  <xsd:sequence>
    <xsd:element name="height" minOccurs="0" type="xsd:int"/>
    <xsd:element name="isContainerAutoSizeEnabled" type="xsd:boolean"/>
    <xsd:element name="region" type="xsd:string"/>
    <xsd:element name="sidebarComponents" minOccurs="0" maxOccurs="unbounded" type="tns:SidebarComponent"/>
    <xsd:element name="style" type="xsd:string"/>
    <xsd:element name="unit" type="xsd:string"/>
    <xsd:element name="width" minOccurs="0" type="xsd:int"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="CustomConsoleComponents">
  <xsd:sequence>
    <xsd:element name="primaryTabComponents" minOccurs="0" type="tns:PrimaryTabComponents"/>
    <xsd:element name="subtabComponents" minOccurs="0" type="tns:SubtabComponents"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="FeedItemType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="TrackedChange"/>
    <xsd:enumeration value="UserStatus"/>
    <xsd:enumeration value="TextPost"/>
    <xsd:enumeration value="AdvancedTextPost"/>
    <xsd:enumeration value="LinkPost"/>
    <xsd:enumeration value="ContentPost"/>
    <xsd:enumeration value="PollPost"/>
    <xsd:enumeration value="RypplePost"/>
    <xsd:enumeration value="ProfileSkillPost"/>
    <xsd:enumeration value="DashboardComponentSnapshot"/>
    <xsd:enumeration value="ApprovalPost"/>
    <xsd:enumeration value="CaseCommentPost"/>
    <xsd:enumeration value="ReplyPost"/>
    <xsd:enumeration value="EmailMessageEvent"/>
    <xsd:enumeration value="CallLogPost"/>
    <xsd:enumeration value="ChangeStatusPost"/>
    <xsd:enumeration value="AttachArticleEvent"/>
    <xsd:enumeration value="MilestoneEvent"/>
    <xsd:enumeration value="ActivityEvent"/>
    <xsd:enumeration value="ChatTranscriptPost"/>
    <xsd:enumeration value="CollaborationGroupCreated"/>
    <xsd:enumeration value="CollaborationGroupUnarchived"/>
    <xsd:enumeration value="SocialPost"/>
    <xsd:enumeration value="QuestionPost"/>
    <xsd:enumeration value="FacebookPost"/>
    <xsd:enumeration value="BasicTemplateFeedItem"/>
    <xsd:enumeration value="CreateRecordEvent"/>
    <xsd:enumeration value="CanvasPost"/>
    <xsd:enumeration value="AnnouncementPost"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="FeedLayout">
  <xsd:sequence>
    <xsd:element name="autocollapsePublisher" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="compactFeed" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="feedFilterPosition" minOccurs="0" type="tns:FeedLayoutFilterPosition"/>
    <xsd:element name="feedFilters" minOccurs="0" maxOccurs="unbounded" type="tns:FeedLayoutFilter"/>
    <xsd:element name="fullWidthFeed" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="hideSidebar" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="highlightExternalFeedItems" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="leftComponents" minOccurs="0" maxOccurs="unbounded" type="tns:FeedLayoutComponent"/>
    <xsd:element name="rightComponents" minOccurs="0" maxOccurs="unbounded" type="tns:FeedLayoutComponent"/>
    <xsd:element name="useInlineFiltersInConsole" minOccurs="0" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="FeedLayoutComponent">
  <xsd:sequence>
    <xsd:element name="componentType" type="tns:FeedLayoutComponentType"/>
    <xsd:element name="height" minOccurs="0" type="xsd:int"/>
    <xsd:element name="page" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="FeedLayoutComponentType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="HelpAndToolLinks"/>
    <xsd:enumeration value="CustomButtons"/>
    <xsd:enumeration value="Following"/>
    <xsd:enumeration value="Followers"/>
    <xsd:enumeration value="CustomLinks"/>
    <xsd:enumeration value="Milestones"/>
    <xsd:enumeration value="Topics"/>
    <xsd:enumeration value="CaseUnifiedFiles"/>
    <xsd:enumeration value="Visualforce"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="FeedLayoutFilter">
  <xsd:sequence>
    <xsd:element name="feedFilterName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="feedFilterType" type="tns:FeedLayoutFilterType"/>
    <xsd:element name="feedItemType" minOccurs="0" type="tns:FeedItemType"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="FeedLayoutFilterPosition">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="CenterDropDown"/>
    <xsd:enumeration value="LeftFixed"/>
    <xsd:enumeration value="LeftFloat"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="FeedLayoutFilterType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="AllUpdates"/>
    <xsd:enumeration value="FeedItemType"/>
    <xsd:enumeration value="Custom"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="Layout">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="customButtons" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
        <xsd:element name="customConsoleComponents" minOccurs="0" type="tns:CustomConsoleComponents"/>
        <xsd:element name="emailDefault" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="excludeButtons" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
        <xsd:element name="feedLayout" minOccurs="0" type="tns:FeedLayout"/>
        <xsd:element name="headers" minOccurs="0" maxOccurs="unbounded" type="tns:LayoutHeader"/>
        <xsd:element name="layoutSections" minOccurs="0" maxOccurs="unbounded" type="tns:LayoutSection"/>
        <xsd:element name="miniLayout" minOccurs="0" type="tns:MiniLayout"/>
        <xsd:element name="multilineLayoutFields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
        <xsd:element name="platformActionList" minOccurs="0" type="tns:PlatformActionList"/>
        <xsd:element name="quickActionList" minOccurs="0" type="tns:QuickActionList"/>
        <xsd:element name="relatedContent" minOccurs="0" type="tns:RelatedContent"/>
        <xsd:element name="relatedLists" minOccurs="0" maxOccurs="unbounded" type="tns:RelatedListItem"/>
        <xsd:element name="relatedObjects" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
        <xsd:element name="runAssignmentRulesDefault" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showEmailCheckbox" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showHighlightsPanel" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showInteractionLogPanel" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showKnowledgeComponent" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showRunAssignmentRulesCheckbox" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showSolutionSection" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showSubmitAndAttachButton" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="summaryLayout" minOccurs="0" type="tns:SummaryLayout"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="LayoutColumn">
  <xsd:sequence>
    <xsd:element name="layoutItems" minOccurs="0" maxOccurs="unbounded" type="tns:LayoutItem"/>
    <xsd:element name="reserved" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="LayoutHeader">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="PersonalTagging"/>
    <xsd:enumeration value="PublicTagging"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="LayoutItem">
  <xsd:sequence>
    <xsd:element name="analyticsCloudComponent" minOccurs="0" type="tns:AnalyticsCloudComponentLayoutItem"/>
    <xsd:element name="behavior" minOccurs="0" type="tns:UiBehavior"/>
    <xsd:element name="canvas" minOccurs="0" type="xsd:string"/>
    <xsd:element name="component" minOccurs="0" type="xsd:string"/>
    <xsd:element name="customLink" minOccurs="0" type="xsd:string"/>
    <xsd:element name="emptySpace" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="field" minOccurs="0" type="xsd:string"/>
    <xsd:element name="height" minOccurs="0" type="xsd:int"/>
    <xsd:element name="page" minOccurs="0" type="xsd:string"/>
    <xsd:element name="reportChartComponent" minOccurs="0" type="tns:ReportChartComponentLayoutItem"/>
    <xsd:element name="scontrol" minOccurs="0" type="xsd:string"/>
    <xsd:element name="showLabel" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showScrollbars" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="width" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="LayoutSection">
  <xsd:sequence>
    <xsd:element name="customLabel" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="detailHeading" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="editHeading" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="label" minOccurs="0" type="xsd:string"/>
    <xsd:element name="layoutColumns" minOccurs="0" maxOccurs="unbounded" type="tns:LayoutColumn"/>
    <xsd:element name="style" type="tns:LayoutSectionStyle"/>
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
<xsd:complexType name="MiniLayout">
  <xsd:sequence>
    <xsd:element name="fields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="relatedLists" minOccurs="0" maxOccurs="unbounded" type="tns:RelatedListItem"/>
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
<xsd:complexType name="PrimaryTabComponents">
  <xsd:sequence>
    <xsd:element name="containers" minOccurs="0" maxOccurs="unbounded" type="tns:Container"/>
  </xsd:sequence>
</xsd:complexType>
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
<xsd:complexType name="RelatedContent">
  <xsd:sequence>
    <xsd:element name="relatedContentItems" minOccurs="0" maxOccurs="unbounded" type="tns:RelatedContentItem"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="RelatedContentItem">
  <xsd:sequence>
    <xsd:element name="layoutItem" type="tns:LayoutItem"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="RelatedList">
  <xsd:sequence>
    <xsd:element name="hideOnDetail" type="xsd:boolean"/>
    <xsd:element name="name" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="RelatedListItem">
  <xsd:sequence>
    <xsd:element name="customButtons" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="excludeButtons" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="fields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="quickActions" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="relatedList" type="xsd:string"/>
    <xsd:element name="sortField" minOccurs="0" type="xsd:string"/>
    <xsd:element name="sortOrder" minOccurs="0" type="tns:SortOrder"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportChartComponentLayoutItem">
  <xsd:sequence>
    <xsd:element name="cacheData" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="contextFilterableField" minOccurs="0" type="xsd:string"/>
    <xsd:element name="error" minOccurs="0" type="xsd:string"/>
    <xsd:element name="hideOnError" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="includeContext" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="reportName" type="xsd:string"/>
    <xsd:element name="showTitle" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="size" minOccurs="0" type="tns:ReportChartComponentSize"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ReportChartComponentSize">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="SMALL"/>
    <xsd:enumeration value="MEDIUM"/>
    <xsd:enumeration value="LARGE"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="SidebarComponent">
  <xsd:sequence>
    <xsd:element name="componentType" type="xsd:string"/>
    <xsd:element name="createAction" minOccurs="0" type="xsd:string"/>
    <xsd:element name="enableLinking" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="height" minOccurs="0" type="xsd:int"/>
    <xsd:element name="label" minOccurs="0" type="xsd:string"/>
    <xsd:element name="lookup" minOccurs="0" type="xsd:string"/>
    <xsd:element name="page" minOccurs="0" type="xsd:string"/>
    <xsd:element name="relatedLists" minOccurs="0" maxOccurs="unbounded" type="tns:RelatedList"/>
    <xsd:element name="unit" minOccurs="0" type="xsd:string"/>
    <xsd:element name="updateAction" minOccurs="0" type="xsd:string"/>
    <xsd:element name="width" minOccurs="0" type="xsd:int"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="SortOrder">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Asc"/>
    <xsd:enumeration value="Desc"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="SubtabComponents">
  <xsd:sequence>
    <xsd:element name="containers" minOccurs="0" maxOccurs="unbounded" type="tns:Container"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="SummaryLayout">
  <xsd:sequence>
    <xsd:element name="masterLabel" type="xsd:string"/>
    <xsd:element name="sizeX" type="xsd:int"/>
    <xsd:element name="sizeY" minOccurs="0" type="xsd:int"/>
    <xsd:element name="sizeZ" minOccurs="0" type="xsd:int"/>
    <xsd:element name="summaryLayoutItems" minOccurs="0" maxOccurs="unbounded" type="tns:SummaryLayoutItem"/>
    <xsd:element name="summaryLayoutStyle" type="tns:SummaryLayoutStyle"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="SummaryLayoutItem">
  <xsd:sequence>
    <xsd:element name="customLink" minOccurs="0" type="xsd:string"/>
    <xsd:element name="field" minOccurs="0" type="xsd:string"/>
    <xsd:element name="posX" type="xsd:int"/>
    <xsd:element name="posY" minOccurs="0" type="xsd:int"/>
    <xsd:element name="posZ" minOccurs="0" type="xsd:int"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="SummaryLayoutStyle">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Default"/>
    <xsd:enumeration value="QuoteTemplate"/>
    <xsd:enumeration value="DefaultQuoteTemplate"/>
    <xsd:enumeration value="ServiceReportTemplate"/>
    <xsd:enumeration value="ChildServiceReportTemplateStyle"/>
    <xsd:enumeration value="DefaultServiceReportTemplate"/>
    <xsd:enumeration value="CaseInteraction"/>
    <xsd:enumeration value="QuickActionLayoutLeftRight"/>
    <xsd:enumeration value="QuickActionLayoutTopDown"/>
    <xsd:enumeration value="PathAssistant"/>
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
