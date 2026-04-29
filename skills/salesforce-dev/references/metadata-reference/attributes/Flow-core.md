# Flow — Core Types & Resources

## Flow

This metadata type represents a valid definition of a flow. This type extends the Metadata metadata type and inherits its fullName field.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| actionCalls | FlowActionCall[] | An array of nodes that defines calls to action. This field is available in API version 31.0 and later. |
| apexPluginCalls | FlowApexPluginCall[] | An array of nodes that defines calls to Apex plug-ins. |
| apiVersion | number | The API version that defines the execution behavior of the flow. This field is available in API version 50.0 and later. Flows created before API version 50.0 show an API version of 0 on the Flows list view in Setup. To show the correct API version number, create another version of the flow, and set the API version for running the flow to 49.0 or later. |
| areMetricsLoggedToDataCloud | boolean | Indicates whether the flow's metrics are logged to Data Cloud. The default value is false. This field is available in API version 63.0 and later. |
| assignments | FlowAssignment[] | An array of assignment nodes. |
| choices | FlowChoice[] | An array of static choice options. |
| collectionFilterCriteria | FlowCollectionFilterCriteria[] | Reserved for future use. |
| collectionProcessors | FlowCollectionProcessor[] | An array of nodes that process collections. This field is available in API version 50.0 and later. |
| constants | FlowConstant[] | An array of constants. |
| customErrors | FlowCustomError[] | An array of custom errors. |
| customProperties | FlowCustomProperty[] | An array of custom properties that specify flow properties such as the option to show a progress indicator in a screen flow. This field is available in API version 63.0 and later. |
| decisions | FlowDecision[] | An array of decision nodes. |
| description | string | Description of the flow. |
| dynamicChoiceSets | FlowDynamicChoiceSet[] | An array that constructs a set of choice options based on a database lookup. |
| environments | FlowEnvironment (enumeration of type string) | The environment in which the flow can run. Valid values are: Default—The flow can run from a Visualforce component, Lightning page, flow action, or custom Aura component. Offline—The flow can run only offline. Flow types that support offline flows must set this value. This value is available in API version 62.0 and later. Slack—The flow can run in Slack and the default environment. You specify the Slack flow environment when you save the flow. This field is available in API version 55.0 and later. |
| exitRules | FlowExitRule[] | An array of exit rules that determine when to end the flow for a user in a segment-triggered flow. This field is available in API version 61.0 and later. |
| experiments | FlowExperiment[] | An array of experiments. This field is available in API version 61.0 and later. |
| formulas | FlowFormula[] | An array of formulas. |
| groups | FlowNodeGroup[] | Reserved for future use. |
| fullName | string | Required. Inherited from the Metadata component. Name of the file in Metadata API. A unique name for the flow that contains only underscores and alphanumeric characters. The name must be unique across the org, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. To deploy or retrieve a version, you can specify the version number. For example, sampleFlow-3 specifies version 3 of the flow whose unique name is sampleFlow. If you don’t specify a version number, the flow is the latest version. In API version 43.0 and earlier, this field included the version number. In API version 44 and later, this field no longer includes the version number. |
| interviewLabel | string | Label for the interview. This label helps users and administrators differentiate interviews from the same flow.In the user interface, this label appears in the Paused Flow Interviews component on the user’s Home tab and in the list of paused flow interviews in Setup. |
| isAdditionalPermissionRequiredToRun | boolean | Override the default behavior and restrict access to enabled profiles or permission sets by setting this property to true. The default value is false. This field is available in API version 47.0 and later. |
| isTemplate | boolean | Indicates whether the process or flow is a template. The default value is false. When installed from managed packages, subscribers can’t view or clone processes or flows because of intellectual property (IP) protection. But when those processes and flows are templates, subscribers can open them in a builder, clone them, and customize the clones. This field is available in API version 45.0 and later. |
| label | string | Required. Label for the flow. |
| loops | FlowLoop[] | An array of nodes for iterating through collections. This field is available in API version 30.0 and later. |
| migratedFromWorkflowRuleName | string | The name of the workflow rule that the flow was migrated from. This field is available in API version 54.0 and later. |
| orchestratedStages | FlowOrchestratedStage[] | An array of stage nodes in an orchestration. This field is available in API version 53.0 and later. |
| processMetadataValues | FlowMetadataValue[] | Metadata values for the flow. This field is available in API version 31.0 and later. |
| processType | FlowProcessType (enumeration of type string) | The type of the flow, as determined by the active version, or the latest version, if there’s no active version. Valid values are: ActionableEventManagementFlow—A flow that triggers an actionable event orchestration process in the background and automatically executes different types of actions based on the event type. This value is available in API version 62.0 and later. ActionCadenceAutolaunchedFlow—A flow that’s executed when a user completes a cadence step. This value is available in API version 56.0 and later. ActionCadenceStepFlow—A screen flow used as a cadence step. This value is available in API version 56.0 and later. ActivityObjectMatchingFlow—A flow that launches when Einstein Activity Capture detects and captures a new activity, such as an email. This type of flow runs in the background without user interaction. This value is available with Sync Email as Salesforce Activity in API version 64.0 and later. Appointments—A flow for Lightning Scheduler. This value is available in API version 44.0 and later. ApprovalWorkflow—An orchestration that’s used for an approval process. This value is available in API version 63.0 and later. AutoLaunchedFlow—A flow that doesn’t require user interaction. CheckoutFlow—A flow used in Lightning B2B Commerce to create a checkout in a store. This value is available in API version 48.0 and later. ContactRequestFlow—A flow that lets customers request to be contacted by customer support. This flow is used to create contact request records. This value is available in API version 45.0 and later. CustomerLifecycle—A Salesforce Surveys flow that lets you associate survey questions with different stages in customer lifecycles. This value is available in API version 49.0 and later and only when the Customer Lifecycle Designer license is enabled. CustomEvent—A process that is invoked when it receives a platform event message. In the UI, it’s an event process. This value is available in API version 41.0 and later. DataCaptureFlow— In the UI, Data Capture flows configure the Form tab in the Field Service mobile app. When the Data Capture flow is launched, its Flow metadata is publicly available in JavaScript format. This value is available in API version 62.0 and later. DcvrFrameworkDataCaptureFlow—A screen flow that presents assessment questions from Discovery Framework. Launches when invoked by a user on a mobile device. This type of flow collects or displays information, requires user interaction, and works offline or online. This value is available in API version 62.0 and later. EvaluationFlow—A flow for evaluating custom entry and exit conditions in an orchestration. Uses the isOrchestrationConditionMet output variable and discards values from any other output variables. This value is available in API version 54.0 and later. FieldServiceMobile—A flow for the Field Service mobile app. This value is available in API version 39.0 and later. FieldServiceWeb—A flow for embedded Appointment Booking. Its UI label is Field Service Embedded Flow. This value is available in API version 41.0 and later. Flow—A flow that requires user interaction because it contains one or more screens or local actions, choices, or dynamic choices. In the UI and Salesforce Help, it’s a screen flow. Screen flows can be launched from the UI, such as with a flow action, Lightning page, or web tab. FSCLending—A flow for Financial Services Cloud Mortgage. This value is available in API version 46.0 and later. IdentityUserRegistrationFlow—A flow to handle user registration and updates for single sign-on with the authentication provider framework. Available in API version 64.0 and later. IndicatorResultFlow—A flow for Outcome Management that calculates and creates indicator results for a selected indicator performance period. This value is available with the Outcome Management license in API version 60.0 and later. IndividualObjectLinkingFlow—A flow that associates individuals with interactions such as voice calls, messaging sessions, or case-related emails. This value is available in API version 58.0 and later. InvocableProcess—A process that another process or the Invocable Actions resource in REST API invokes. This value is available in API version 38.0 and later. Journey—An audience-driven flow for Marketing Cloud. This value is available in API version 57.0 and later. LoginFlow—A flow for login. This value is available in API version 51.0 and later. LoyaltyManagementFlow—A flow for the Loyalty Management app that’s invokable by loyalty program processes. This value is available in API version 54.0 and later. Orchestrator—An orchestration that organizes flows into groups of steps contained in a series of stages. This value is available in API version 53.0 and later. PromptFlow—A flow for Prompt Builder. Pass data between Prompt Builder and the flow. This value is available in API version 60.0 and later. RecommendationStrategy—Build recommendations for your users. A recommendation launches its assigned flow. This value is available in API version 54.0 and later. See Flow Builder Strategies. RoutingFlow—A flow for Salesforce Omni-Channel routing and other business logic. This value is available in API version 52.0 and later. Survey—A flow for Salesforce Surveys. From the UI, this type of flow is created in Survey Builder. This value is available in API version 42.0 and later. SurveyEnrich—A Salesforce Surveys flow that uses the Survey Data Mapper. From the UI, this type of flow is created in the Survey Builder and requires an associated survey flow type. This value is available in API version 49.0 or later and only when the Customer Lifecycle Designer license is enabled. Workflow—A process that is invoked when a record is created or edited. In the UI and Salesforce Help, it’s a record change process. Across flow versions, you can change the type only from Flow to AutoLaunchedFlow or vice versa. Before you change the flow type, make sure that the flow contains only the elements, resources, and functionality that the new flow type supports. These values are reserved for future or Salesforce internal use. ActionCadenceFlow ActionPlan AppProcess ApprovalWorkflow CartAsyncFlow DigitalForm JourneyBuilderIntegration LoginFlow ManagedContentFlow OrchestrationFlow SalesEntryExperienceFlow TransactionSecurityFlow UserProvisioningFlow This field is available in API version 31.0 and later. |
| recordCreates | FlowRecordCreate[] | An array of nodes for creating records in the database. |
| recordDeletes | FlowRecordDelete[] | An array of nodes for deleting records in the database. |
| recordLookups | FlowRecordLookup[] | An array of nodes for looking up records in the database. |
| recordRollbacks | FlowRecordRollback[] | An array of nodes for rolling back transactions in the screen flow. This field is available in API version 52.0 and later. |
| recordUpdates | FlowRecordUpdate[] | An array of nodes for updating records in the database. |
| runInMode | FlowRunInMode (enumeration of type string) | The context that the flow runs in. Valid values are: DefaultMode—How the flow is launched determines whether the flow runs in user context or in system context. In the UI, this value appears as User or System Context—Depends on How Flow is Launched. SystemModeWithSharing—The flow respects org-wide default settings, role hierarchies, sharing rules, manual sharing, teams, and territories. The flow doesn’t respect object permissions, field-level access, or other permissions of the running user. In the UI, this value appears as System Context with Sharing—Enforces Record-Level Access. SystemModeWithoutSharing—The flow can access all data. In the UI, this value appears as System Context without Sharing—Access All Data. This value is available in API version 49.0 and later. This field is available in API version 48.0 and later. |
| screens | FlowScreen[] | An array of screen nodes. |
| segment | string | Reserved for future use. |
| stages | FlowStage[] | An array of stage resources that you can use throughout the flow. This field is available in API version 42.0 and later. |
| start | FlowStart[] | The flow’s Start element, which specifies how and when the flow starts. This field is available in API version 47.0 and later. |
| startElementReference | string | Specifies which node or element is the starting point in the flow.This field isn’t used in flows created or saved in Flow Builder in Winter ’20 and later. Those flows use the start field instead to specify how the flow starts. |
| status | FlowVersionStatus (enumeration of type string) | The activation status of the flow. Valid values are: Active Draft—In the UI, this status appears as Inactive. Obsolete—In the UI, this status appears as Inactive. InvalidDraft—In the UI, this status appears as Draft. UnderReview—In the UI, this status appears as Under Review. |
| steps | FlowStep[] | An array of step nodes. |
| subflows | FlowSubflow[] | An array of subflows. This field is available in API version 25.0 and later. |
| textTemplates | FlowTextTemplate[] | An array of text templates. |
| timeZoneSidKey | string | The ID that defines the time zone in which the flow runs. This field is available in API version 56.0 and later. |
| transforms | FlowTransform[] | An array of data transformations. This field is available in API version 59.0 and later. |
| triggerOrder | int | The run order of a record-triggered flow, from 1 to 2,000. See Guidelines for Defining the Run Order of Record-Triggered Flows for an Object in Salesforce Help. This field is available in API version 54.0 and later. |
| variables | FlowVariable[] | An array of variable definitions. |
| waits | FlowWait[] | An array of wait nodes. This field is available in API version 32.0 and later. |

## FlowBaseElement

Base class for all flow elements that require contextual information in metadata values. This class is an abstract class. FlowBaseElement is available in API version 32.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| processMetadataValues | FlowMetadataValue[] | Contextual information for the element. |

## FlowCustomProperty

Defines the name and value of a custom property in a flow. This metadata type is available in API version 63.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. Unique name for the custom property associated with the flow. |
| value | FlowElementReferenceOrValue | Defines the value of the custom property associated with the flow. When the FlowCustomProperty’s name is set to ScreenProgressIndicator, valid values are: “Location":"Top","Type":"Simple” "Location":"Footer","Type":"Simple" "Location":"Top","Type":"Path” |

## FlowConnector

Connectors determine the order in which the nodes of the flow are executed. A connector defines and links to the subsequent node. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| isGoTo | boolean | Make the connector a Go To Connector by setting this value to true. The default value is false. This value is available in API version 53.0 and later. See Flow Connectors. |
| targetReference | string | Required. Which node to execute after completing the current node. |

## FlowConstant

A constant resource defines a fixed value that can be used throughout your flow. It extends FlowElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| dataType | FlowDataType (enumeration of type string) | Required. Valid types are: Currency Date Number String Boolean Time |
| value | FlowElementReferenceOrValue | Default value of the constant. This field can’t have merge fields, nor can it reference another resource besides $GlobalConstant.EmptyString. |

## FlowAttribute

Defines an attribute that's shared across multiple Flow metadata subtypes. Available in API version 65.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| value | string | The value of the flow attribute. |
| type | FlowAttributeType (enumeration of type string) | Specifies the type of the flow attribute value. Valid values are: LlmDescription LlmPrompt |

## FlowElement

Base class for all flow elements. This class is an abstract class. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| description | string | Description of the flow element. |
| name | string | Unique name of the flow element. |

## FlowElementReferenceOrValue

Defines a reference to an existing element or a particular value that you specify. Make sure that you specify only one of the fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexValue | string | Use this field to specify a JSON response value of an Apex-defined record. Use this field only for FlowScreenFieldInputParameter and FlowActionCallInputParameter. If you want to specify a different data type or element reference, don’t use this field. |
| booleanValue | boolean | Use this field to specify a boolean value. If you want to specify a different data type or element reference, don’t use this field. |
| complexValue | string | When complexValueType is specified, use this field to specify flow resources and fields in the data structure. Use these fields to describe the data structure: fieldReference—The list of field API names. objectType—The object type, sObject or Apex. type—The API name of the sObject or Apex class. elementReference—The API name of the flow resource that contains the list of fields specified in fieldReference. This field is available in API version 63.0 and later. |
| complexValueType | FlowComplexValueType (enumeration of type string) | Use this field to specify the type of data structure to reference. Valid values are: ComplexObjectFieldDetails—Use when referencing a field and need the label and type in addition to the API name. JoinDefinition—When InnerJoin is specified in transformType, indicates flow resources for source and target collections, join keys, selected fields to join. and field mappings in a join transformation. JoinDefinition isn't a valid value for FlowInlineTransform. FieldReference—Use this field to define the flow resource and its fields referenced in the flow. This field is available in API version 63.0 and later. Use complexValue to specify the data structure. |
| dateTimeValue | dateTime | Use this field to specify a dateTime value. If you want to specify a different data type or element reference, don’t use this field. This field is available in API version 30.0 and later. |
| dateValue | date | Use this field to specify a date value. If you want to specify a different data type or element reference, don’t use this field. |
| elementReference | string | Use this field to specify the name of an existing flow resource. If you want to specify a value instead of an element reference, don’t use this field. |
| formulaDataType | FlowDataType (enumeration of type string) | Use this field to specify the formula result’s data type of the transformed data. Corresponds to the target data field in Flow Builder. This field requires the formulaExpression field. This field is available in API version 59.0 and later. See FlowTransformValid values are: Apex Boolean Currency Date DateTime Number String sObject—This value corresponds to a record variable. Time |
| formulaExpression | string | Use this field to specify the formula expression that transforms the data in the flow. In Flow Builder, it corresponds to the target data field in the Transform element. This field requires the formulaDataType field. This field is available in API version 59.0 and later. See FlowTransform. |
| numberValue | double | Use this field to specify a double value. If you want to specify a different data type or element reference, don’t use this field. |
| setupReference | string | Use this field to specify the name of an existing setup reference. Required for Omni-Channel elements. If you want to specify a value instead of a setup reference, don’t use this field. Required when setupReferenceType is specified. |
| setupReferenceType | string | Use this field to specify the type of setup reference. Required when setupReference is specified. |
| sobjectValue | string | Use this field to specify a JSON response value of an sObject record. Use this field only for FlowScreenFieldInputParameter and FlowActionCallInputParameter. If you want to specify a different data type or element reference, don’t use this field. |
| stringValue | string | Use this field to specify a string value. If you want to specify a different data type or element reference, don’t use this field.When the FlowMetadataValue's name field is set to SendNoApproverEmails, valid values are true or false and are case-insensitive. When the FlowMetadataValue's name field is set to BuilderType or OriginalBuilderType, the valid value is LightningFlowBuilder. The value is reserved for internal use. |
| transform | FlowInlineTransform | Use this field to specify a value for an inline data transformation. This field is available in API version 62.0 and later. |
| transformValueReference | string | Reserved for future use. |

## FlowFormula

Calculates a value using functions and elements in the flow. It extends FlowElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| dataType | FlowDataType (enumeration of type string) | The data type for the formula. Valid values are: Boolean Currency Date DateTime Number String Time dataType defaults to Number if it isn’t defined in a formula. This field is available in API version 31.0 and later. |
| expression | string | Required. Salesforce formula expression. The return value must match the data type. For API version 30.0 and earlier, the return value must be numeric. |
| scale | int | Scale of the return value, specifically, the number of digits to the right of the decimal point. Available only when the data type is Number or Currency. Corresponds to the Decimal Places field in Flow Builder. |

## FlowIcon

Allows a resource to include an icon. This metadata type is available in API version 64.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| iconName | String | The name of the selected Salesforce Lightning Design System icon. This field is available in API version 64.0 and later. |

## FlowMetadataValue

Defines contextual information that can be passed between elements in a flow. Flow metadata values can be used in an application that produces or consumes flows. FlowMetadataValue is available in API version 31.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. Name for the metadata value. This name doesn’t need to be unique across all elements. To specify that a flow approval process send no email notifications to approvers, use SendNoApproverEmails . |
| value | FlowElementReferenceOrValue | Reference or value for the metadata value. |

## FlowNode

A node is a type of element that’s visible in the flow diagram. It extends FlowElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| elementSubtype | FlowElementSubtype (enumeration of type string) | Reserved for internal use. |
| label | string | Name of the node. This non-unique label is different from the unique name of the node, which is inherited from FlowElement. |
| locationX | int | Required. Horizontal location of the node, in pixels from the left. In API version 64.0 and later, if a flow is saved in auto-layout, this field is set to 0. |
| locationY | int | Required. Vertical location of the node, in pixels from the top. In API version 64.0 and later, if a flow is saved in auto-layout, this field is set to 0. |

## FlowTextTemplate

Defines a text template that can be used throughout the flow. It extends FlowElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| isViewedAsPlainText | boolean | If set to true, the flow resource remembers the View as Plain Text setting used for the text template after the flow resource is saved. If set to false, the flow resource uses the View as Rich Text setting.The default value is false. |
| text | string | Actual text of the template. Supports merge fields. |

## FlowValueMappingType

Defines the specific data transformation type that converts the value of a source action output parameter in valueMappingKey before assigning the result to the target output parameter in valueMappingTarget.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| FirstEntry | string | This configuration extracts the first item's object in valueMappingKey and assigns it to the target output parameter in valueMappingTarget. |

## FlowVariable

With variables, creates updatable values to use in the flow. FlowVariable extends FlowElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexClass | string | The Apex class of this variable if its data type is Apex. This field is available in API version 46.0 and later. |
| dataType | FlowDataType (enumeration of type string) | Required. Valid types are: Apex—This value is available in API version 46.0 and later. Boolean Currency Date DateTime—This value is available in API version 30.0 and later. Number Multipicklist—This value is available in API version 34.0 and later. Picklist—This value is available in API version 34.0 and later. String sObject—This value corresponds to a record variable. Time |
| isCollection | boolean | Indicates whether the variable is a collection of values. This field is available in API version 30.0 and later. In API version 32.0 and later, a collection variable can be of any data type.The default value is False. |
| isInput | boolean | Indicates whether the variable can be set at the start of the flow using URL parameters, Visualforce controllers, or subflow inputs. This field is available in API version 25.0 and later.Default value: False for a variable created in API version 25.0 and later or in the Flow Builder in Summer ’12 and later. True for a variable created in API version 24.0 or in Flow Builder in Spring ’12 and earlier. Disabling input or output access for an existing variable can break the functionality of applications and pages that call the flow and access the variable. For example, you can access variables from URL parameters, processes, and other flows. |
| isOutput | boolean | Indicates whether the variable’s value can be accessed from Visualforce controllers and other flows. This field is available in API version 25.0 and later.Default value: False for a variable created in API version 25.0 and later or in the Flow Builder in Summer ’12 and later. True for a variable created in API version 24.0 or in Flow Builder in Spring ’12 and earlier. Disabling input or output access for an existing variable can break the functionality of applications and pages that call the flow and access the variable. For example, you can access variables from URL parameters, processes, and other flows. |
| objectType | string | Object type of this variable if its data type is sObject. |
| scale | int | Controls the number of digits to the right of the decimal point up to 17 places. If you leave this field blank or set it to zero, only whole numbers appear when your flow runs. Corresponds to the Decimal Places field in Flow Builder. |
| value | FlowElementReferenceOrValue | Default value of this variable.Default values aren’t supported if the variable’s data type is Picklist or Multipicklist. |
