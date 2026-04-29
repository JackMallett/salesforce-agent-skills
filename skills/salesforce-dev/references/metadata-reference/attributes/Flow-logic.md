# Flow — Logic & Control Flow

## FlowAssignment

Defines an assignment node that can dynamically change the value of a variable in the flow. It extends FlowNode and inherits all of its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignmentItems | FlowAssignmentItem[] | An array of assignment operations that’s executed in the given order, starting from the index 0. |
| connector | FlowConnector | Specifies which node to execute after this assignment node. |

## FlowAssignmentItem

Defines an operation to apply to a variable. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Reference to the variable to which you want to apply the specified operator. |
| operator | FlowAssignmentOperator (enumeration of type string) | Operation to apply to the variable reference in the assignToReference field. For valid values, see FlowAssignmentOperator. |
| value | FlowElementReferenceOrValue | Defines the value that you want the operator to apply to the variable reference in the assignToReference field. |

## FlowCondition

Defines a condition for a rule. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| aggregationOperator | string | Operation to apply to the variable reference in the assignToReference field. The valid value is: Count |
| conditionLogic | string | Specifies logic for the conditions. Value can be: and—Evaluates to true only if all its conditions evaluate to true or—Evaluates to true if any of its conditions evaluate to true |
| conditionType | FlowWaitConditionType (enumeration of type string) | The type of condition that a requirement in an automation is used for. Valid values are: Container EntryCondition ExitCondition |
| conditions | FlowCondition[] | An array of conditions that must be true for the flow to execute the rule. |
| leftValueReference | string | Required. Unique name of the element that serves as the left side of the condition expression. |
| operator | FlowComparisonOperator (enumeration of type string) | Required. Comparison operators in conditions for flow elements and resources. Valid values are: Contains EndsWith EqualTo GreaterThan GreaterThanOrEqualTo HasError—This value is available in API version 64.0 and later. In— This value is available in API version 56.0 and later. IsBlank—A text value with zero characters or with only whitespace. Use to determine whether a text field or variable is blank. For other data type values, use to determine whether a field or variable is null. This value is available in API version 61.0 and later. IsChanged— This value is available in API version 52.0 and later. IsEmpty—An empty collection. This value is available in API version 61.0 and later. IsNull—A value that is either not set or references no value. Use to determine whether a field or variable value is set to no value. LessThan LessThanOrEqualTo None— Save a flow with an incomplete condition, so you can finish building the flow later. This value is available in API version 58.0 and later. NotEqualTo NotIn— This value is available in API version 56.0 and later. StartsWith WasSelected— Requires a choice on the left side. WasSet— This value is available in API version 30.0 and later. WasVisited— Requires a node on the left side. See Flow Operators. |
| rightValue | FlowElementReferenceOrValue | Unique name of an element or the actual value, such as text or a number, for the right side of the condition expression. |

## FlowDecision

A node that evaluates a set of rules and routes the flow execution based on the first rule that evaluates to true. It extends FlowNode and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| attributes | FlowAttribute[] | An array of attributes for the decision. This field is available in API version 65.0 and later. |
| defaultConnector | FlowConnector | Specifies which node to execute if none of the rules evaluate to true. |
| defaultConnectorLabel | string | Label for the default connector. |
| rules | FlowRule[] | An array of rules for the decision. The rules are evaluated in the order that they’re listed, and the connector of the first true rule is used. If no rules are true, then the default connector is used. In Flow Builder, rules are referred to as decision outcomes. |

## FlowExitRule

Defines the conditions and logic that enables an exit rule to evaluate to true. It extends FlowElement and inherits all of its fields. This metadata type is available in API version 62.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| conditions | FlowCondition[] | An array of conditions for the exit rule. |
| label | string | Required. Label for the exit rule. |
| logicalOperator | string | Required. Logical operator in conditions for the exit rule. Valid values are: and—Evaluates to true only if all its conditions evaluate to true or—Evaluates to true if any of its conditions evaluate to true |
| ruleOrder | int | Indicates how the exit rule is ordered against other exit rules. The ruleOrder value must be unique within the flow. |

## FlowLoop

A construct for iterating through a collection. It extends FlowNode and inherits all its fields. FlowLoop is available in API version 30.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignNextValueToReference | string | The variable that’s assigned to the current value in the collection before navigating to the target of nextValueConnector. |
| collectionReference | string | The collection being looped through. |
| iterationOrder | iterationOrder (enumeration of type string) | Valid values are: Asc—Iterate through the collection in the order the values are listed (first to last). Desc—Iterate through the collection in the reverse order the values are listed (last to first). |
| nextValueConnector | FlowConnector | A reference to the next element in the collection. |
| noMoreValuesConnector | FlowConnector | The element to navigate to when all entries in the collection have been iterated through. |

## FlowRule

Defines the conditions and logic that enables a rule to evaluate to true. It extends FlowElement and inherits all of its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| attributes | FlowAttribute[] | An array of attributes for the flow rule. This field is available in API version 65.0 and later. |
| conditionLogic | string | Specifies logic for the conditions. Value can be: and—Evaluates to true if all of its conditions are true. or—Evaluates to true if any conditions are true. Advanced logic like 1 AND (2 OR 3)—Evaluates to true if the first condition is true and either the second or third condition is true. When you use advanced logic, the string can contain up to 1,000 characters. |
| conditions | FlowCondition[] | An array of conditions for the rule. |
| connector | FlowConnector | Specifies which node to execute if this rule evaluates to true in a decision first. |
| doesRequireRecordChangedToMeetCriteria | boolean | If set to true, conditions evaluate to true only if the record didn’t meet the required conditions before the triggering update but now meets the conditions after the update. This field is available in API version 50.0 and later. |
| label | string | Required. Label for the connector. |

## FlowSchedule

Specifies when and how frequently to run the flow. This metadata type is available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| dayOfMonthToRun | int | The number of the day of the month on which the flow runs. For example, 1 is the first day of the month, 2 is the second day of the month, and so on. You can use -1 for the last day of the month. This field is available in API version 66.0 and later. |
| daysOfWeekToRun | string | The number of the days of the week on which the flow is to run. For example, 1, 2, 3, where 1 is Sunday, 2 is Monday, and so on. This field is available in API version 66.0 and later. |
| endDate | date | Reserved for future use. |
| endTime | time | Reserved for future use. |
| frequency | FlowStartFrequency (enumeration of type string) | Specifies how frequently to run the flow. Valid values are: Once Daily Weekly OnActivate—For segment-triggered flows only. This value is available in API version 49.0 and later. Hourly—For segment-triggered flows only. This value is available in API version 66.0 and later. Monthly—For segment-triggered flows only. This value is available in API version 66.0 and later. Weekdays—For segment-triggered flows only. This value is available in API version 66.0 and later. Yearly—For segment-triggered flows only. This value is available in API version 66.0 and later. |
| frequencyNumber | int | For segment-triggered flows only. The number of times to run the flow for this schedule based on the frequency value. For example, if this field is 2, and frequency is Hourly, the flow runs every hour for 2 hours . When this number is met, the flow no longer runs for this schedule. This field is available in API version 66.0 and later. |
| startDate | date | The date when the flow runs, or when the flow’s run schedule starts recurring. |
| startTime | time | The time of day when the flow runs, based on the org’s default time zone. |

## FlowScheduledPath

Defines a scheduled path. It extends FlowElement and inherits all its fields. This metadata type is available in API version 51.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| connector | FlowConnector | Specifies which node to execute after this scheduled path. |
| label | string | Label for the scheduled path. |
| maxBatchSize | int | The maximum number of scheduled path interviews to execute in a single batch, from 1 to 200. Default is 200. |
| offsetNumber | int | Number of months, days, hours, or minutes to offset the time that the scheduled path executes. Negative values offset the time to execute before the provided time. Positive values offset the time to execute after the provided time. |
| offsetUnit | FlowScheduledPathOffsetUnit (enumeration of type string) | Specify the time unit used to offset when the scheduled path executes. Possible values are: Months—This value is available in API version 56.0 and later. Days Hours Minutes |
| pathType | FlowScheduledPathType (enumeration of type string) | The type of scheduled path. null is used for time-triggered and record-triggered paths. The default value is null. AsyncAfterCommit—The scheduled path runs asynchronously after a save. |
| recordField | string | Field used to determine when the scheduled path executes. The field’s object is defined in FlowStart. |
| timeSource | FlowScheduledPathTimeSource (enumeration of type string) | Specify if a field or event is used to determine when the scheduled path executes. Possible values are: RecordField RecordTriggerEvent |

## FlowStart

Represents the flow’s Start element, which specifies how the flow starts. In an autolaunched flow, the Start element also defines when and how frequently to run the flow. To run the flow only for specific records, the Start element can define filter criteria. FlowStart extends FlowNode and inherits all its fields except name and label. This metadata type is available in API version 47.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| activation | string | The ID of the activation that triggers the flow. This field is available in API version 63.0 and later. |
| activationTemplate | string | The name of the activation template that determines the contact point for each channel configured in the activation template for a segment-triggered flow. This field is available in 66.0 and later. |
| capabilityTypes | FlowCapability[] | An array of capabilities that can pass data with the flow. Only one capability is supported in API version 60.0 and later. This field is available in API version 60.0 and later. |
| connector | FlowConnector | Specifies which element to execute first. |
| conditionLogic | string | Defines how the filtering conditions are evaluated. Valid values are: And Or |
| conditions | FlowCondition[] | An array of conditions that must be true for the event to trigger. |
| dataGraph | string | The data graph associated with the flow. Reference fields from this data graph throughout the flow. This field is available in API version 61.0 and later. |
| dataTypeMappings | FlowDataTypeMapping[] | An array of data type mappings for input and output values that have the generic sObject data type. This field is available in API version 63.0 and later. |
| doesRequireRecordChangedToMeetCriteria | boolean | If set to true, conditions evaluate to true only if the record didn’t meet the required conditions before the triggering update but now meets the conditions after the update. This field is available in API version 50.0 and later. |
| entryType | FlowEntryType (enumeration of type string) | Specifies when a unified individual can join a flow. Valid values are: AfterCompletion—Unified individuals can join the flow only after they complete all previous flow runs of the same flow definition. Always—Unified individuals can always join the flow. Never—Unified individuals can never reenter the flow. This value is available in API version 63.0 and later. This field is available in API version 60.0 and later. |
| eventName | string | The name of the automation event that triggers the automation event-triggered flow. Valid values are: trgrOnSmsSubscription trgrOnEmailSubscription trgrOnOrderPlacement The API name of a form The API name of an external service This field is available in API version 61.0 and later. |
| eventType | InvocableActionType (enumeration of type string) | The type of the automation event that triggers the automation event-triggered flow. Valid values are: exploreConversation—Available in API version 61.0 and later. externalEvent processWebStoreUserRgstr trgrOnCustomEvent—Available in API version 64.0 and later. trgrOnEmailBounceEngagement trgrOnEmailLinkClickEngagement trgrOnEmailOpenEngagement trgrOnEmailSubscription trgrOnFormSubmission trgrOnOrderPlacement trgrOnReferralEventSubmission—Available in API version 65.0 and later. trgrOnSmsDeliveryFailureEngagement trgrOnSmsLinkClickEngagement trgrOnSmsResponseEngagement trgrOnSmsSubscription trgOnVoucherStsChgOtbdEngmt—Available in API version 65.0 and later. trgrOnWebCartAbandoned trgrOnWhatsAppDeliveredEngagement trgrOnWhatsAppDlvrFailureEngmt trgrOnWhatsAppLinkClickEngmt trgrOnWhatsAppReadEngagement trgrOnWhatsAppResponseEngmt trgrOnWhatsAppSubscription |
| fanOutAction | FlowActionCall | The invocable action in the Start element of a broadcast flow. This field is available in 66.0 and later. |
| filterFormula | string | A formula that’s used to filter what records execute the flow during a save. Available only in record-triggered flows. This field is available in API version 55.0 and later. |
| filterLogic | string | The filter logic that’s applied to the filter condition requirements. To require all conditions, use AND. To require any conditions, use OR. For custom condition logic, enter the entire logic string, for example 1 AND 2 OR (3 AND 4). This field is available in API version 50.0 and later. |
| filters | FlowRecordFilter[] | An array of filters to apply when retrieving records from the database. For example, filter accounts to include only the records that haven’t been updated in the last 4 weeks. |
| flowRunAsUser | string | Specifies who to run the flow as. Possible values are: TriggeringUser—Run the flow as the user that triggered the flow. DefaultWorkflowUser—Run the flow as the default workflow user. This field is available in API version 60.0 and later. |
| form | string | Required only for form-triggered flows. The content key value for the form used to trigger the flow. This field is available in API version 59.0 and later. |
| inputs | FlowStartInputParameter[] | An array of inputs to the Start element. |
| object | string | The object whose records you want to retrieve from the database. A flow interview starts for each record that meets the filter conditions. |
| prioritizedContactPointsList | string | A comma-separated list of channels used to choose the individual in the segment-triggered flow. The flow ranks these channels to select an individual. Valid values are: Email, Phone. If the flow finds contact points for both, it uses the higher-ranked channel. For example, if the list is Phone, Email and both exist, the flow selects the individual associated with the phone. This field is available in 66.0 and later. |
| publishSegment | boolean | Indicates whether to republish the segment and update segment membership before the flow runs or on the segment’s Data Cloud publish schedule. When the value is true, the segment is immediately republished before the flow runs, and ignores the segment's publish schedule. When the value is false, the segment is republished on the segment's Data Cloud publish schedule, but the segment isn't republished if the schedule is set to Do not refresh.The default value is false. This field is available in API version 60.0 and later. |
| recordTriggerType | RecordTriggerType (enumeration of type string) | Specifies what type of record changes can start the flow. Possible values are: Create—When a record is created. Update—When a record is updated. CreateAndUpdate—When a record is created and updated. Delete—When a record is deleted. This value is available in API version 50.0 and later. None—For flows that aren’t record-triggered flows. This value is available in API version 55.0 and later. Available only when triggerType is RecordBeforeSave or DataCloudDataChange. This field is available in API version 48.0 and later. |
| schedule | FlowSchedule | Required when triggerType is Scheduled. Specifies when and how frequently the flow runs. |
| scheduledPaths | FlowScheduledPath[] | Specifies the flow’s scheduled paths. This field is available in API version 51.0 and later. |
| segment | string | The segment used to trigger the flow. This field is available in API version 56.0 and later. |
| sendMsgToOneContactPtPerIndv | boolean | Indicates whether a segment-triggered flow sends a message to only one contact per individual (true) or multiple contacts (false). The default value is (false). If activationTemplate is set, this field must be true. This field is available in 66.0 and later. |
| TimeZoneSidKey | string | Reserved for future use. |
| triggeringDataGraph | string | The API name of the data graph that includes the data model object that triggers the automation event-triggered flow. This field is available in API version 63.0 and later. |
| triggeringDataModelObjectPath | string | The Data Cloud path to the data model object that triggers the automation event-triggered flow. This field is available in API version 63.0 and later. |
| triggerType | FlowTriggerType (enumeration of type string) | Specifies what causes the flow to run. If you exclude this field, the flow has no trigger and starts only when a user or app launches the flow. Possible values are: Activation—The flow starts when an activation is published. This value is available in API version 63.0 and later. AutomationEvent—The flow starts when an automation event such as an SMS subscription occurs. This value is available in API version 62.0 and later. Capability—When capabilityTypes is set, the flow starts when the capability is run. This value is available in API version 60.0 and later. DataCloudDataChange— The flow starts when data model object (DMO) or calculated insight object (CIO) conditions are met. This value is available in API version 59.0 and later. DataGraphDataChange— The flow starts when conditions are met in the specified data graph field. This value is available in API version 63.0 and later. EventDrivenJourney—Reserved for internal use. ExternalSystemChange—The flow starts when a relevant change is detected in an external system. This value is available in API version 63.0 and later. PlatformEvent—The flow starts when a platform event message is received. This value is available in API version 49.0 and later. RecordAfterSave—The flow starts after a record is saved. This value is available in API version 49.0 and later. RecordBeforeDelete—Deleting a record triggers an autolaunched flow before the record is deleted from the database. This value is available in API version 50.0 and later. RecordBeforeSave—Creating and/or updating a record triggers an autolaunched flow to make more updates to that record before it’s saved to the database. This value is available in API version 48.0 and later. Scheduled—The flow starts at the scheduled time. This value is available in API version 47.0 and later. ScheduledJourney— The flow starts only at the scheduled time and frequency. This value is available in API version 49.0 and later. Segment— At the scheduled time, the flow send emails to individuals included in the chosen segment. This value is available in API version 56.0 and later. Available only when processType is AutoLaunchedFlow or PromptFlow. This field is available in API version 47.0 and later. |
| versionString | string | Specifies the version of the automation event. This field is available in API version 65.0 and later. |

## FlowCapability

Defines the data structure of a capability. When the capability is invoked, it triggers the flow to run and data is passed between the flow and capability. It extends FlowElement and inherits all of its fields. This metadata type is available in API version 60.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| capabilityName | string | Required. The specified capability that the flow integrates with. The valid format is Name://Name, for example, PromptBuilder://SalesEmail |
| inputs | FlowCapabilityInput[] | An array of capability inputs. The flow sets the input values and passes the data to the capability. |

## FlowCapabilityInput

Defines the data structure of a capability input. It extends FlowElement and inherits all of its fields. This metadata type is available in API version 60.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| capabilityInputName | string | Required. The input name is the same for the capability and the flow. |
| dataType | string | The data type of the capability input. Valid types are: Boolean—This value is available in API version 61.0 and later. Currency—This value is available in API version 61.0 and later. Date—This value is available in API version 61.0 and later. Number—This value is available in API version 61.0 and later. sObject—This value corresponds to a record variable. This value is available in API version 60.0 and later. String—This value is available in API version 61.0 and later. |
| isCollection | boolean | Required. Indicates whether the input is a collection of values. The default value is false. |

## FlowStartInputParameter

Defines an input parameter to the flow Start element. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 62.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. The unique name for the input parameter to the Start element. |
| value | FlowElementReferenceOrValue | Defines the value of the input parameter to the Start element. |

## FlowWait

Waits for one or more defined events to occur. FlowWait extends FlowNode and inherits all its fields. FlowWait is available in API version 32.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| defaultConnector | FlowConnector | Specifies which node to execute if the conditions are false for every event in the Wait element. |
| defaultConnectorLabel | string | Label for the default connector. |
| faultConnector | FlowConnector | Specifies which node to execute if the attempt to wait results in an error. If any of the wait events fail, the flow takes the fault connector. |
| timeZoneId | string | Reserved for future use. |
| waitEvents | FlowWaitEvent[] | An array of events that the Wait element is waiting for.If the conditions for every event evaluate to false, the defaultConnector is used. |

## FlowWaitEvent

An event that a FlowWait element is waiting for. FlowWaitEvent extends FlowElement and inherits all its fields. FlowWaitEvent is available in API version 32.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| conditionLogic | string | Specifies logic for the conditions. Value can be: and—Evaluates to true only if all its conditions evaluate to true or—Evaluates to true if any of its conditions evaluate to true Advanced logic like 1 AND (2 OR 3)—Evaluates to true if the first condition is true and either the second or third condition is true When you use advanced logic, the string must consist of 1,000 or fewer characters. |
| associatedElement | string | The API name of the event that resumes the flow. This field is available in API version 60.0 and later. |
| conditions | FlowCondition[] | An array of conditions that must be true for the flow to wait for this event. |
| automationEventName | string | Name of the automation event that the Wait element is waiting for. |
| automationEventType | InvocableActionType (enumeration of type string) | The type of the automation event that triggers the Wait element is waiting for. Valid values are: exploreConversation—This value is available in API version 61.0 and later. trgrOnCustomEvent—This value is available in API version 64.0 and later. trgrOnSmsSubscription trgrOnEmailSubscription trgrOnOrderPlacement trgrOnFormSubmission |
| connector | FlowConnector | Specifies which node to execute if this event is the first event that occurs. |
| eventType | string | Required. The event’s type. The type determines which input parameters are available to define this event. Valid values are: AlarmEvent—This event is an alarm based off an absolute date/time value. DateRefAlarmEvent—This event is an alarm based off a date/time field on a record. |
| extendUntil | Time | Reserved for future use. |
| filters | FlowRecordFilter[] | An array of filters to apply when retrieving records from the database. For example, filter accounts to include only the records that haven’t been updated in the last 4 weeks. This field is available in API version 60.0 and later. |
| filterlogic | string | The filter logic that’s applied to the filter condition requirements. To require all conditions, use AND. To require any conditions, use OR. For custom condition logic, enter the entire logic string, for example 1 AND 2 OR (3 AND 4). This field is available in API version 60.0 and later. |
| inputParameters | FlowWaitEventInputParameter[] | An array of the event’s input parameters. The parameter values are set by using values from the flow. |
| interactionType | FlowWaitInteractionType (enumeration of type string) | Specifies what type of event can resume the flow. Possible values are: SmsResponse—An SMS response event WhatsappResponse—A WhatsApp response event This field is available in API version 62.0 and later. |
| label | string | Required. Label for the wait event. |
| object | string | The object that contains the event you want to use to resume the flow. This field is available in API version 60.0 and later. |
| offset | int | Reserved for future use. |
| offsetUnit | FlowScheduledPathOffsetUnit (enumeration of type string) | Reserved for future use. |
| outputParameters | FlowWaitEventOutputParameter[] | An array of the event’s output parameters. The parameter values are assigned from the event to variables in the flow. |
| recordTriggerType | RecordTriggerType | Specifies what type of record changes can resume the flow. Possible values are: Create—When a related record is created Update—When a related record is updated CreateAndUpdate—When a related record is created and updated This field is available in API version 60.0 and later. |

## FlowWaitEventInputParameter

An input parameter for FlowWaitEvent. The parameter’s value is set by using values from the flow. It extends FlowBaseElement and inherits all its fields. FlowWaitEventInputParameter is available in API version 32.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Unique name for the input parameter. |
| value | FlowElementReferenceOrValue | Defines the value of the input parameter. |

## FlowWaitEventOutputParameter

An output parameter for FlowWaitEvent. The parameter’s value is assigned to a variable in the flow so that it can be referenced in another part of the flow. It extends FlowBaseElement and inherits all its fields. FlowWaitEventOutputParameter is available in API version 32.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Required. Specifies the variable to which you want to assign the output parameter value. |
| name | string | Required. Unique name for the output parameter. |
