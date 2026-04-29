# CustomField — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
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
<xsd:simpleType name="ElementType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Float"/>
    <xsd:enumeration value="Text"/>
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
<xsd:simpleType name="InvalidMergeActionType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Drop"/>
    <xsd:enumeration value="Keep"/>
    <xsd:enumeration value="Override"/>
  </xsd:restriction>
</xsd:simpleType>
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
<xsd:simpleType name="SummaryOperations">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="count"/>
    <xsd:enumeration value="sum"/>
    <xsd:enumeration value="min"/>
    <xsd:enumeration value="max"/>
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
```
