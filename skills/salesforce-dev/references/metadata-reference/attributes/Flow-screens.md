# Flow — Screen Elements

## FlowChoice

A choice resource is a standalone choice option that you can reference or reuse throughout the flow. It extends FlowElement and inherits all of its fields. See Salesforce Help: Flow Resource: Choice.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| choiceIcon | FlowIcon | The icon to display for the choice in the screen. This field is available in API version 64.0 and later. |
| choiceText | string | Required. Choice label to display in the screen. |
| dataType | FlowDataType (enumeration of type string) | Required. Valid types are: Currency Date Number String Boolean Time |
| userInput | FlowChoiceUserInput | Enables the choice to allow user input when the choice is selected. Not supported for choices in multi-select fields. |
| value | FlowElementReferenceOrValue | Actual value that’s used during flow execution, for example, in assignments, calls to Apex plug-ins, and record elements. If null, this choice always has the value of null. |

## FlowChoiceUserInput

Allows the choice to include a user input field that appears when the user selects a choice. User input isn’t supported for choices in multi-select fields. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| isRequired | boolean | Indicates whether users are required to enter something into the field when they select the choice. |
| promptText | string | Text that’s displayed to prompt the user for input at runtime. Supports merge fields. |
| validationRule | FlowInputValidationRule | A rule used at runtime to validate the user input. |

## FlowCustomError

Defines a custom error element to roll back a change that triggered a flow and inform the user exactly what caused the error. It extends FlowNode and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| description | string | Describes the error message. |
| connector | FlowConnector | Required. Which node to execute after completing the current node. |
| customErrorMessages | FlowCustomErrorMessage[] | An array of custom error messages. |

## FlowCustomErrorMessage

Defines a custom error message for a custom error element. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| errorMessage | string | Required. Specifies the custom error message. |
| fieldSelection | string | References the erroneous field that’s associated with the custom error message. |
| isFieldError | boolean | Required. When this field is set to true, indicates that the custom error message displays inline on a field. When it is set to false, it displays in a window on a record page. The default value is false. |

## FlowDynamicChoiceSet

Retrieves data or metadata from an object and dynamically generates a set of choices at run time. It extends FlowElement and inherits all its fields. Depending on the fields that are set, this element represents a record choice or a picklist choice.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| collectionReference | string | The collection that’s used to generate choices. This field is available in API version 54.0 and later. |
| dataType | FlowDataType (enumeration of type string) | Required. Valid types are: Boolean Currency Date Multipicklist—Picklist choices only Number Picklist—Picklist choices only Record String Time Picklist and Multipicklist are available in API version 35.0 and later. Record is available in API version 54.0 and later. |
| displayField | string | Required for record choices. Specifies the object field. The values of the object field are displayed to the user as choice labels for selecting a record.For example, for an account, if you want the dynamically generated choices to be displayed as the account names from the records that are retrieved from the database, specify Name in displayField. Not supported for picklist choices. Picklist choices always display the labels for the retrieved picklist values. |
| filters | FlowRecordFilter[] | An array of filters to apply to the records retrieved from the database. For example, filter accounts to include only the accounts that were created in the past three months.Not supported for picklist choices. |
| limit | int | Maximum number of choices to include in the generated set of choices. Maximum and default: 200.If sortField and sortOrder are also specified, the records are sorted before the limit takes effect. This field is available in API version 25.0 and later. This field is nillable in API version 45.0 and later. |
| object | string | Required for record choices. The object whose fields you want to retrieve from the database and use to generate the set of choices. For example, use “Account” to dynamically generate choices from the information in account records in the database.Not supported for picklist choices. |
| outputAssignments | FlowOutputFieldAssignment[] | An array that assigns fields from the user-selected record to variables that can be used elsewhere in the flow. For example, when the user selects an account name from the dynamically generated list of choice options, outputAssignments can assign the ID and AnnualRevenue from the user-selected account to variables that you specify.Not supported for picklist choices. |
| picklistField | string | Required for picklist choices. The field whose available values you want to retrieve from the database and use to generate the picklist choice. For example, use “Industry” to dynamically generate one choice for each available value on the Industry picklist field. Not supported for record choices. This field is available in API version 35.0 and later. |
| picklistObject | string | Required for picklist choices. The object whose field metadata you want to retrieve from the database and use to generate the picklist choice. For example, use “Account” to dynamically generate choices from a picklist field on the Account object.Not supported for record choices. This field is available in API version 35.0 and later. |
| sortField | string | Field that’s used for sorting records that meet the filter criteria. If this field isn’t specified, the returned records aren’t sorted.You can only sort records by fields that have the Sort API field property, as specified in SOAP API. Not supported for picklist choices. This field is available in API version 25.0 and later. |
| sortOrder | SortOrder (enumeration of type string) | Order in which to sort the records. If this field isn’t specified, then the results aren’t sorted.Valid values are: Asc—Ascending Desc—Descending Not supported for picklist choices. This field is available in API version 25.0 and later. |
| valueField | string | Stored value for the choice, which can differ from what is displayed to the user as the choice options (displayField). For example, the displayField could be the account “Name” while the valueField is the account “Id.”Not supported for picklist choices. Picklist choices always store the API value for the retrieved picklist values. |

## FlowInlineTransform

Specifies how to transform source data to target data in an Action element within a flow. This metadata type is available in API version 62.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| apexClass | string | The Apex class of the target data after transformation if its data type is Apex. |
| dataType | FlowDataType (enumeration of type string) | Required. Specifies the data type of the transformed data. In Flow Builder, it corresponds to the target data. Valid types are: Apex Boolean Currency Date DateTime Multipicklist Number Picklist sObject—This value corresponds to a record variable. String Time |
| isCollection | boolean | Indicates whether the variable is a collection of values. The default value is false. |
| transformValues | FlowTransformValue[] | An array of values for data transformation. |

## FlowInputValidationRule

Validation rules verify that the data entered by the user meets the specified requirements. If the validation rule evaluates to false, then the specified error message is displayed.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| errorMessage | string | Required. The error message to display when formulaExpression is false. |
| formulaExpression | string | Required. A formula that’s used to validate the user input. |

## FlowScreen

Screens capture information from users and display information to users. It extends FlowNode and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| actions | FlowScreenAction[] | An array of screen actions.This field is available in API version 59.0 and later. |
| allowBack | boolean | Indicates whether to show (true) or hide (false) the Previous button on the screen at runtime. When true, the Previous button appears only if the user visited a previous screen in the flow path and if showFooter for the screen is set to true. Set this field to false when revisiting the previous screen triggers an action that you don’t want repeated, such as a credit card transaction.This field is available in API version 26.0 and later. Default: true You can set either allowBack or allowFinish to false, but not both. |
| allowFinish | boolean | Indicates whether to show (true) or hide (false) the Finish button on the screen at runtime. When true, the Finish button appears only if the screen element is the end of a flow path, and if showFooter for the screen is set to true. The default value is true. Set to false if user is required to go back to a previous screen to continue or complete the flow. For example, don’t include a Finish button on a screen that tells the user to go back and make corrections on a previous screen. You can set allowBack or allowFinish to false, but not both. This field is available in API version 26.0 and later. |
| allowPause | boolean | Indicates whether to show (true) or hide (false) the Pause button on the screen at runtime. The default value is true. A flow screen displays the Pause button if all these conditions are true. Let users pause flows is enabled in the organization’s process automation settings. allowPause for the screen is set to true. If the flow is embedded in a Visualforce page, the <flow:interview> component has its showAllowPause attribute set to true. The showFooter field for the screen is set to true. This field is available in API version 33.0 and later. |
| backButtonLabel | string | A label for the Back button. |
| connector | FlowConnector | Specifies which node to execute after the screen node. |
| fields | FlowScreenField[] | An array of fields to display on the screen. |
| helpText | string | Text that appears if the end user clicks a link for help text. Supports merge fields in API version 26.0 and later. |
| nextOrFinishButtonLabel | string | A label for the Next or Finish button. |
| pauseButtonLabel | string | A label for the Pause button. |
| pausedText | string | A confirmation message that appears when an end user clicks Pause.This field is available in API version 33.0 and later. |
| rules |  | Reserved for future use. |
| showFooter | boolean | Indicates whether to show (true) or hide (false) the screen’s footer at Lightning runtime. Classic runtime isn’t supported. The default value is true. The footer includes navigation actions for the screen. If showFooter is hidden, use Lightning components on the screen to show navigation actions. This field is available in API version 42.0 and later. |
| showHeader | boolean | Indicates whether to show (true) or hide (false) the screen’s header at Lightning runtime. Classic runtime isn’t supported. The default value is true. The header includes access to help text for the screen. If showHeader is hidden, use Lightning components on the screen to show help text. This field is available in API version 42.0 and later. |
| stageReference | FlowElementReferenceOrValue | The API name of the stage resource that’s associated with the screen. |
| styleSettings | FlowScreenStyleSetting[] | An array of flow screen style settings to customize the visual experience of a screen at run time. This field is available in API version 66.0 and later. |
| triggers | FlowScreenTrigger[] | An array of triggers configured for a flow screen field or a flow screen field attribute.This field is available in API version 59.0 and later. |

## FlowScreenAction

Defines an action that can be triggered by one or more flow screen components. This metadata type is available in API version 59.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| actionName | string | Required. The API name of the flow screen action. |
| actionType | InvocableActionType (enumeration of type string) | Required. The flow screen action type. Valid values are: flow—Invokes an autolaunched flow. |
| inputParameters | FlowScreenActionInputParameter[] | An array of input parameters from the flow to the flow screen action. |
| label | string | Requiired. The label of the flow screen action. |
| nameSegment | string | The API name of the flow screen action. |
| versionString | string | Specifies the version of the screen action to be invoked.This field is available in API version 63.0 and later. |

## FlowScreenActionInputParameter

Defines an iput parameter for a flow screen action. It extends FlowScreenFieldInputParameter and inherits all its fields. This metadata type is available in API version 59.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. Unique name of the input parameter of a flow screen action. |
| value | FlowElementReferenceOrValue | Defines the valueof an input parameter for a flow screen action. |

## FlowScreenField

Represents a screen component. FlowScreenField extends FlowElement and inherits all its fields. See Salesforce Help: Standard Flow Screen Components.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| choiceReferences | string[] | An array of references to FlowChoices or FlowDynamicChoiceSets. The resulting choice options appear in the order specified in this array, where the element at index 0 provides the top-most choice option. Supported for these types of screen components. RadioButtons DropdownBox MultiSelectCheckboxes MultiSelectPicklist Multi-select checkboxes and multi-select picklist fields are available in API version 26.0 and later. |
| dataType | FlowDataType (enumeration of type string) | Data type of the screen component. Only supported for the InputField, RadioButtons, and DropdownBox types of screen components. Valid data types are: Boolean Currency Date DateTime Number String Time Boolean input fields, which appear as checkbox fields at runtime, are available in API version 26.0 and later. Only the string data type is supported for multi-select checkboxes and multi-select picklist fields. Multi-select fields are available in API version 26.0 and later. Date/time input fields are available in API version 43.0 and later. |
| dataTypeMappings | FlowDataTypeMapping[] | Reserved for future use. |
| defaultSelectedChoiceReference | string | The name of the FlowChoice element to use as the default value for the screen component. Supported for these types of screen components. RadioButtons DropdownBox MultiSelectCheckboxes MultiSelectPicklist For DropdownBox field types only, if defaultSelectedChoiceReference is empty or null, the reference at index 0 of choiceReferences is used as the default value. You can specify only one FlowChoice element as the default value for multi-select checkboxes and multi-select picklist fields. Multi-select fields are available in API version 26.0 and later. |
| defaultValue | FlowElementReferenceOrValue | The value that is used by default when the screen component requires users to provide input. Only supported for InputField, LargeTextArea, and PasswordField. |
| extensionName | string | The name of the Lightning component to display. This field is available in API version 42.0 and later. |
| fields | FlowScreenField[] | An array of columns to display in a section, or an array of fields to display in a column. This field is available in API version 49.0 and later. |
| fieldText | string | Field label that is displayed on the screen. Supports merge fields. |
| fieldType | FlowScreenFieldType (enumeration of type string) | Required. The type of field to display on a flow screen. Valid values are: DisplayText InputField LargeTextArea PasswordField RadioButtons DropdownBox MultiSelectCheckboxes—This value is available in API version 26.0 and later. MultiSelectPicklist—This value is available in API version 26.0 and later. ComponentInstance—This value is available in API version 42.0 and later. ComponentChoice and ComponentInput—This value is available in API version 48.0 and later for the Survey processType value only. Region— Specifies that a screen field in a section is a column. This value is available in API version 51.0 and later. RegionContainer—Specifies that a screen field is a section. This value is available in API version 51.0 and later. ObjectProvided—Specifies that a screen field is a field from a Salesforce object. This value is available in API version 51.0 and later. At runtime, each multi-select field stores its field value as a concatenation of the user-selected choice values, separated by semicolons. Any semicolons in the selected choice values are removed when added to the multi-select field value. |
| helpText | string | Text that appears if the end user clicks the help icon () for the screen component. Supports merge fields in API version 26.0 and later. |
| inputParameters | FlowScreenFieldInputParameter[] | An array of input parameters. Supported only when fieldType is ComponentInstance. This field is available in API version 42.0 and later. |
| inputsOnNextNavToAssocScrn | FlowScreenFieldInputsRevisited (enumeration of type string) | Controls whether the flow remembers the input value if the user moves to any screen and then returns to the screen component. Valid values are: UseStoredValues—Uses values from when the user last visited this screen. ResetValues—Refreshes inputs to incorporate changes elsewhere in the flow. The default value is UseStoredValues. This property applies to screen components in API version 51.0 and later and to record fields on flow screens in API version 57.0 and later. |
| isRequired | boolean | Indicates whether the user must select a choice or provide input. Not supported for DisplayText or boolean inputField. |
| isVisible | boolean |  |
| objectFieldReference | string | Specifies the Salesforce object field for an ObjectProvided field. |
| outputParameters | FlowScreenFieldOutputParameter[] | An array of output parameters. Supported only when fieldType is ComponentInstance and when storeOutputAutomatically is false.This field is available in API version 42.0 and later. |
| regionContainerType | FlowRegionContainerType (enumeration of type string) | Stores information about a section component header. Possible values include: SectionWithHeader SectionWithoutHeader Available only when the component type is Section. This field is available in API version 55.0 and later. |
| scale | int | Controls the number of digits to the right of the decimal point up to 17 places. If you leave this field blank or set it to zero, only whole numbers appear when your flow runs. Available only when the data type is Number or Currency. Corresponds to the Decimal Places field in Flow Builder. |
| sourceTemplateApiName | string | The API name of the template specified by the provider. This field is available in API version 62.0 and later. |
| sourceTemplateProviderType | string | The API name of the source that provides the template. This field is available in API version 62.0 and later. |
| storeOutputAutomatically | boolean | Indicates whether the screen component’s output parameters are automatically available in the flow without creating any variables. When the value is true, you can reference an output parameter by specifying the name of the screen component and the output parameter, such as Mailing_Address.City.Supported only when fieldType is ComponentInstance. This field is available in API version 47.0 and later. |
| styleProperties | FlowScreenFieldStyleProperties | Specifies the style properties of a screen component. This field is available in API version 64.0 and later. |
| validationRule | FlowInputValidationRule | A rule that’s used to validate the user input when the screen component is of type InputField, LargeTextArea, or PasswordField. |
| visibilityRule | FlowVisibilityRule | A condition-based rule that’s used to render or hide the screen component.This field is available in API version 47.0 and later. |

## FlowScreenFieldInputParameter

Defines an input parameter from the flow to the extension. It extends FlowBaseElement and inherits all its fields. FlowScreenFieldInputParameter is available in API version 42.0.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. Unique name for the input parameter. |
| value | FlowElementReferenceOrValue | Defines the value of the input parameter. |

## FlowScreenFieldOutputParameter

Defines an output parameter from the extension to the flow. It extends FlowBaseElement and inherits all its fields. FlowScreenFieldOutputParameter is available in API version 42.0.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Required. Specifies the variable to which you want to assign the output parameter value. |
| name | string | Required. Unique name for the output parameter. |

## FlowScreenFieldStyleProperties

Defines how a screen component looks on a screen element at run time. This metadata type is available in API version 64.0 and later.

| Field Name | Description |
|------------|-------------|
| styleSettings | An array of flow screen style settings to customize the visual experience of a screen component at run time. This field is available in API version 66.0 and later. |
| width | The number of columns the width of the screen component fills up in a screen element's 12-column wide spatial grid. Valid values are numbers 1 through 12. |
| verticalAlignment | The vertical alignment of the screen component. Valid values are top, middle, bottom. |

## FlowScreenStyleSetting

A style setting for a flow screen or flow screen component. FlowScreenStyleSetting extends FlowBaseElement and inherits all its fields. FlowScreenStyleSetting is available in API version 66.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| propertyName | string | The name of the screen style property such as, --slds-c-input-color-border. |
| propertyValue | FlowElementReferenceOrValue | Defines the value for the screen style property such as, <stringValue>#4AC7CA</stringValue>. |
| scope | string | Specifies where the style setting is applied on a screen. Valid values: Container Header NextOrFinish Previous Pause Not supported for screen components. |

## FlowScreenTrigger

Defines an event handler for a flow screen component. This metadata type is available in API version 59.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| eventName | string | Required. The API name of the event from eventSource that the trigger listens for. |
| eventSource | string | Required. The screen field, screen field attribute, action, or action attribute where eventName takes place. |
| handlers | FlowScreenTriggerHandler[] | An array of flow screen handlers to conditionally run when the configured event is recevied. |

## FlowScreenTriggerHandler

Defines conditions for a flow screen trigger handler. This metadata type is available in API version 59.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| conditions | FlowCondition[] | An array of conditions that must be true to trigger the handler.This field is available in API version 63.0 and later. |
| conditionLogic | string | Specifies logic for the conditions. Valid values are: and—Evaluates to true only if all its conditions evaluate to true or—Evaluates to true if any of its conditions evaluate to true Advanced logic like 1 AND (2 OR 3)—Evaluates to true if the first condition is true and either the second or third condition if true. When you use advanced logic, the string must consist of 1,000 or fewer characters. This field is available in API version 63.0 and later. |
| initBehavior | string | Specifies when to run screen actions after a screen loads. Valid values are: runOnLoad—Run screen actions the first time a screen is visited, regardless of the occurrence of any triggering events. runOnRevisit—Run screen actions every time a screen is revisited by the user clicking Next, regardless of the occurrence of any triggering events. This field is available in API version 64.0 and later. |
| screenActionName | string | Required. The API name of the FlowScreenAction to run when conditions are met. |

## FlowVisibilityRule

Visibility rules render a flow screen component when visibility rule conditions are met. Hides a flow screen component when visibility rule conditions aren’t met. This metadata type is available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| conditionLogic | string | Specifies logic for the conditions. Value can be: and—Evaluates to true only if all its conditions evaluate to true. or—Evaluates to true if any of its conditions evaluate to true. Advanced logic like 1 AND (2 OR 3)—Evaluates to true if the first condition is true and either the second or third condition is true. When you use advanced logic, the string must consist of 1,000 or fewer characters. |
| conditions | FlowCondition[] | An array of conditions that must be true for the flow to wait for this event. |
