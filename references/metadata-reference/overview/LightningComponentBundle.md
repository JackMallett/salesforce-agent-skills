# LightningComponentBundle - Metadata API

## Description

Represents a Lightning web component bundle. A bundle contains Lightning web component resources.

## Declarative Metadata Sample Definition

This example shows the directory structure in the zip file of one component with a name of hello.

```
lwc
    hello
        hello.html
        hello.js
        hello.js-meta.xml
```

Content of hello.html:

```
<template>

    <lightning-card title="Hello" icon-name="custom:custom14">
        <div class="slds-m-around_medium">
            Hello, {greeting}!
        </div>
    </lightning-card>

</template>
```

Content of hello.js:

```
import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    greeting = 'World';
}
```

Content of hello.js-meta.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>45.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>
```
