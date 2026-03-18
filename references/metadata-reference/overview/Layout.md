# Layout - Metadata API

## Description

Represents the metadata associated with a page layout. For more information, see Page Layouts in Salesforce Help.

## File Information

- **File Suffix**: `.layout`
- **Directory Location**: `layouts`

## Declarative Metadata Sample Definition

This sample defines a page layout.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Layout xmlns="http://soap.sforce.com/2006/04/metadata">
   <customConsoleComponents>
    <primaryTabComponents>
       <container>
           <region>left</region>
          <style>Stack</style>
          <unit>Pixel</unit>
          <width>101</width>
          <sidebarComponent>
                <width>60</width>
                <page>simplepage1</page>
                <unit>Percentage</unit>
          </sidebarComponent>
          <sidebarComponent>
                <width>40</width>
                <page>Hello_World</page>
                <unit>Percentage</unit>
          </sidebarComponent>
       </container>
    </primaryTabComponents>
    <subtabComponents>
       <component>
          <location>top</location>
          <visualforcePage>ConsoleComponentPage2</visualforcePage>
          <height>200</height>
       </component>
    </subtabComponents>
   </customConsoleComponents>
    <customButtons>ButtonLink</customButtons>
    <layoutSections>
        <editHeading>true</editHeading>
        <label>Information</label>
        <layoutColumns>
            <layoutItems>
                <behavior>Required</behavior>
                <field>Name</field>
            </layoutItems>
            <layoutItems>
                <height>180</height>
                <scontrol>LayoutSControl</scontrol>
                <showLabel>true</showLabel>
                <showScrollbars>true</showScrollbars>
                <width>50%</width>
            </layoutItems>
            <layoutItems>
                <reportChartComponent>
                   <contextFilterableField>CUST_ID</contextFilterableField>
                   <includeContext>true</includeContext>
                   <reportName>Open_Accounts_by_Cases</reportName>
                   <showTitle>false</showTitle>
                   <size>LARGE</size>
                <reportChartComponent>
            </layoutItems>
        </layoutColumns>
        <layoutColumns>
            <layoutItems>
                <behavior>Edit</behavior>
                <field>OwnerId</field>
            </layoutItems>
            <layoutItems>
                <behavior>Edit</behavior>
                <field>CurrencyIsoCode</field>
            </layoutItems>
        </layoutColumns>
        <style>TwoColumnsTopToBottom</style>
    </layoutSections>
    <layoutSections>
        <editHeading>true</editHeading>
        <label>System Information</label>
        <layoutColumns>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>CreatedById</field>
            </layoutItems>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>Alpha1__c</field>
            </layoutItems>
            <layoutItems>
                <height>200</height>
                <page>mcanvasPage</page>
                <showLabel>true</showLabel>
                <showScrollbars>false</showScrollbars>
                <width>100%</width>
            </layoutItems>
        </layoutColumns>
        <layoutColumns>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>LastModifiedById</field>
            </layoutItems>
            <layoutItems>
                <behavior>Edit</behavior>
                <field>TextArea__c</field>
            </layoutItems>
        </layoutColumns>
        <style>TwoColumnsTopToBottom</style>
    </layoutSections>
    <layoutSections>
        <customLabel>true</customLabel>
        <detailHeading>true</detailHeading>
        <label>Custom Links</label>
        <layoutColumns>
            <layoutItems>
                <customLink>CustomWebLink</customLink>
            </layoutItems>
        </layoutColumns>
        <style>CustomLinks</style>
    </layoutSections>
     <quickActionList>
        <quickActionListItems>
            <quickActionName>FeedItem.TextPost</quickActionName>
        </quickActionListItems>
        <quickActionListItems>
            <quickActionName>FeedItem.ContentPost</quickActionName>
        </quickActionListItems>
        <quickActionListItems>
            <quickActionName>FeedItem.LinkPost</quickActionName>
        </quickActionListItems>
        <quickActionListItems>
            <quickActionName>FeedItem.PollPost</quickActionName>
        </quickActionListItems>
    </quickActionList>
    <relatedContent>
        <relatedContentItems>
            <layoutItem>
                <component>sfa:socialPanel</component>
            </layoutItem>
        <relatedContentItems>
    </relatedContent>
    <miniLayoutFields>Name</miniLayoutFields>
    <miniLayoutFields>OwnerId</miniLayoutFields>
    <miniLayoutFields>CurrencyIsoCode</miniLayoutFields>
    <miniLayoutFields>Alpha1__c</miniLayoutFields>
    <miniLayoutFields>TextArea__c</miniLayoutFields>
    <miniRelatedLists>
        <relatedList>RelatedNoteList</relatedList>
    </miniRelatedLists>
    <relatedLists>
        <fields>StepStatus</fields>
        <fields>CreatedDate</fields>
        <fields>OriginalActor</fields>
        <fields>Actor</fields>
        <fields>Comments</fields>
        <fields>Actor.Alias</fields>
        <fields>OriginalActor.Alias</fields>
        <relatedList>RelatedProcessHistoryList</relatedList>
    </relatedLists>
    <relatedLists>
        <relatedList>RelatedNoteList</relatedList>
    </relatedLists>
</Layout>
```

This example shows a layout using <summaryLayout>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Layout xmlns="http://soap.sforce.com/2006/04/metadata">
    <layoutSections>
        <editHeading>true</editHeading>
        <label>System Information</label>
        <layoutColumns>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>CreatedById</field>
            </layoutItems>
            <layoutItems>
                <behavior>Required</behavior>
                <field>Name</field>
            </layoutItems>
        </layoutColumns>
        <layoutColumns>
            <layoutItems>
                <behavior>Readonly</behavior>
                <field>LastModifiedById</field>
            </layoutItems>
        </layoutColumns>
        <style>TwoColumnsTopToBottom</style>
    </layoutSections>
    <summaryLayout>
        <masterLabel>Great Name</masterLabel>
        <sizeX>4</sizeX>
        <sizeY>2</sizeY>
        <summaryLayoutItems>
            <posX>0</posX>
            <posY>0</posY>
            <field>Name</field>
        </summaryLayoutItems>
    </summaryLayout>
</Layout>
```

This example shows a feed-based layout.

```
<Layout>
...
    <feedLayout>
        <leftComponents>
            <componentType>customLinks</componentType>
        </leftComponents>
        <rightComponents>
            <componentType>follow</componentType>
        </rightComponents>
        <rightComponents>
            <componentType>followers</componentType>
        </rightComponents>
        <rightComponents>
            <componentType>visualforce</componentType>
            <page>accountCustomWidget</page>
            <height>200</height>
        </rightComponents>
        <hideSidebar>true</hideSidebar>
        <feedFilterPosition>centerDropDown</feedFilterPosition>
        <feedFilters>
    <feedFilerType>allUpdates</feedFilerType>
        </feedFilters>
        <feedFilters>
    <feedFilerType>feedItemType</feedFilerType>
    <feedItemType>CallLogPost</feedItemType>
        </feedFilters>
        <feedFilters>
    <feedFilerType>feedItemType</feedFilerType>
    <feedItemType>TextPost</feedItemType>
        </feedFilters>
    </feedLayout>
...
</Layout>
```
