# ApexTrigger - Metadata API

## Description

Represents an Apex trigger. A trigger is Apex code that executes before or after specific data manipulation language (DML) events occur, such as before object records are inserted into the database, or after records have been deleted.

## File Information

The file suffix is .trigger for the trigger file. The accompanying metadata file is named TriggerName-meta.xml.

Apex triggers are stored in the triggers folder in the corresponding package directory.

## Declarative Metadata Sample Definition

MyHelloWorld.trigger file:

```
trigger helloWorldAccountTrigger on Account (before insert) {

  Account[] accs = Trigger.new;

   MyHelloWorld.addHelloWorld(accs);
}
```

MyHelloWorld.trigger-meta.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApexTrigger xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>66.0</apiVersion>
</ApexTrigger>
```
