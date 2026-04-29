# ApexClass - Metadata API

## Description

Represents an Apex class. An Apex class is a template or blueprint from which Apex objects are created. Classes consist of other classes, user-defined methods, variables, exception types, and static initialization code.

## File Information

The file suffix is .cls for the class file. The accompanying metadata file is named ClassName.cls-meta.xml.

Apex classes are stored in the classes folder in the corresponding package directory.

## Declarative Metadata Sample Definition

MyHelloWorld.cls file:

```
public class MyHelloWorld {
// This method updates the Hello field on a list
// of accounts.
public static void addHelloWorld(Account[] accs){
	for (Account a:accs){
		if (a.Hello__c != 'World')
		a.Hello__c = 'World';
		}
	}
}
```

MyHelloWorld.cls-meta.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApexClass xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>66.0</apiVersion>
</ApexClass>
```
