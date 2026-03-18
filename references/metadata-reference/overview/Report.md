# Report - Metadata API

## Description

Represents a custom report. This metadata type only supports custom reports; standard reports aren’t supported.

## File Information

- **File Suffix**: `.report`
- **Directory Location**: `reports`

## Declarative Metadata Sample Definition

A sample XML snippet using cross filters to build an Accounts report for cases where case status isn’t closed:

```
<crossFilters>
        <criteriaItems>
            <column>Status</column>
            <operator>notequal</operator>
            <value>Closed</value>
        </criteriaItems>
        <operation>with</operation>
        <primaryTableColumn>ACCOUNT_ID</primaryTableColumn>
        <relatedTable>Case</relatedTable>
        <relatedTableJoinColumn>Account</relatedTableJoinColumn>
    </crossFilters>
```

### Declarative Metadata Sample Definition

A sample XML report definition:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Report xmlns="http://soap.sforce.com/2006/04/metadata">
    <aggregates>
        <acrossGroupingContext>CRT_Object__c$Id</acrossGroupingContext>
        <calculatedFormula>PREVGROUPVAL(CRT_Object__c.Currency__c:AVG, CRT_Object__c.Id) *
                PARENTGROUPVAL(CRT_Object__c.Number__c:MAX, CRT_Object__c.CreatedBy.Name, 
                COLUMN_GRAND_SUMMARY)/RowCount</calculatedFormula>
        <datatype>number</datatype>
        <developerName>FORMULA1</developerName>
        <downGroupingContext>CRT_Object__c$CreatedBy</downGroupingContext>
        <isActive>true</isActive>
        <masterLabel>CurrCSF</masterLabel>
        <scale>2</scale>
    </aggregates>
    <aggregates>
        <acrossGroupingContext>CRT_Object__c$LastModifiedDate</acrossGroupingContext>
        <calculatedFormula>IF(RowCount&gt;10, 
                BLANKVALUE(ROUND(PREVGROUPVAL(CRT_Object__c.Currency__c:SUM, 
                CRT_Object__c.LastModifiedDate),3), 
                PARENTGROUPVAL(CRT_Object__c.Number__c:SUM, ROW_GRAND_SUMMARY, 
                CRT_Object__c.Id))  , 1000)</calculatedFormula>
        <datatype>number</datatype>
        <developerName>FORMULA2</developerName>
        <downGroupingContext>GRAND_SUMMARY</downGroupingContext>
        <isActive>true</isActive>
        <masterLabel>numCSF</masterLabel>
        <scale>2</scale>
    </aggregates>
    <buckets>
        <bucketType>number</bucketType>
        <developerName>BucketField_BusinessSize</developerName>
        <masterLabel>NumericBucket</masterLabel>
        <nullTreatment>z</nullTreatment>
        <sourceColumnName>SALES</sourceColumnName>
        <values>
            <sourceValues>
                <to>10000</to>
            </sourceValues>
            <value>low</value>
        </values>
        <values>
            <sourceValues>
                <from>10000</from>
                <to>25000</to>
            </sourceValues>
            <value>mid</value>
        </values>
        <values>
            <sourceValues>
                <from>25000</from>
            </sourceValues>
            <value>high</value>
        </values>
    </buckets>
    <buckets>
        <bucketType>text</bucketType>
        <developerName>BucketField_Region</developerName>
        <masterLabel>TextBucket</masterLabel>
        <nullTreatment>n</nullTreatment>
        <otherBucketLabel>Other</otherBucketLabel>
        <sourceColumnName>ADDRESS1_STATE</sourceColumnName>
        <values>
            <sourceValues>
                <sourceValue>CA</sourceValue>
            </sourceValues>
            <value>west</value>
        </values>
        <values>
            <sourceValues>
                <sourceValue>NY</sourceValue>
            </sourceValues>
            <sourceValues>
                <sourceValue>Ontario</sourceValue>
            </sourceValues>
            <value>east</value>
        </values>
    </buckets>
    <chart>
        <backgroundColor1>#FFFFFF</backgroundColor1>
        <backgroundColor2>#FFFFFF</backgroundColor2>
        <backgroundFadeDir>Diagonal</backgroundFadeDir>
        <chartSummaries>
            <axisBinding>y</axisBinding>
            <column>FORMULA1</column>
        </chartSummaries>
        <chartSummaries>
            <axisBinding>y</axisBinding>
            <column>FORMULA2</column>
        </chartSummaries>
        <chartSummaries>
            <aggregate>Maximum</aggregate>
            <axisBinding>y</axisBinding>
            <column>CRT_Object__c$Number__c</column>
        </chartSummaries>
        <chartSummaries>
            <axisBinding>y</axisBinding>
            <column>RowCount</column>
        </chartSummaries>
        <chartType>VerticalColumn</chartType>
        <groupingColumn>CRT_Object__c$LastModifiedDate</groupingColumn>
        <legendPosition>Right</legendPosition>
        <location>CHART_TOP</location>
        <size>Medium</size>
        <summaryAxisRange>Auto</summaryAxisRange>
        <textColor>#000000</textColor>
        <textSize>12</textSize>
        <titleColor>#000000</titleColor>
        <titleSize>18</titleSize>
    </chart>
    <columns>
        <field>CRT_Object__c$Name</field>
    </columns>
    <columns>
        <aggregateTypes>Average</aggregateTypes>
        <field>CRT_Object__c$Currency__c</field>
    </columns>
    <columns>
        <aggregateTypes>Maximum</aggregateTypes>
        <field>CRT_Object__c$Number__c</field>
    </columns>
    <columns>
        <field>BucketField__Region</field>
    </columns>
    <format>Matrix</format>
    <groupingsAcross>
        <dateGranularity>Day</dateGranularity>
        <field>CRT_Object__c$Id</field>
        <sortOrder>Asc</sortOrder>
    </groupingsAcross>
    <groupingsAcross>
        <dateGranularity>Year</dateGranularity>
        <field>CRT_Object__c$LastModifiedDate</field>
        <sortOrder>Asc</sortOrder>
    </groupingsAcross>
    <groupingsDown>
        <dateGranularity>Day</dateGranularity>
        <field>CRT_Object__c$CreatedBy</field>
        <sortOrder>Asc</sortOrder>
    </groupingsDown>
    <groupingsDown>
        <dateGranularity>Day</dateGranularity>
        <field>CRT_Object__c$Currency__c</field>
        <sortOrder>Desc</sortOrder>
    </groupingsDown>
    <name>CrtMMVC</name>
    <reportType>CRT1__c</reportType>
    <scope>organization</scope>
    <showDetails>false</showDetails>
    <timeFrameFilter>
        <dateColumn>CRT_Object__c$CreatedDate</dateColumn>
        <interval>INTERVAL_CUSTOM</interval>
    </timeFrameFilter>
</Report>
```

### Declarative Metadata Sample Definition for a Joined Report

A sample XML report definition:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Report xmlns="http://soap.sforce.com/2006/04/metadata">
<!-- This is a cross-block custom summary formula. Note that the calculated formula reference for a blocks reference uses the BlockId#Aggregate. -->
    <aggregates>
        <calculatedFormula>B1#AMOUNT:SUM+B2#EMPLOYEES:SUM</calculatedFormula>
        <datatype>number</datatype>
        <developerName>FORMULA</developerName>
        <isActive>true</isActive>
        <isCrossBlock>true</isCrossBlock>
        <masterLabel>Cross-Block CSF Example</masterLabel>
        <scale>2</scale>
    </aggregates>
<!-- This is a standard custom summary formula. Note that the calculated formula reference does not have block reference but just the aggregate name of the report type associated (Opportunity).-->
    <aggregates>
        <calculatedFormula>AMOUNT:SUM</calculatedFormula>
        <developerName>FORMULA2</developerName>
        <isActive>true</isActive>
        <isCrossBlock>false</isCrossBlock>
        <masterLabel>Standard CSF Example</masterLabel>
        <reportType>Opportunity</reportType>
        <scale>2</scale>
    </aggregates>
    <block>
      <blockInfo>
<!-- This is how the block defines that the custom summary formula should be referenced. In this example, it’s the in standard FORMULA 2 defined above. This block report has blockID B1.-->
        <aggregateReferences>    
          <aggregate>FORMULA2</aggregate>
        </aggregateReference>
        <blockId>B1</blockId>
        <joinTable>a</joinTable>
      </blockInfo>
      <columns>
        <field>TYPE</field>
      </columns>
      <format>Summary</format>
      <name>Opportunities BLock 3</name>
      <params>
        <name>role_territory</name>
        <value>role</value>
      </params>
      <params>
        <name>terr</name>
        <value>all</value>
      </params>
      <params>
        <name>open</name>
        <value>all</value>
      </params>
      <params>
        <name>probability</name>
        <value>0</value>
      </params>
      <params>
        <name>co</name>
        <value>1</value>
      </params>
      <reportType>Opportunity</reportType>
      <scope>organization</scope>
      <timeFrameFilter>
        <dateColumn>CLOSE_DATE</dateColumn>
        <interval>INTERVAL_CUSTOM</interval>
      </timeFrameFilter>
    </block>
    <block>
      <blockInfo>
<!-- This is how the block defines that the custom summary formula should be referenced. In this example, it’s the cross-block custom summary formula FORMULA 1 defined above. This block report has blockId B2.-->
        <aggregateReferences>
          <aggregate>FORMULA1</aggregate>
        </aggregateReferences>
        <blockId>B2</blockId>
        <joinTable>a</joinTable>
      </blockInfo>
      <columns>
        <field>USERS.NAME</field>
      </columns>
      <columns>
        <field>TYPE</field>
      </columns>
      <columns>
         <field>DUE_DATE</field>
      </columns>
      <columns>
        <field>LAST_UPDATE</field>
      </columns>
      <columns>
        <field>ADDRESS1_STATE</field>
      </columns>
      <format>Summary</format
      <name>Accounts block 5</name>
      <params>
        <name>terr</name>
        <value>all</value>
      </params>
      <params>
        <name>co</name>
        <value>1</value>
      </params>
      <reportType>AccountList</reportType>
      <scope>organization</scope>
      <timeFrameFilter>
        <dateColumn>CREATED_DATE</dateColumn>
        <interval>INTERVAL_CUSTOM</interval>
      </timeFrameFilter>
    </block>
    <blockInfo>
      <blockId xsi:nil="true"/>
      <joinTable>a</joinTable>
    </blockInfo>
<chart>
        <backgroundColor1>#FFFFFF</backgroundColor1>
        <backgroundColor2>#FFFFFF</backgroundColor2>
        <backgroundFadeDir>Diagonal</backgroundFadeDir>
        <chartSummaries>
            <axisBinding>y</axisBinding>
<!-- This is how chart aggregates are designed in multiblock. We're using RowCount from Block 1.-->
            <column>B1#RowCount</column>
        </chartSummaries>
        <chartType>HorizontalBar</chartType>
        <enableHoverLabels>false</enableHoverLabels>
        <expandOthers>true</expandOthers>
        <groupingColumn>ACCOUNT_NAME</groupingColumn>
        <location>CHART_TOP</location>
        <showAxisLabels>true</showAxisLabels>
        <showPercentage>false</showPercentage>
        <showTotal>false</showTotal>
        <showValues>false</showValues>
        <size>Medium</size>
        <summaryAxisRange>Auto</summaryAxisRange>
        <textColor>#000000</textColor>
        <textSize>12</textSize>
        <titleColor>#000000</titleColor>
        <titleSize>18</titleSize>
    </chart>
    <format>MultiBlock</format>
    <groupingsDown>
        <dateGranularity>Day</dateGranularity>
        <field>ACCOUNT_NAME</field>
        <sortOrder>Asc</sortOrder>
    </groupingsDown>
    <name>mb_mbapi</name>
    <reportType>Opportunity</reportType>
    <showDetails>true</showDetails>
</Report>
```
