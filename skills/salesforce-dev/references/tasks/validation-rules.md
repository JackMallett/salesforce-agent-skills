# Validation Rules

Validation rules verify that data entered by users meets specified standards before records can be saved. The rule fires when the formula evaluates to **TRUE** (meaning the data is invalid).

## When to Use
- Enforce data quality (e.g., account number must be 8 characters)
- Cross-field validation (e.g., contact zip must match account zip)
- Enforce data format (e.g., website must end in .com, .org, or .net)
- Range validation (e.g., salary range must be within $20,000)

## Metadata Structure

**File path**: `force-app/main/default/objects/OBJECT_NAME/validationRules/RULE_NAME.validationRule-meta.xml`

Use template: [validation-rule.xml](../metadata-templates/validation-rule.xml)

Key elements:
- `<fullName>`: Rule API name (must match filename)
- `<active>`: `true` or `false`
- `<errorConditionFormula>`: Formula returning TRUE when data is INVALID
- `<errorMessage>`: Text displayed to user when validation fails
- `<errorDisplayField>`: (Optional) API name of field to show error on

## XML Escaping

**CRITICAL**: Comparison operators must be escaped in XML:
- `<>` (Not Equal) → `&lt;&gt;`
- `<` (Less Than) → `&lt;`
- `>` (Greater Than) → `&gt;`
- `&` (Ampersand) → `&amp;`

## Common Formula Patterns

### Check if field is not blank
```xml
<errorConditionFormula>NOT(ISBLANK(AccountId))</errorConditionFormula>
```

### AND — multiple conditions must all be true
```xml
<errorConditionFormula>AND(
    NOT(ISBLANK(AccountId)),
    MailingPostalCode &lt;&gt; Account.ShippingPostalCode
)</errorConditionFormula>
```

### OR — at least one condition must be true
```xml
<errorConditionFormula>OR(
    LEN(BillingCountry) = 1,
    NOT(CONTAINS("US:CA:GB:DE", BillingCountry))
)</errorConditionFormula>
```

### Field length validation
```xml
<errorConditionFormula>LEN(AccountNumber) &lt;&gt; 8</errorConditionFormula>
```

### Cross-object field references
You can reference fields on related objects using dot notation:
- `Account.ShippingPostalCode` (from Contact)
- `Account.Industry` (from Opportunity)

## Deployment

Validation rules do NOT require FLS or profile changes. Deploy just the object folder:

```bash
sf project deploy start \
  --source-dir force-app/main/default/objects/Contact \
  --target-org <alias> --dry-run --json 2>&1 | \
  jq '{status: .result.status, failures: [.result.details.componentFailures[]? | {fullName, problem}]}'
```

## Retrieving Validation Rules

```bash
sf project retrieve start \
  --metadata "ValidationRule:Contact.My_Rule_Name" \
  --target-org <alias> --json 2>&1 | \
  jq '[.result.files[] | {state, fullName, type}]'
```

## Verifying via Tooling API

```bash
sf data query \
  --query "SELECT Id, ValidationName, Active, ErrorConditionFormula, ErrorMessage FROM ValidationRule WHERE EntityDefinition.QualifiedApiName = 'Contact'" \
  --target-org <alias> --use-tooling-api --json 2>&1 | \
  jq '[.result.records[] | {ValidationName, Active, ErrorConditionFormula, ErrorMessage}]'
```
