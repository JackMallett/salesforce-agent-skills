# ApexPage - Metadata API

## Description

Represents a Visualforce page.

## File Information

The file suffix is .page for the page file. The accompanying metadata file is named PageName-meta.xml.

Visualforce pages are stored in the pages folder in the corresponding package directory.

## Declarative Metadata Sample Definition

SampleApexPage.page file:

```
<apex:page>
<h1>Congratulations</h1>
This is your new Page.
</apex:page>
```

SampleApexPage.page-meta.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApexPage xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>This is a sample Visualforce page.</description>
    <label>SampleApexPage</label>
</ApexPage>
```
