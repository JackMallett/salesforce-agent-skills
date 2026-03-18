# Flow — Orchestration & Stages

## FlowExperiment

A node that routes the flow execution based on a specified experiment distribution percentage. It extends FlowNode and inherits all its fields. This metadata type is available in API version 61.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| duration | int | The amount of time that the experiment runs. This field is available in API version 64.0 and later. |
| durationUnit | string | The unit of measurement for experiment duration. Valid values are: Minutes Hours Days Weeks Months This field is available in API version 64.0 and later. |
| paths | FlowExperimentPath[] | An array of flow experiment paths. |
| testGroupPercentage | int | Specifies the distribution percentage of the test group. A valid number in the range 0-99. This field is available in API version 64.0 and later. |
| type | FlowExperimentType | Required. The type of experiment. Valid value is: Random |

## FlowExperimentPath

Defines an experiment path. It extends FlowElement and inherits all its fields. This metadata type is available in API version 61.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| connector | FlowConnector | Specifies which node to execute after this experiment path. |
| label | string | Required. Label for the path. |
| percentage | int | Required. The distribution percentage for this path. |

## FlowOrchestratedStage

A stage node that contains steps in an orchestration. It extends FlowNode and inherits all its fields. This metadata type is available in API version 53.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| connector | FlowConnector | Specifies which node to execute after this stage. |
| exitActionInputParameters | FlowStageStepExitActionInputParameter[] | An array of input parameters from the stage to the evaluation flow. These parameters specify an exit condition for the stage. |
| exitActionName | string | The name of the evaluation flow used as an exit condition for the stage. |
| exitActionOutputParameters | FlowStageStepExitActionOutputParameter[] | An array of output parameters from the evaluation flow to the stage. These parameters specify an exit condition for the stage. |
| exitActionType | InvocableActionType (enumeration of type string) | The type of the evaluation flow for the custom exit condition. Valid values are: EvaluationFlow This value is available in API version 61.0 and later. |
| exitConditionLogic | string | Defines how the stage exit conditions are evaluated. Valid values are: And Or Custom logic, such as (1 AND (2 OR 3)) Formula |
| exitConditions | FlowCondition[] | An array of requirements that must be met to exit the stage. |
| faultConnector | FlowConnector | Not used. |
| runAsUser | boolean | Indicates whether an asynchronous background step is run in the context of the user who completed the most recently completed interactive step. |
| stageSteps | FlowStageStep[] | An array of stage step resources. |

## FlowStage

A section of your flow that can be represented in the UI, such as with breadcrumbs. It extends FlowElement and inherits all its fields. When an interview starts, any stages where isActive is true are added to the $Flow.ActiveStages global variable, which holds a collection of stages. Each stage’s stageOrder determines the order they’re added in. The stage with the lowest stageOrder is assigned to the $Flow.CurrentStage global variable.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| isActive | boolean | Indicates whether the stage is active by default. |
| label | string | A user-friendly label for this stage. |
| stageOrder | int | Indicates how the stage is ordered against other stages. The stageOrder value must be unique within the flow. |

## FlowStageStep

A step resource defines a step within a stage node. This metadata type is available in API version 53.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| actionName | string | Required. Name of the flow associated with the step. |
| actionType | InvocableActionType (enumeration of type string) | Required. The type of the step. Valid values are: stepApproval—An Approval step available only for flow approval processes. This value is available in API version 62.0 and later. stepBackground—A Background step available for both flow approval processes and orchestrations. stepInteractive—An Interactive step available only for orchestrations. stepMuleSoft—A MuleSoft step available only for orchestrations. |
| assignees | FlowStageStepAssignee | An array of users, groups, or queues that are assigned to complete the interactive step. |
| canAssigneeEdit | boolean | Reserved for future use. |
| debugSimulateStep | boolean | Specifies whether to run the step in rollback mode. This field is available in API version 650 and later. |
| entryActionInputParameters | FlowStageStepEntryActionInputParameter[] | An array of input parameters from the step to the evaluation flow that are used as an entry condition for the step. |
| entryActionName | string | The name of the evaluation flow used as an entry condition for the step. |
| entryActionOutputParameters | FlowStageStepEntryActionOutputParameter[] | An array of output parameters from the evaluation flow to the step used to determine if the step can be started. |
| entryActionType | InvocableActionType (enumeration of type string) | The type of the evaluation flow used as a custom entry condition for the step. Valid values are: EvaluationFlow |
| entryConditionLogic | string | Defines how the entry requirements for a step are evaluated. Valid values are: And Or Custom logic, such as (1 AND (2 OR 3)) Formula |
| entryConditions | FlowCondition[] | An array of requirements that must be met to start the step. |
| exitActionInputParameters | FlowStageStepExitActionInputParameter[] | An array of input parameters from the step to the evaluation flow. These parameters specify an exit condition for the step. |
| exitActionName | string | The name of the step exit evaluation flow. |
| exitActionOutputParameters | FlowStageStepExitActionOutputParameter[] | An array of output parameters from the evaluation flow to the step. These parameters specify an exit condition for the step. |
| exitActionType | InvocableActionType (enumeration of type string) | The type of the evaluation flow used as a custom exit condition for the step. The only possible value are: EvaluationFlow . |
| exitConditionLogic | string | Defines how the exit requirements for an interactive step are evaluated. Valid values are: And Or Custom logic, such as (1 AND (2 OR 3)) Formula |
| exitConditions | FlowCondition[] | An array of requirements to be met for exiting an interactive step. |
| inputParameters | FlowStageStepInputParameter[] | An array of input parameters from the step to its associated flow. |
| label | string | Required. The label for the step. |
| outputConfigParams | FlowStageStepOutputConfigParam[] | An array of mock output values to use to debug the step in rollback mode. This field is available in API version 650 and later. |
| outputParameters | FlowStageStepOutputParameter[] | An array of output parameters from a flow to its associated step. |
| requiresAsyncProcessing | boolean | Not used in API version 63.0. |
| shouldLock | boolean | Reserved for future use. |
| stepSubtype | FlowElementSubtype (enumeration of type string) | Reserved for internal use. |

## FlowStageStepAssignee

An assignee associated with an Interactive step. Applicable only for interactive steps. This metadata type is available in API version 53.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignee | FlowElementReferenceOrValue | Names of the user, group, or queue assigned to the interactive step. |
| assigneeType | FlowStageStepAssigneeType (enumeration of type string) | Required. The type of the assignee associated with the interactive step. Valid values are: Group Queue User invalid— This value is available in API version 61.0 and later. |

## FlowStageStepEntryActionInputParameter

Defines an input parameter from the step to its associated evaluation flow. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 53.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. The unique name for the input parameter of the evaluation flow used by a step as an entry condition. |
| value | FlowElementReferenceOrValue | Defines the value of the input parameter of the evaluation flow used by a step as an entry condition. |

## FlowStageStepEntryActionOutputParameter

Defines an output parameter from an evaluation flow used to determine if the step meets entry criteria. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 53.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Reserved for future use. |
| name | string | Required. A unique name for the output parameter of the evaluation flow used by a step as an entry condition. Valid values are: isOrchestrationConditionMet |

## FlowStageStepExitActionInputParameter

Defines an input parameter from the stage or step to its associated evaluation flow. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 53.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. A unique name for the input parameter of the evaluation flow used by a stage or step as an exit condition. |
| value | FlowElementReferenceOrValue | Defines the value of the input parameter of the evaluation flow used by a stage or step as an exit condition. |

## FlowStageStepExitActionOutputParameter

Defines an output parameter from an evaluation flow used to determine if the stage or step meets exit criteria. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 53.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Reserved for future use. |
| name | string | Required. A unique name for the output parameter of the evaluation flow used by a stage or step as an exit condition. The only possible value is isOrchestrationConditionMet. |

## FlowStageStepInputParameter

Defines an input parameter from the step to the flow. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 53.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| name | string | Required. Unique name for the input parameter for a flow associated with the step. |
| value | FlowElementReferenceOrValue | Defines the value of the input parameter of the flow associated with a step. |

## FlowStageStepOutputParameter

Defines an output parameter from the step to the flow. It extends FlowBaseElement and inherits all its fields. This metadata type is available in API version 53.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Reserved for future use. |
| name | string | Required. Unique name for the output parameter for a flow associated with the step. |
