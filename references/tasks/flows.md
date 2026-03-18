# Creating and Deploying Flows

## File Location

Flows go in `force-app/main/default/flows/`:

```
force-app/main/default/flows/
└── MyFlow.flow-meta.xml
```

## Flow Types (processType)

| processType | UI Name | Description |
|-------------|---------|-------------|
| `Flow` | Screen Flow | Requires user interaction (screens, choices) |
| `AutoLaunchedFlow` | Autolaunched Flow | Runs in background without user interaction |
| `Orchestrator` | Orchestration | Organizes flows into stages and steps |

## Key Concepts

- **Formula merge fields** use `{!variableName}` syntax in expressions (e.g., `{!number} - 100`)
- A flow with only resources (variables, formulas) and no elements connected to Start deploys as `InvalidDraft` status — this is normal and expected
- `scale` on FlowVariable/FlowFormula controls decimal places (0 = whole numbers)
- Boolean default values use `<booleanValue>false</booleanValue>` inside `<value>`
- The `processMetadataValues` for `BuilderType`, `CanvasMode`, and `OriginBuilderType` are required boilerplate for flows created via Lightning Flow Builder

## Record-Triggered Flows

Record-triggered flows use `processType: AutoLaunchedFlow` with a `start` element that specifies the trigger:

| UI Option | triggerType | recordTriggerType |
|-----------|-------------|-------------------|
| Actions and Related Records | `RecordAfterSave` | `Create`, `Update`, `CreateAndUpdate` |
| Fast Field Updates | `RecordBeforeSave` | `Create`, `Update`, `CreateAndUpdate` |

### Update Records in Record-Triggered Flows

When updating the **triggering record** (UI: "Use the [object] record that triggered the flow"):
- Use `<inputReference>$Record</inputReference>` — no `object` or `filters` needed
- Use `<inputAssignments>` for specific field values

When updating **other records** (UI: "Specify conditions to identify records"):
- Use `<object>`, `<filters>`, and `<inputAssignments>` as usual

When updating **related records** (UI: "Update records related to the [object] record that triggered the flow"):
- Use `<inputReference>$Record.RelatedObject</inputReference>` (e.g., `$Record.Account` for Opportunity → Account)
- Use `<inputAssignments>` for specific field values — no `object` or `filters` needed

### Entry Conditions on Record-Triggered Flows

Add `<filterLogic>`, `<filters>`, and optionally `<doesRequireRecordChangedToMeetCriteria>` to the `<start>` element:

```xml
<start>
    <connector><targetReference>First_Element</targetReference></connector>
    <doesRequireRecordChangedToMeetCriteria>true</doesRequireRecordChangedToMeetCriteria>
    <filterLogic>and</filterLogic>
    <filters>
        <field>StageName</field>
        <operator>EqualTo</operator>
        <value><stringValue>Closed Won</stringValue></value>
    </filters>
    <object>Opportunity</object>
    <recordTriggerType>Update</recordTriggerType>
    <triggerType>RecordAfterSave</triggerType>
</start>
```

- `doesRequireRecordChangedToMeetCriteria` = UI "Only when a record is updated to meet the condition requirements"
- Without it (or `false`) = UI "Every time a record is updated and meets the condition requirements"

## Decision Elements

Use `<decisions>` for branching logic. Each outcome is a `<rules>` entry; the default path uses `<defaultConnectorLabel>`:

```xml
<decisions>
    <name>Check_Name</name>
    <label>Check Name</label>
    <locationX>182</locationX>
    <locationY>396</locationY>
    <defaultConnectorLabel>Default</defaultConnectorLabel>
    <rules>
        <name>Outcome_1</name>
        <conditionLogic>and</conditionLogic>
        <conditions>
            <leftValueReference>$Record.Name</leftValueReference>
            <operator>Contains</operator>
            <rightValue><stringValue>VIP</stringValue></rightValue>
        </conditions>
        <connector><targetReference>Next_Element</targetReference></connector>
        <label>Outcome 1</label>
    </rules>
</decisions>
```

- If the default path has no elements (just ends), omit `<defaultConnector>` entirely — only keep `<defaultConnectorLabel>`
- If the default path leads to an element, add `<defaultConnector><targetReference>...</targetReference></defaultConnector>`
- Outcomes are evaluated in the order listed in `<rules>`

## Assignment Elements

Use `<assignments>` to set or modify variable values:

```xml
<assignments>
    <name>Set_Description</name>
    <label>Set Description</label>
    <locationX>176</locationX>
    <locationY>396</locationY>
    <assignmentItems>
        <assignToReference>MyVariable</assignToReference>
        <operator>Add</operator>
        <value><elementReference>Get_Record.Description</elementReference></value>
    </assignmentItems>
    <connector><targetReference>Next_Element</targetReference></connector>
</assignments>
```

Common operators:
- `Assign` — Replace the variable value entirely
- `Add` — Append text (for String), add number (for Number/Currency), add days (for Date)
- `Subtract` — Subtract number or days

Multiple assignment rows execute in order. Add additional `<assignmentItems>` blocks.

## Subflow Elements

Use `<subflows>` to call a child flow from a parent flow:

```xml
<subflows>
    <name>Call_Child_Flow</name>
    <label>Call Child Flow</label>
    <locationX>176</locationX>
    <locationY>504</locationY>
    <flowName>Child_Flow_API_Name</flowName>
    <inputAssignments>
        <name>ChildVariableName</name>
        <value><elementReference>$Record.Id</elementReference></value>
    </inputAssignments>
    <inputAssignments>
        <name>AnotherChildVariable</name>
        <value><stringValue>some value</stringValue></value>
    </inputAssignments>
</subflows>
```

- `flowName` = the API name of the child flow
- `inputAssignments` map parent values to child flow input variables
- Child flow variables must have `<isInput>true</isInput>` to receive input
- Child flow variables must have `<isOutput>true</isOutput>` to return output
- Use `outputAssignments` to capture child flow output back into parent variables
- Subflows can only reference Autolaunched or Screen flows

### Action Elements (chatterPost, emailAlert, etc.)

Action elements use `<actionCalls>` in the metadata:
```xml
<actionCalls>
    <name>My_Action</name>
    <label>My Action</label>
    <locationX>176</locationX>
    <locationY>504</locationY>
    <actionName>chatterPost</actionName>
    <actionType>chatterPost</actionType>
    <flowTransactionModel>CurrentTransaction</flowTransactionModel>
    <inputParameters>
        <name>text</name>
        <value>
            <elementReference>MyTextTemplate</elementReference>
        </value>
    </inputParameters>
</actionCalls>
```

Common action types:
- `chatterPost` — Post to Chatter (params: `text`, `subjectNameOrId`)
- `emailAlert` — Send email alert (actionName: `Object.AlertName`, params: `SObjectRowId`)
- `submit` — Submit for approval (params: `objectId`, `processDefinitionNameOrId`)

### Text Templates

```xml
<textTemplates>
    <name>MyTemplate</name>
    <isViewedAsPlainText>true</isViewedAsPlainText>
    <text>@[{!Look_for_Record.OwnerId}], something happened.</text>
</textTemplates>
```

### Email Alerts (WorkflowAlert)

Email alerts are deployed as Workflow metadata, not as standalone files:

```
force-app/main/default/workflows/Lead.workflow-meta.xml
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>My_Alert_Name</fullName>
        <description>My Alert Description</description>
        <protected>false</protected>
        <recipients>
            <recipient>GroupDeveloperName</recipient>
            <type>group</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/TemplateDeveloperName</template>
    </alerts>
</Workflow>
```

## Minimal Screen Flow Template

See [screen-flow.xml](../metadata-templates/screen-flow.xml) for a copy-paste template.

## Deploying Flows

Flows deploy like any other metadata:

```bash
sf project deploy start \
  --source-dir force-app/main/default/flows/MyFlow.flow-meta.xml \
  --target-org <alias> --dry-run --json
```

No FLS or profile changes are needed for flows — they are not field-level metadata.

## Metadata API Reference

For the full Flow schema, see:
- [overview/Flow.md](../metadata-reference/overview/Flow.md) — sample XML definitions
- [attributes/Flow-core.md](../metadata-reference/attributes/Flow-core.md) — FlowVariable, FlowFormula, FlowConstant, FlowTextTemplate
- [attributes/Flow-screens.md](../metadata-reference/attributes/Flow-screens.md) — FlowScreen, FlowScreenField
- [attributes/Flow-logic.md](../metadata-reference/attributes/Flow-logic.md) — FlowDecision, FlowLoop, FlowAssignment, FlowStart
- [attributes/Flow-data-operations.md](../metadata-reference/attributes/Flow-data-operations.md) — FlowRecordCreate, FlowRecordLookup, FlowRecordUpdate, FlowRecordDelete
- [attributes/Flow-actions.md](../metadata-reference/attributes/Flow-actions.md) — FlowActionCall, FlowSubflow, FlowTransform
