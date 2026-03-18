# Flow — Actions, Subflows & Transforms

## FlowActionCall

Defines a call to an action from the flow. It extends FlowNode. This metadata type is available in API version 31.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| actionCallPaths | ActionCallPath[] | Reserved for future use. |
| actionName | string | Required. Name for the action. Must be unique across actions with the same actionType. |
| actionType | InvocableActionType (enumeration of type string) | Required. See InvocableActionType. |
| connector | FlowConnector | Specifies which node to execute after this action call. |
| dataTypeMappings | FlowDataTypeMapping[] | An array of data type mappings for input and output values that have the generic sObject data type. This field is available in API version 48.0 and later. |
| einsteinDecidePath | string | Reserved for future use. |
| faultConnector | FlowConnector | Specifies which node to execute if the action call results in an error. |
| flowTransactionModel | FlowTransactionModel (enumeration of type string) | Required. Specifies the transactional model for flows that execute invocable actions. Valid values are: Automatic— Creates a transaction if the invocable action supports it and there’s pending DML. CurrentTransaction— Keeps the invocable action running in the same transaction. NewTransaction— Creates a transaction before the invocable action is executed. This field is available in API version 51.0 and later. |
| inputParameters | FlowActionCallInputParameter[] | An array of input parameters from the flow to the action. |
| isWaitUntilCompleted | boolean | Specifies whether to pause the flow until the action is completed. This field is available in API version 61.0 and later. |
| nameSegment | string | Specifies the name of the versioned action. Supported only when nameSegment is specified. This field is available in API version 58.0 to 61.0. This field is deprecated in API version 62.0 and later. |
| offset | int | Specify the number of months, days, hours, or minutes to pause the flow while it waits for the action to be completed. This field is available in API version 61.0 and later. |
| offsetUnit | FlowScheduledPathOffsetUnit (enumeration of type string) | Specify the time unit used to wait when the async action executes. Possible values are: Months Days Hours Minutes This field is available in API version 61.0 and later. |
| outputParameters | FlowActionCallOutputParameter[] | An array of output parameters from the action to the flow. |
| storeOutputAutomatically | boolean | Indicates whether the action’s output parameters are automatically available in the flow without creating any variables. When the value is true, you can reference an output parameter by specifying the API name of the Action element in the flow. The default value is false. When the value is false, create variables manually to store output values from the action. This field is available in API version 48.0 and later. |
| timeoutConnector | FlowConnector | Specifies which node to execute if an async action execution is timed out. This field is available in API version 62.0 and later. |
| versionSegment | int | Specifies the version of the versioned action. By default, the value is 1. Supported only when versionSegment is specified. This field is available in API version 58.0 to 61.0. This field is deprecated in API version 62.0 and later. |
| versionString | string | Reserved for future use. |

## FlowActionCallInputParameter

Defines an input parameter from the flow to the action. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 31.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. Unique name for the input parameter. |
| value | FlowElementReferenceOrValue | Defines the value of the input parameter. |

## FlowActionCallOutputParameter

Defines an output parameter from the action to the flow. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 31.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Required. Specifies the variable to which you want to assign the output parameter value. |
| name | string | Required. Unique name for the output parameter. |

## FlowActionCallPath

A path determines which node of the flow is executed after the Einstein Decision element. A path defines and links to the subsequent node. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 63.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| connector | FlowConnector | Required. Which node to execute after completing the current node. |
| pathName | string | Required. Unique name for the path. |

## FlowApexPluginCall

Defines a call to an Apex plug-in from the flow. It extends FlowNode and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexClass | string | Required. The name of the Apex class. |
| connector | FlowConnector | Specifies which node to execute after this Apex plug-in call. |
| faultConnector | FlowConnector | Specifies which node to execute if the Apex plug-in call results in an error. |
| inputParameters | FlowApexPluginCallInputParameter[] | An array of input parameters from the flow to the Apex plug-in. |
| outputParameters | FlowApexPluginCallOutputParameter[] | An array of output parameters from the Apex plug-in to the flow. |

## FlowApexPluginCallInputParameter

Defines an input parameter from the flow to the Apex plug-in. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. Unique name for the input parameter. |
| value | FlowElementReferenceOrValue | Defines the value of the input parameter. |

## FlowApexPluginCallOutputParameter

Defines an output parameter from the Apex plug-in to the flow. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Required. Specifies the variable to which you want to assign the output parameter value. |
| name | string | Required. Unique name for the output parameter. |

## FlowCollectionProcessor

Defines a node that processes the contents of a collection, depending on the collectionProcessorType. FlowCollectionProcessor is available in API version 50.0 and later. FlowCollectionProcessor extends FlowNode and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignNextValueToReference | string | The name of the variable that’s assigned to the next value of the collection. |
| collectionProcessorType | FlowCollectionProcessorType | The type of the collection processor. Valid values are: SortCollectionProcessor—This value is available in API version 50.0 and later. RecommendationMapCollectionProcessor— This value is available in API version 53.0 and later. FilterCollectionProcessor— This value is available in API version 53.0 and later. |
| collectionReference | string | The collection being sorted, filtered, or assigned to recommendations. |
| conditionLogic | string | Defines how the filtering conditions are evaluated. Valid values are: And Or Custom logic, such as (1 AND (2 OR 3)) Formula |
| conditions | FlowCondition[] | An array of conditions for the input collection. |
| connector | FlowConnector | Specifies which node to execute after processing the collection. |
| formula | string | The formula expression that filters the input collection. If the formula evaluates to true, the record is added to the output collection. |
| limit | int | The maximum number of records to include in the generated collection. There’s no default value. All items of the collection are kept if it’s greater than the size of the collection. If sortField and sortOrder are also specified, the records are sorted before the limit takes effect. This field is available in API version 51.0 and later. This field is nillable in API version 51.0 and later. |
| mapItems | FlowCollectionMapItem[] | The rules to map each field of the collection variable. |
| outputSObjectType | string | The sObject type of the output collection. |
| sortOptions | FlowCollectionSortOption[] | An array of options to sort the items in the collection. This field is available in API version 51.0 and later. |

## FlowCollectionSortOption

Sets the sorting field, sort order, and placement of empty or null values in the sorted collection. This metadata type is available in API version 51.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| doesPutEmptyStringAndNullFirst | boolean | Place empty or null values first in the sorted list by setting this value to true. The default value is false. |
| sortField | string | Determines the sorting of records that meet the filter criteria. Required for record collections and collections of Apex-defined variables. If the collection is a primitive data type, such as a list of string or integer values, sortField isn’t supported. |
| sortOrder | SortOrder (enumeration of type string) | The order that the collection is sorted in. Valid values are: Asc—Ascending Desc—Descending |

## FlowCollectionMapItem

Defines the rule to assign a value to the field reference. This metadata type is available in API version 51.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToFieldReference | string | Required. Specifies the reference to the field to which the specified operator is applied. |
| operator | FlowAssignmentOperator (enumeration of type string) | Required. Applies to the variable reference in the assignToFieldReference field. |
| value | FlowElementReferenceOrValue | Required. Defines the value that the operator applies to the variable reference in the assignToFieldReference field. |

## FlowDataTypeMapping

This data type mapping defines the specific sObject data type for input and out values that have the generic sObject data type. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 48.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexClass | string | The name of the Apex class. This field is available in API version 61.0 and later. |
| typeName | string | Required. API name of the input or output variable. The T__ prefix is required for input variables. The U__ prefix is required for output variables. For example, T__inputCollection represents the API name of the input variable inputCollection. |
| typeValue | string | API name of the specific sObject data type that this value maps to. For example, Account. |

## FlowStep

Steps function as placeholders when you’re building a flow. It extends FlowNode and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| connectors | FlowConnector[] | Specifies which node to execute after the step node. |

## FlowSubflow

A subflow element references another flow, which it calls at run time. The flow that contains the subflow element is referred to as the parent flow. FlowSubflow extends FlowNode and inherits all its fields. It’s available in API version 25.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| connector | FlowConnector | Specifies which node to execute after the subflow. |
| flowName | string | References the flow to call at runtime. The value must be an API name of a flow and it can’t contain an appended hyphen and version number. |
| inputAssignments | FlowSubflowInputAssignment[] | An array of input variable assignments that are set at the start of the flow. |
| outputAssignments | FlowSubflowOutputAssignment[] | An array of output variable assignments that are set at the end of the flow. |
| storeOutputAutomatically | boolean | Indicates whether the subflow’s output parameters are automatically available in the flow without creating any variables. When the value is true, you can reference an output parameter by specifying the API name of the subflow in the flow. When the value is false, create variables manually to store output values from the subflow. The default value is false.This field is available in API version 49.0 and later. |

## FlowSubflowInputAssignment

Assigns an element or value from the parent flow to a variable in the referenced flow. Input assignments occur when the subflow calls the referenced flow. It extends FlowBaseElement and inherits all its fields. It’s available in API version 25.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. Unique name for the variable in the referenced flow. |
| value | FlowElementReferenceOrValue | Defines the value to assign to the variable. |

## FlowSubflowOutputAssignment

Assigns the value of a variable from the referenced flow to a variable in the parent flow. Output assignments occur when the referenced flow is finished running. It extends FlowBaseElement and inherits all its fields. It’s available in API version 25.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Unique name for the variable in the parent flow. |
| name | string | Required. Unique name for the variable in the referenced flow. |

## FlowTransform

Defines a node that can dynamically transform the value of source data to target data in the flow. It extends FlowNode and inherits all of its fields. This metadata type is available in API version 59.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexClass | string | The Apex class of the target data after transformation if its data type is Apex. |
| connector | FlowConnector[] | Specifies which node to execute after this data transformation. |
| dataType | FlowDataType (enumeration of type string) | Required. Specifies the data type of the transformed data. In Flow Builder, it corresponds to the target data in the Transform element. Valid types are: Apex Boolean—This value is available in API version 62.0. Currency—This value is available in API version 62.0. Date—This value is available in API version 62.0. DateTime—This value is available in API version 62.0. Number—This value is available in API version 62.0. String—This value is available in API version 62.0. sObject—This value corresponds to a record variable. Time |
| isCollection | boolean | Indicates whether the variable is a collection of values. The default value is false. |
| objectType | string | Object type of this variable resource if its data type is sObject. |
| scale | int | Controls the number of digits to the right of the decimal point up to 17 places. If you leave this field blank or set it to zero, only whole numbers appear when your flow runs. Corresponds to the Decimal Places field in Flow Builder. |
| storeOutputAutomatically | boolean | Reserved for future use. |
| transformValues | FlowTransformValue[] | An array of values for data transformation |

## FlowTransformValue

Defines the values for transforming specific data in the flow. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 59.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| transformValueActions | FlowTransformValueAction[] | An array of actions for data transformation |
| transformValueName | string | Reserved for future use. |
| transformValueLabel | string | Reserved for future use. |
| transformValueDescription | string | Reserved for future use. |

## FlowTransformValueAction

Defines the data and actions to transform in the flow. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 59.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| actionName | string | Reserved for future use. |
| actionType | InvocableActionType (enumeration of type string) | Reserved for future use. |
| actionVersionString | string | Reserved for future use. |
| assignToReference | string | Reserved for future use. |
| inputParameters | FlowTransformValueActionInputParameter[] | An array of input parameters for data transformation. This field is available in API version 60.0 and later. |
| outputFieldApiName | string | The API name of the field for transformed data in a data transformation mapping. In Flow Builder, it corresponds to the target data field in the Transform element. |
| transformType | FlowTransformValueActionType (enumeration of type string) | Required. The type of transformation from source data to target data. Valid types are: Count—Calculates the number of items in a source collection. GetItemByIndex—Reserved for future use. InnerJoin—Joins selected data from two source collections that are stored in a target collection in a flow. This value is available in API version 63.0 and later. See complexValueType on FlowElementReferenceOrValue. InnerJoin isn't a valid value for FlowInlineTransform. InvocableAction—Reserved for future use. Map—Specifies a mapping between the datasets in flows. In Flow Builder, it corresponds to the mapping between source data fields and target data fields. Sum—Adds the numeric values of a field on each item in a collection. |
| value | FlowElementReferenceOrValue | Defines the value of the transformed data. In Flow Builder, the value of this field corresponds to the result of the target data field in the Transform element. |

## FlowTransformValueActionInputParameter

Defines the input parameters of the source data for data transformation. This metadata type is available in API version 60.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | A key that specifies the configuration of input parameters for this data transformation when transformType is set to Sum or Count. Valid values are: aggregationField—The field on each item in a source collection that’s used to calculate the transformed value. aggregationValues—The source collection that’s used to calculate the transformed value. |
| value | FlowElementReferenceOrValue | Defines the value of the specified key in name. |
