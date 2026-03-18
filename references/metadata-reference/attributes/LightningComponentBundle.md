# LightningComponentBundle — Attribute Reference

## Fields

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apiVersion | double | A double value that binds the component to a Salesforce API version. |
| capabilities | Capabilities[] | A list of capabilities. A capability is something that a component can do, as opposed to a target, which defines where you can use a component. Available in API version 48.0 and later. |
| description | string | A description of the Lightning web component. |
| isExplicitImport | boolean | Indicates whether imports between files are done explicitly by the developer (true) or implicitly by the framework (false). |
| isExposed | boolean | If true, the component is available to other namespaces. If true and a targets value is also provided, the component is available to Salesforce builders such as Lightning App Builder and Experience Builder. If false, the component isn't available to builders and other namespaces. |
| lwcResources | LwcResources[] | A list of resources inside a bundle. |
| masterLabel | string | The component title that appears in the list view. |
| targetConfigs | base64Binary | Configurations for each target. Each target is a Lightning page type. For example, this configuration allows a Lightning web component to be used on a Contact record page in Lightning App Builder.<targetConfigs> <targetConfig targets="lightning__RecordPage"> <objects> <object>Contact</object> </objects> </targetConfig> </targetConfigs> |
| targets | Targets[] | A list of targets where the Lightning web component can be used, such as in Lightning App Builder or Experience Builder sites. |

## Capabilities

Represents a list of capabilities. A capability is something that a component can do, as opposed to a target, which defines where you can use a component. Available in API version 48.0 and later. For more information, see XML Configuration File Elements.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| capability | string | Specifies something that a component can do. Valid values are: lightningCommunity__RelaxedCSP lightning__dynamicComponent lightning__ServerRenderable lightning__ServerRenderableWithHydration lightning__ServiceCloudVoiceToolkitApi |

## LwcResources

Represents a list of resources inside a LightningComponentBundle.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| lwcResource | LwcResource | A resource inside a LightningComponentBundle. |

## LwcResource

Represents a resource inside a LightningComponentBundle.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| filePath | string | Required. The file path of a resource. |
| source | base64Binary | Required. The content of a resource. |

## Targets

Represents a list of supported containers for a Lightning web component. For more information, see XML Configuration File Elements.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| target | string | Specifies the type of Lightning page the component can be added to in the builders, such as in Lightning App Builder, Experience Builder, Flow Builder, or Document Builder.For valid values, see XML Configuration File Elements: target. |
