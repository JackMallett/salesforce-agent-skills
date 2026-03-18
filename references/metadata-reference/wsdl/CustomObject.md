# CustomObject — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:complexType name="ActionOverride">
  <xsd:sequence>
    <xsd:element name="actionName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="comment" minOccurs="0" type="xsd:string"/>
    <xsd:element name="content" minOccurs="0" type="xsd:string"/>
    <xsd:element name="formFactor" minOccurs="0" type="tns:FormFactor"/>
    <xsd:element name="skipRecordTypeSelect" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="type" minOccurs="0" type="tns:ActionOverrideType"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ActionOverrideType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Default"/>
    <xsd:enumeration value="Standard"/>
    <xsd:enumeration value="Scontrol"/>
    <xsd:enumeration value="Visualforce"/>
    <xsd:enumeration value="Flexipage"/>
    <xsd:enumeration value="LightningComponent"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ArticleTypeChannelDisplay">
  <xsd:sequence>
    <xsd:element name="articleTypeTemplates" minOccurs="0" maxOccurs="unbounded" type="tns:ArticleTypeTemplate"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ArticleTypeTemplate">
  <xsd:sequence>
    <xsd:element name="channel" type="tns:Channel"/>
    <xsd:element name="page" minOccurs="0" type="xsd:string"/>
    <xsd:element name="template" type="tns:Template"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="BusinessProcess">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="isActive" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="values" minOccurs="0" maxOccurs="unbounded" type="tns:PicklistValue"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:simpleType name="Channel">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="AllChannels"/>
    <xsd:enumeration value="App"/>
    <xsd:enumeration value="Pkb"/>
    <xsd:enumeration value="Csp"/>
    <xsd:enumeration value="Prm"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="CompactLayout">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="fields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
        <xsd:element name="label" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="CustomField">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="businessOwnerGroup" minOccurs="0" type="xsd:string"/>
        <xsd:element name="businessOwnerUser" minOccurs="0" type="xsd:string"/>
        <xsd:element name="businessStatus" minOccurs="0" type="xsd:string"/>
        <xsd:element name="caseSensitive" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="complianceGroup" minOccurs="0" type="xsd:string"/>
        <xsd:element name="customDataType" minOccurs="0" type="xsd:string"/>
        <xsd:element name="defaultValue" minOccurs="0" type="xsd:string"/>
        <xsd:element name="deleteConstraint" minOccurs="0" type="tns:DeleteConstraint"/>
        <xsd:element name="deprecated" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="displayFormat" minOccurs="0" type="xsd:string"/>
        <xsd:element name="elementType" minOccurs="0" type="tns:ElementType"/>
        <xsd:element name="encryptionScheme" minOccurs="0" type="tns:EncryptionScheme"/>
        <xsd:element name="escapeMarkup" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="externalDeveloperName" minOccurs="0" type="xsd:string"/>
        <xsd:element name="externalId" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="fieldManageability" minOccurs="0" type="tns:FieldManageability"/>
        <xsd:element name="formula" minOccurs="0" type="xsd:string"/>
        <xsd:element name="formulaTreatBlanksAs" minOccurs="0" type="tns:TreatBlanksAs"/>
        <xsd:element name="inlineHelpText" minOccurs="0" type="xsd:string"/>
        <xsd:element name="isAIPredictionField" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="isConvertLeadDisabled" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="isFilteringDisabled" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="isNameField" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="isSortingDisabled" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="label" minOccurs="0" type="xsd:string"/>
        <xsd:element name="length" minOccurs="0" type="xsd:int"/>
        <xsd:element name="lookupFilter" minOccurs="0" type="tns:LookupFilter"/>
        <xsd:element name="maskChar" minOccurs="0" type="tns:EncryptedFieldMaskChar"/>
        <xsd:element name="maskType" minOccurs="0" type="tns:EncryptedFieldMaskType"/>
        <xsd:element name="metadataRelationshipControllingField" minOccurs="0" type="xsd:string"/>
        <xsd:element name="mktDataLakeFieldAttributes" minOccurs="0" type="tns:MktDataLakeFieldAttributes"/>
        <xsd:element name="mktDataModelFieldAttributes" minOccurs="0" type="tns:MktDataModelFieldAttributes"/>
        <xsd:element name="populateExistingRows" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="precision" minOccurs="0" type="xsd:int"/>
        <xsd:element name="referenceTargetField" minOccurs="0" type="xsd:string"/>
        <xsd:element name="referenceTo" minOccurs="0" type="xsd:string"/>
        <xsd:element name="relationshipLabel" minOccurs="0" type="xsd:string"/>
        <xsd:element name="relationshipName" minOccurs="0" type="xsd:string"/>
        <xsd:element name="relationshipOrder" minOccurs="0" type="xsd:int"/>
        <xsd:element name="reparentableMasterDetail" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="required" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="restrictedAdminField" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="scale" minOccurs="0" type="xsd:int"/>
        <xsd:element name="securityClassification" minOccurs="0" type="xsd:string"/>
        <xsd:element name="startingNumber" minOccurs="0" type="xsd:int"/>
        <xsd:element name="stripMarkup" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="summarizedField" minOccurs="0" type="xsd:string"/>
        <xsd:element name="summaryFilterItems" minOccurs="0" maxOccurs="unbounded" type="tns:FilterItem"/>
        <xsd:element name="summaryForeignKey" minOccurs="0" type="xsd:string"/>
        <xsd:element name="summaryOperation" minOccurs="0" type="tns:SummaryOperations"/>
        <xsd:element name="trackFeedHistory" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="trackHistory" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="trackTrending" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="translateData" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="type" minOccurs="0" type="tns:FieldType"/>
        <xsd:element name="unique" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="valueSet" minOccurs="0" type="tns:ValueSet"/>
        <xsd:element name="visibleLines" minOccurs="0" type="xsd:int"/>
        <xsd:element name="writeRequiresMasterRead" minOccurs="0" type="xsd:boolean"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="CustomObject">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="actionOverrides" minOccurs="0" maxOccurs="unbounded" type="tns:ActionOverride"/>
        <xsd:element name="allowInChatterGroups" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="articleTypeChannelDisplay" minOccurs="0" type="tns:ArticleTypeChannelDisplay"/>
        <xsd:element name="businessProcesses" minOccurs="0" maxOccurs="unbounded" type="tns:BusinessProcess"/>
        <xsd:element name="compactLayoutAssignment" minOccurs="0" type="xsd:string"/>
        <xsd:element name="compactLayouts" minOccurs="0" maxOccurs="unbounded" type="tns:CompactLayout"/>
        <xsd:element name="customHelp" minOccurs="0" type="xsd:string"/>
        <xsd:element name="customHelpPage" minOccurs="0" type="xsd:string"/>
        <xsd:element name="customSettingsType" minOccurs="0" type="tns:CustomSettingsType"/>
        <xsd:element name="deploymentStatus" minOccurs="0" type="tns:DeploymentStatus"/>
        <xsd:element name="deprecated" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="enableActivities" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableBulkApi" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableDataTranslation" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableDivisions" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableEnhancedLookup" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableFeeds" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableHistory" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableLicensing" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enablePublishStatusTracking" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableReports" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableSearch" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableSharing" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="enableStreamingApi" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="eventType" minOccurs="0" type="tns:PlatformEventType"/>
        <xsd:element name="externalDataSource" minOccurs="0" type="xsd:string"/>
        <xsd:element name="externalName" minOccurs="0" type="xsd:string"/>
        <xsd:element name="externalRepository" minOccurs="0" type="xsd:string"/>
        <xsd:element name="externalSharingModel" minOccurs="0" type="tns:SharingModel"/>
        <xsd:element name="fieldSets" minOccurs="0" maxOccurs="unbounded" type="tns:FieldSet"/>
        <xsd:element name="fields" minOccurs="0" maxOccurs="unbounded" type="tns:CustomField"/>
        <xsd:element name="gender" minOccurs="0" type="tns:Gender"/>
        <xsd:element name="historyRetentionPolicy" minOccurs="0" type="tns:HistoryRetentionPolicy"/>
        <xsd:element name="household" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="indexes" minOccurs="0" maxOccurs="unbounded" type="tns:Index"/>
        <xsd:element name="label" minOccurs="0" type="xsd:string"/>
        <xsd:element name="listViews" minOccurs="0" maxOccurs="unbounded" type="tns:ListView"/>
        <xsd:element name="mktDataLakeAttributes" minOccurs="0" type="tns:MktDataLakeAttributes"/>
        <xsd:element name="mktDataModelAttributes" minOccurs="0" type="tns:MktDataModelAttributes"/>
        <xsd:element name="nameField" minOccurs="0" type="tns:CustomField"/>
        <xsd:element name="pluralLabel" minOccurs="0" type="xsd:string"/>
        <xsd:element name="profileSearchLayouts" minOccurs="0" maxOccurs="unbounded" type="tns:ProfileSearchLayouts"/>
        <xsd:element name="publishBehavior" minOccurs="0" type="tns:PlatformEventPublishBehavior"/>
        <xsd:element name="recordTypeTrackFeedHistory" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="recordTypeTrackHistory" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="recordTypes" minOccurs="0" maxOccurs="unbounded" type="tns:RecordType"/>
        <xsd:element name="searchLayouts" minOccurs="0" type="tns:SearchLayouts"/>
        <xsd:element name="sharingModel" minOccurs="0" type="tns:SharingModel"/>
        <xsd:element name="sharingReasons" minOccurs="0" maxOccurs="unbounded" type="tns:SharingReason"/>
        <xsd:element name="sharingRecalculations" minOccurs="0" maxOccurs="unbounded" type="tns:SharingRecalculation"/>
        <xsd:element name="startsWith" minOccurs="0" type="tns:StartsWith"/>
        <xsd:element name="validationRules" minOccurs="0" maxOccurs="unbounded" type="tns:ValidationRule"/>
        <xsd:element name="visibility" minOccurs="0" type="tns:SetupObjectVisibility"/>
        <xsd:element name="webLinks" minOccurs="0" maxOccurs="unbounded" type="tns:WebLink"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:simpleType name="CustomSettingsType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="List"/>
    <xsd:enumeration value="Hierarchy"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="CustomValue">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="color" minOccurs="0" type="xsd:string"/>
        <xsd:element name="default" type="xsd:boolean"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="isActive" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="label" minOccurs="0" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:simpleType name="DefinitionCreationType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Standard"/>
    <xsd:enumeration value="Custom"/>
    <xsd:enumeration value="System"/>
    <xsd:enumeration value="Derived"/>
    <xsd:enumeration value="Bridge"/>
    <xsd:enumeration value="Curated"/>
    <xsd:enumeration value="Segment_Membership"/>
    <xsd:enumeration value="Calculated_Insight"/>
    <xsd:enumeration value="Ml_Prediction"/>
    <xsd:enumeration value="Activation_Audience"/>
    <xsd:enumeration value="CG_Audience"/>
    <xsd:enumeration value="Ad_Audience_Insights"/>
    <xsd:enumeration value="Transform"/>
    <xsd:enumeration value="ADG"/>
    <xsd:enumeration value="External"/>
    <xsd:enumeration value="Vector_Embedding"/>
    <xsd:enumeration value="Chunk"/>
    <xsd:enumeration value="Directory_Table"/>
    <xsd:enumeration value="Semantic"/>
    <xsd:enumeration value="Problem_Records"/>
    <xsd:enumeration value="Clean_Room"/>
    <xsd:enumeration value="Deletion_Records"/>
    <xsd:enumeration value="Auxiliary"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="DeleteConstraint">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Cascade"/>
    <xsd:enumeration value="Restrict"/>
    <xsd:enumeration value="SetNull"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="DeploymentStatus">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="InDevelopment"/>
    <xsd:enumeration value="Deployed"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="ElementType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Float"/>
    <xsd:enumeration value="Text"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="Encoding">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="UTF-8"/>
    <xsd:enumeration value="ISO-8859-1"/>
    <xsd:enumeration value="Shift_JIS"/>
    <xsd:enumeration value="ISO-2022-JP"/>
    <xsd:enumeration value="EUC-JP"/>
    <xsd:enumeration value="ks_c_5601-1987"/>
    <xsd:enumeration value="Big5"/>
    <xsd:enumeration value="GB2312"/>
    <xsd:enumeration value="Big5-HKSCS"/>
    <xsd:enumeration value="x-SJIS_0213"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="EncryptedFieldMaskChar">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="asterisk"/>
    <xsd:enumeration value="X"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="EncryptedFieldMaskType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="all"/>
    <xsd:enumeration value="creditCard"/>
    <xsd:enumeration value="ssn"/>
    <xsd:enumeration value="lastFour"/>
    <xsd:enumeration value="sin"/>
    <xsd:enumeration value="nino"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="EncryptionScheme">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="None"/>
    <xsd:enumeration value="ProbabilisticEncryption"/>
    <xsd:enumeration value="CaseSensitiveDeterministicEncryption"/>
    <xsd:enumeration value="CaseInsensitiveDeterministicEncryption"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="FieldManageability">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="DeveloperControlled"/>
    <xsd:enumeration value="SubscriberControlled"/>
    <xsd:enumeration value="Locked"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="FieldSet">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="availableFields" minOccurs="0" maxOccurs="unbounded" type="tns:FieldSetItem"/>
        <xsd:element name="description" type="xsd:string"/>
        <xsd:element name="displayedFields" minOccurs="0" maxOccurs="unbounded" type="tns:FieldSetItem"/>
        <xsd:element name="label" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="FieldSetItem">
  <xsd:sequence>
    <xsd:element name="alternativeDisplayFormat" minOccurs="0" type="xsd:string"/>
    <xsd:element name="field" minOccurs="0" type="xsd:string"/>
    <xsd:element name="isFieldManaged" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="isRequired" minOccurs="0" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="FieldType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="AutoNumber"/>
    <xsd:enumeration value="Lookup"/>
    <xsd:enumeration value="MasterDetail"/>
    <xsd:enumeration value="Checkbox"/>
    <xsd:enumeration value="Currency"/>
    <xsd:enumeration value="Date"/>
    <xsd:enumeration value="DateTime"/>
    <xsd:enumeration value="Email"/>
    <xsd:enumeration value="Number"/>
    <xsd:enumeration value="Percent"/>
    <xsd:enumeration value="Phone"/>
    <xsd:enumeration value="Picklist"/>
    <xsd:enumeration value="MultiselectPicklist"/>
    <xsd:enumeration value="Text"/>
    <xsd:enumeration value="TextArea"/>
    <xsd:enumeration value="LongTextArea"/>
    <xsd:enumeration value="Html"/>
    <xsd:enumeration value="Url"/>
    <xsd:enumeration value="EncryptedText"/>
    <xsd:enumeration value="Summary"/>
    <xsd:enumeration value="Hierarchy"/>
    <xsd:enumeration value="File"/>
    <xsd:enumeration value="MetadataRelationship"/>
    <xsd:enumeration value="Location"/>
    <xsd:enumeration value="ExternalLookup"/>
    <xsd:enumeration value="IndirectLookup"/>
    <xsd:enumeration value="CustomDataType"/>
    <xsd:enumeration value="Time"/>
    <xsd:enumeration value="Address"/>
    <xsd:enumeration value="Array"/>
    <xsd:enumeration value="Integer"/>
    <xsd:enumeration value="Long"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="FilterItem">
  <xsd:sequence>
    <xsd:element name="field" type="xsd:string"/>
    <xsd:element name="operation" type="tns:FilterOperation"/>
    <xsd:element name="value" minOccurs="0" type="xsd:string"/>
    <xsd:element name="valueField" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="FilterOperation">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="equals"/>
    <xsd:enumeration value="notEqual"/>
    <xsd:enumeration value="lessThan"/>
    <xsd:enumeration value="greaterThan"/>
    <xsd:enumeration value="lessOrEqual"/>
    <xsd:enumeration value="greaterOrEqual"/>
    <xsd:enumeration value="contains"/>
    <xsd:enumeration value="notContain"/>
    <xsd:enumeration value="startsWith"/>
    <xsd:enumeration value="includes"/>
    <xsd:enumeration value="excludes"/>
    <xsd:enumeration value="within"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="FilterScope">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Everything"/>
    <xsd:enumeration value="Mine"/>
    <xsd:enumeration value="Queue"/>
    <xsd:enumeration value="Delegated"/>
    <xsd:enumeration value="MyTerritory"/>
    <xsd:enumeration value="MyTeamTerritory"/>
    <xsd:enumeration value="Team"/>
    <xsd:enumeration value="SalesTeam"/>
    <xsd:enumeration value="AssignedToMe"/>
    <xsd:enumeration value="MineAndMyGroups"/>
    <xsd:enumeration value="ScopingRule"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="ForecastCategories">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Omitted"/>
    <xsd:enumeration value="Pipeline"/>
    <xsd:enumeration value="BestCase"/>
    <xsd:enumeration value="MostLikely"/>
    <xsd:enumeration value="Forecast"/>
    <xsd:enumeration value="Closed"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="FormFactor">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Small"/>
    <xsd:enumeration value="Medium"/>
    <xsd:enumeration value="Large"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="Gender">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Neuter"/>
    <xsd:enumeration value="Masculine"/>
    <xsd:enumeration value="Feminine"/>
    <xsd:enumeration value="AnimateMasculine"/>
    <xsd:enumeration value="ClassI"/>
    <xsd:enumeration value="ClassIII"/>
    <xsd:enumeration value="ClassV"/>
    <xsd:enumeration value="ClassVII"/>
    <xsd:enumeration value="ClassIX"/>
    <xsd:enumeration value="ClassXI"/>
    <xsd:enumeration value="ClassXIV"/>
    <xsd:enumeration value="ClassXV"/>
    <xsd:enumeration value="ClassXVI"/>
    <xsd:enumeration value="ClassXVII"/>
    <xsd:enumeration value="ClassXVIII"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="HistoryRetentionPolicy">
  <xsd:sequence>
    <xsd:element name="archiveAfterMonths" type="xsd:int"/>
    <xsd:element name="archiveRetentionYears" type="xsd:int"/>
    <xsd:element name="description" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="Index">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="fields" minOccurs="0" maxOccurs="unbounded" type="tns:IndexField"/>
        <xsd:element name="label" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="IndexField">
  <xsd:sequence>
    <xsd:element name="name" type="xsd:string"/>
    <xsd:element name="sortDirection" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="InvalidMergeActionType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Drop"/>
    <xsd:enumeration value="Keep"/>
    <xsd:enumeration value="Override"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="Language">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="en_US"/>
    <xsd:enumeration value="de"/>
    <xsd:enumeration value="es"/>
    <xsd:enumeration value="fr"/>
    <xsd:enumeration value="it"/>
    <xsd:enumeration value="ja"/>
    <xsd:enumeration value="sv"/>
    <xsd:enumeration value="ko"/>
    <xsd:enumeration value="zh_TW"/>
    <xsd:enumeration value="zh_CN"/>
    <xsd:enumeration value="pt_BR"/>
    <xsd:enumeration value="nl_NL"/>
    <xsd:enumeration value="da"/>
    <xsd:enumeration value="th"/>
    <xsd:enumeration value="fi"/>
    <xsd:enumeration value="ru"/>
    <xsd:enumeration value="es_MX"/>
    <xsd:enumeration value="no"/>
    <xsd:enumeration value="hu"/>
    <xsd:enumeration value="pl"/>
    <xsd:enumeration value="cs"/>
    <xsd:enumeration value="tr"/>
    <xsd:enumeration value="in"/>
    <xsd:enumeration value="ro"/>
    <xsd:enumeration value="vi"/>
    <xsd:enumeration value="uk"/>
    <xsd:enumeration value="iw"/>
    <xsd:enumeration value="el"/>
    <xsd:enumeration value="bg"/>
    <xsd:enumeration value="en_GB"/>
    <xsd:enumeration value="ar"/>
    <xsd:enumeration value="sk"/>
    <xsd:enumeration value="pt_PT"/>
    <xsd:enumeration value="hr"/>
    <xsd:enumeration value="sl"/>
    <xsd:enumeration value="fr_CA"/>
    <xsd:enumeration value="ka"/>
    <xsd:enumeration value="sr"/>
    <xsd:enumeration value="sh"/>
    <xsd:enumeration value="en_AU"/>
    <xsd:enumeration value="en_MY"/>
    <xsd:enumeration value="en_IN"/>
    <xsd:enumeration value="en_PH"/>
    <xsd:enumeration value="en_CA"/>
    <xsd:enumeration value="ro_MD"/>
    <xsd:enumeration value="bs"/>
    <xsd:enumeration value="mk"/>
    <xsd:enumeration value="lv"/>
    <xsd:enumeration value="lt"/>
    <xsd:enumeration value="et"/>
    <xsd:enumeration value="sq"/>
    <xsd:enumeration value="sh_ME"/>
    <xsd:enumeration value="mt"/>
    <xsd:enumeration value="ga"/>
    <xsd:enumeration value="eu"/>
    <xsd:enumeration value="cy"/>
    <xsd:enumeration value="is"/>
    <xsd:enumeration value="cac"/>
    <xsd:enumeration value="quc"/>
    <xsd:enumeration value="cak"/>
    <xsd:enumeration value="ms"/>
    <xsd:enumeration value="tl"/>
    <xsd:enumeration value="lb"/>
    <xsd:enumeration value="rm"/>
    <xsd:enumeration value="hy"/>
    <xsd:enumeration value="hi"/>
    <xsd:enumeration value="ur"/>
    <xsd:enumeration value="bn"/>
    <xsd:enumeration value="de_AT"/>
    <xsd:enumeration value="de_CH"/>
    <xsd:enumeration value="ta"/>
    <xsd:enumeration value="ar_DZ"/>
    <xsd:enumeration value="ar_BH"/>
    <xsd:enumeration value="ar_EG"/>
    <xsd:enumeration value="ar_IQ"/>
    <xsd:enumeration value="ar_JO"/>
    <xsd:enumeration value="ar_KW"/>
    <xsd:enumeration value="ar_LB"/>
    <xsd:enumeration value="ar_LY"/>
    <xsd:enumeration value="ar_MA"/>
    <xsd:enumeration value="ar_OM"/>
    <xsd:enumeration value="ar_QA"/>
    <xsd:enumeration value="ar_SA"/>
    <xsd:enumeration value="ar_SD"/>
    <xsd:enumeration value="ar_SY"/>
    <xsd:enumeration value="ar_TN"/>
    <xsd:enumeration value="ar_AE"/>
    <xsd:enumeration value="ar_YE"/>
    <xsd:enumeration value="zh_SG"/>
    <xsd:enumeration value="zh_HK"/>
    <xsd:enumeration value="en_HK"/>
    <xsd:enumeration value="en_IE"/>
    <xsd:enumeration value="en_SG"/>
    <xsd:enumeration value="en_ZA"/>
    <xsd:enumeration value="fr_BE"/>
    <xsd:enumeration value="fr_LU"/>
    <xsd:enumeration value="fr_CH"/>
    <xsd:enumeration value="de_BE"/>
    <xsd:enumeration value="de_LU"/>
    <xsd:enumeration value="it_CH"/>
    <xsd:enumeration value="nl_BE"/>
    <xsd:enumeration value="es_AR"/>
    <xsd:enumeration value="es_BO"/>
    <xsd:enumeration value="es_CL"/>
    <xsd:enumeration value="es_CO"/>
    <xsd:enumeration value="es_CR"/>
    <xsd:enumeration value="es_DO"/>
    <xsd:enumeration value="es_EC"/>
    <xsd:enumeration value="es_SV"/>
    <xsd:enumeration value="es_GT"/>
    <xsd:enumeration value="es_HN"/>
    <xsd:enumeration value="es_NI"/>
    <xsd:enumeration value="es_PA"/>
    <xsd:enumeration value="es_PY"/>
    <xsd:enumeration value="es_PE"/>
    <xsd:enumeration value="es_PR"/>
    <xsd:enumeration value="es_US"/>
    <xsd:enumeration value="es_UY"/>
    <xsd:enumeration value="es_VE"/>
    <xsd:enumeration value="ca"/>
    <xsd:enumeration value="af"/>
    <xsd:enumeration value="sw"/>
    <xsd:enumeration value="zu"/>
    <xsd:enumeration value="xh"/>
    <xsd:enumeration value="te"/>
    <xsd:enumeration value="ml"/>
    <xsd:enumeration value="kn"/>
    <xsd:enumeration value="mr"/>
    <xsd:enumeration value="gu"/>
    <xsd:enumeration value="pa"/>
    <xsd:enumeration value="en_NZ"/>
    <xsd:enumeration value="mi"/>
    <xsd:enumeration value="my"/>
    <xsd:enumeration value="fa"/>
    <xsd:enumeration value="km"/>
    <xsd:enumeration value="am"/>
    <xsd:enumeration value="kk"/>
    <xsd:enumeration value="ht"/>
    <xsd:enumeration value="sm"/>
    <xsd:enumeration value="haw"/>
    <xsd:enumeration value="zh_MY"/>
    <xsd:enumeration value="ru_LT"/>
    <xsd:enumeration value="ru_PL"/>
    <xsd:enumeration value="ru_AM"/>
    <xsd:enumeration value="ru_KZ"/>
    <xsd:enumeration value="ru_KG"/>
    <xsd:enumeration value="ru_BY"/>
    <xsd:enumeration value="ru_MD"/>
    <xsd:enumeration value="ru_UA"/>
    <xsd:enumeration value="en_AE"/>
    <xsd:enumeration value="en_BE"/>
    <xsd:enumeration value="en_CY"/>
    <xsd:enumeration value="en_DE"/>
    <xsd:enumeration value="en_IL"/>
    <xsd:enumeration value="en_IT"/>
    <xsd:enumeration value="en_NL"/>
    <xsd:enumeration value="en_MT"/>
    <xsd:enumeration value="en_ES"/>
    <xsd:enumeration value="en_PL"/>
    <xsd:enumeration value="en_DK"/>
    <xsd:enumeration value="en_SE"/>
    <xsd:enumeration value="en_NO"/>
    <xsd:enumeration value="en_FR"/>
    <xsd:enumeration value="en_HU"/>
    <xsd:enumeration value="en_CZ"/>
    <xsd:enumeration value="en_SK"/>
    <xsd:enumeration value="en_RO"/>
    <xsd:enumeration value="en_CH"/>
    <xsd:enumeration value="en_AL"/>
    <xsd:enumeration value="en_AD"/>
    <xsd:enumeration value="en_AG"/>
    <xsd:enumeration value="en_AT"/>
    <xsd:enumeration value="en_BS"/>
    <xsd:enumeration value="en_BB"/>
    <xsd:enumeration value="en_BZ"/>
    <xsd:enumeration value="en_BA"/>
    <xsd:enumeration value="en_BG"/>
    <xsd:enumeration value="en_HR"/>
    <xsd:enumeration value="en_DM"/>
    <xsd:enumeration value="en_EE"/>
    <xsd:enumeration value="en_FI"/>
    <xsd:enumeration value="en_GI"/>
    <xsd:enumeration value="en_GR"/>
    <xsd:enumeration value="en_GD"/>
    <xsd:enumeration value="en_GY"/>
    <xsd:enumeration value="en_IS"/>
    <xsd:enumeration value="en_JM"/>
    <xsd:enumeration value="en_JP"/>
    <xsd:enumeration value="en_LV"/>
    <xsd:enumeration value="en_LI"/>
    <xsd:enumeration value="en_LT"/>
    <xsd:enumeration value="en_LU"/>
    <xsd:enumeration value="en_MC"/>
    <xsd:enumeration value="en_ME"/>
    <xsd:enumeration value="en_MK"/>
    <xsd:enumeration value="en_PT"/>
    <xsd:enumeration value="en_RS"/>
    <xsd:enumeration value="en_SI"/>
    <xsd:enumeration value="en_KR"/>
    <xsd:enumeration value="en_KN"/>
    <xsd:enumeration value="en_LC"/>
    <xsd:enumeration value="en_VC"/>
    <xsd:enumeration value="en_TW"/>
    <xsd:enumeration value="en_TH"/>
    <xsd:enumeration value="en_TT"/>
    <xsd:enumeration value="en_TR"/>
    <xsd:enumeration value="nl_SR"/>
    <xsd:enumeration value="fr_HT"/>
    <xsd:enumeration value="de_LI"/>
    <xsd:enumeration value="es_AD"/>
    <xsd:enumeration value="sv_FI"/>
    <xsd:enumeration value="el_CY"/>
    <xsd:enumeration value="fr_MA"/>
    <xsd:enumeration value="kl"/>
    <xsd:enumeration value="ji"/>
    <xsd:enumeration value="hmn"/>
    <xsd:enumeration value="eo"/>
    <xsd:enumeration value="iw_EO"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ListView">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="booleanFilter" minOccurs="0" type="xsd:string"/>
        <xsd:element name="columns" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
        <xsd:element name="division" minOccurs="0" type="xsd:string"/>
        <xsd:element name="filterScope" type="tns:FilterScope"/>
        <xsd:element name="filters" minOccurs="0" maxOccurs="unbounded" type="tns:ListViewFilter"/>
        <xsd:element name="label" type="xsd:string"/>
        <xsd:element name="language" minOccurs="0" type="tns:Language"/>
        <xsd:element name="queue" minOccurs="0" type="xsd:string"/>
        <xsd:element name="sharedTo" minOccurs="0" type="tns:SharedTo"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="ListViewFilter">
  <xsd:sequence>
    <xsd:element name="field" type="xsd:string"/>
    <xsd:element name="operation" type="tns:FilterOperation"/>
    <xsd:element name="value" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="LookupFilter">
  <xsd:sequence>
    <xsd:element name="active" type="xsd:boolean"/>
    <xsd:element name="booleanFilter" minOccurs="0" type="xsd:string"/>
    <xsd:element name="description" minOccurs="0" type="xsd:string"/>
    <xsd:element name="errorMessage" minOccurs="0" type="xsd:string"/>
    <xsd:element name="filterItems" minOccurs="0" maxOccurs="unbounded" type="tns:FilterItem"/>
    <xsd:element name="infoMessage" minOccurs="0" type="xsd:string"/>
    <xsd:element name="isOptional" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="MappingAlertType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="None"/>
    <xsd:enumeration value="Warning"/>
    <xsd:enumeration value="Error"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="MktDataLakeAttributes">
  <xsd:sequence>
    <xsd:element name="creationType" minOccurs="0" type="tns:DefinitionCreationType"/>
    <xsd:element name="isEnabled" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="objectCategory" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="MktDataLakeFieldAttributes">
  <xsd:sequence>
    <xsd:element name="dateFormat" minOccurs="0" type="xsd:string"/>
    <xsd:element name="definitionCreationType" minOccurs="0" type="tns:DefinitionCreationType"/>
    <xsd:element name="externalName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="isEventDate" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="isInternalOrganization" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="isRecordModified" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="keyQualifierName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="mktDatalakeSrcKeyQualifier" minOccurs="0" type="xsd:string"/>
    <xsd:element name="primaryIndexOrder" minOccurs="0" type="xsd:int"/>
    <xsd:element name="usageTag" minOccurs="0" type="tns:UsageTag"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="MktDataModelAttributes">
  <xsd:sequence>
    <xsd:element name="creationType" minOccurs="0" type="tns:DefinitionCreationType"/>
    <xsd:element name="dataModelTaxonomy" minOccurs="0" type="xsd:string"/>
    <xsd:element name="dataSpaceName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="dataSpacePrefix" minOccurs="0" type="xsd:string"/>
    <xsd:element name="description" minOccurs="0" type="xsd:string"/>
    <xsd:element name="isEnabled" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="isSegmentable" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="isUsedForMetrics" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="labelOverride" minOccurs="0" type="xsd:string"/>
    <xsd:element name="masterLabel" minOccurs="0" type="xsd:string"/>
    <xsd:element name="objectCategory" minOccurs="0" type="xsd:string"/>
    <xsd:element name="referenceEntityGroup" minOccurs="0" type="xsd:string"/>
    <xsd:element name="referenceEntityName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="referenceEntitySubjectArea" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="MktDataModelFieldAttributes">
  <xsd:sequence>
    <xsd:element name="definitionCreationType" minOccurs="0" type="tns:DefinitionCreationType"/>
    <xsd:element name="invalidMergeActionType" minOccurs="0" type="tns:InvalidMergeActionType"/>
    <xsd:element name="isDynamicLookup" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="keyQualifierName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="labelOverride" minOccurs="0" type="xsd:string"/>
    <xsd:element name="mappingAlertType" minOccurs="0" type="tns:MappingAlertType"/>
    <xsd:element name="masterLabel" minOccurs="0" type="xsd:string"/>
    <xsd:element name="primaryIndexOrder" minOccurs="0" type="xsd:int"/>
    <xsd:element name="refAttrDeveloperName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="usageTag" minOccurs="0" type="tns:MktDataModelFieldUsageTag"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="MktDataModelFieldUsageTag">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="None"/>
    <xsd:enumeration value="KeyQualifier"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="PicklistValue">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="color" minOccurs="0" type="xsd:string"/>
        <xsd:element name="default" type="xsd:boolean"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="isActive" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="allowEmail" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="closed" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="controllingFieldValues" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
        <xsd:element name="converted" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="cssExposed" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="forecastCategory" minOccurs="0" type="tns:ForecastCategories"/>
        <xsd:element name="highPriority" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="probability" minOccurs="0" type="xsd:int"/>
        <xsd:element name="reverseRole" minOccurs="0" type="xsd:string"/>
        <xsd:element name="reviewed" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="won" minOccurs="0" type="xsd:boolean"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:simpleType name="PlatformEventPublishBehavior">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="PublishAfterCommit"/>
    <xsd:enumeration value="PublishImmediately"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="PlatformEventType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="HighVolume"/>
    <xsd:enumeration value="StandardVolume"/>
    <xsd:enumeration value="ExternalEvent"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ProfileSearchLayouts">
  <xsd:sequence>
    <xsd:element name="fields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="profileName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="RecordType">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="active" type="xsd:boolean"/>
        <xsd:element name="businessProcess" minOccurs="0" type="xsd:string"/>
        <xsd:element name="compactLayoutAssignment" minOccurs="0" type="xsd:string"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="label" type="xsd:string"/>
        <xsd:element name="picklistValues" minOccurs="0" maxOccurs="unbounded" type="tns:RecordTypePicklistValue"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="RecordTypePicklistValue">
  <xsd:sequence>
    <xsd:element name="picklist" type="xsd:string"/>
    <xsd:element name="values" minOccurs="0" maxOccurs="unbounded" type="tns:PicklistValue"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="SearchLayouts">
  <xsd:sequence>
    <xsd:element name="customTabListAdditionalFields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="excludedStandardButtons" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="listViewButtons" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="lookupDialogsAdditionalFields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="lookupFilterFields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="lookupPhoneDialogsAdditionalFields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="massQuickActions" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="searchFilterFields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="searchResultsAdditionalFields" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="searchResultsCustomButtons" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="SetupObjectVisibility">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="PackageProtected"/>
    <xsd:enumeration value="Protected"/>
    <xsd:enumeration value="Public"/>
  </xsd:restriction>
</xsd:simpleType>
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
<xsd:simpleType name="SharingModel">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Private"/>
    <xsd:enumeration value="Read"/>
    <xsd:enumeration value="ReadSelect"/>
    <xsd:enumeration value="ReadWrite"/>
    <xsd:enumeration value="ReadWriteTransfer"/>
    <xsd:enumeration value="FullAccess"/>
    <xsd:enumeration value="ControlledByParent"/>
    <xsd:enumeration value="ControlledByLeadOrContact"/>
    <xsd:enumeration value="ControlledByCampaign"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="SharingReason">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="label" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="SharingRecalculation">
  <xsd:sequence>
    <xsd:element name="className" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="StartsWith">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Consonant"/>
    <xsd:enumeration value="Vowel"/>
    <xsd:enumeration value="Special"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="SummaryOperations">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="count"/>
    <xsd:enumeration value="sum"/>
    <xsd:enumeration value="min"/>
    <xsd:enumeration value="max"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="Template">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Page"/>
    <xsd:enumeration value="Tab"/>
    <xsd:enumeration value="Toc"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="TreatBlanksAs">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="BlankAsBlank"/>
    <xsd:enumeration value="BlankAsZero"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="UsageTag">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="NONE"/>
    <xsd:enumeration value="KEY_QUALIFIER"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ValidationRule">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="active" type="xsd:boolean"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="errorConditionFormula" type="xsd:string"/>
        <xsd:element name="errorDisplayField" minOccurs="0" type="xsd:string"/>
        <xsd:element name="errorMessage" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="ValueSet">
  <xsd:sequence>
    <xsd:element name="controllingField" minOccurs="0" type="xsd:string"/>
    <xsd:element name="restricted" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="valueSetDefinition" minOccurs="0" type="tns:ValueSetValuesDefinition"/>
    <xsd:element name="valueSetName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="valueSettings" minOccurs="0" maxOccurs="unbounded" type="tns:ValueSettings"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ValueSetValuesDefinition">
  <xsd:sequence>
    <xsd:element name="sorted" type="xsd:boolean"/>
    <xsd:element name="value" minOccurs="0" maxOccurs="unbounded" type="tns:CustomValue"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ValueSettings">
  <xsd:sequence>
    <xsd:element name="controllingFieldValue" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="valueName" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="WebLink">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="availability" type="tns:WebLinkAvailability"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="displayType" type="tns:WebLinkDisplayType"/>
        <xsd:element name="encodingKey" minOccurs="0" type="tns:Encoding"/>
        <xsd:element name="hasMenubar" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="hasScrollbars" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="hasToolbar" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="height" minOccurs="0" type="xsd:int"/>
        <xsd:element name="isResizable" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="linkType" type="tns:WebLinkType"/>
        <xsd:element name="masterLabel" minOccurs="0" type="xsd:string"/>
        <xsd:element name="openType" type="tns:WebLinkWindowType"/>
        <xsd:element name="page" minOccurs="0" type="xsd:string"/>
        <xsd:element name="position" minOccurs="0" type="tns:WebLinkPosition"/>
        <xsd:element name="protected" type="xsd:boolean"/>
        <xsd:element name="requireRowSelection" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="scontrol" minOccurs="0" type="xsd:string"/>
        <xsd:element name="showsLocation" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showsStatus" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="url" minOccurs="0" type="xsd:string"/>
        <xsd:element name="width" minOccurs="0" type="xsd:int"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:simpleType name="WebLinkAvailability">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="online"/>
    <xsd:enumeration value="offline"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="WebLinkDisplayType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="link"/>
    <xsd:enumeration value="button"/>
    <xsd:enumeration value="massActionButton"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="WebLinkPosition">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="fullScreen"/>
    <xsd:enumeration value="none"/>
    <xsd:enumeration value="topLeft"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="WebLinkType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="url"/>
    <xsd:enumeration value="sControl"/>
    <xsd:enumeration value="javascript"/>
    <xsd:enumeration value="page"/>
    <xsd:enumeration value="flow"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="WebLinkWindowType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="newWindow"/>
    <xsd:enumeration value="sidebar"/>
    <xsd:enumeration value="noSidebar"/>
    <xsd:enumeration value="replace"/>
    <xsd:enumeration value="onClickJavaScript"/>
  </xsd:restriction>
</xsd:simpleType>
```
