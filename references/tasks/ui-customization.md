# UI Customization via Metadata API

This guide covers custom tabs, list views, compact layouts, custom buttons/links, feed tracking, page layout modifications, and FlexiPage activation — all via SF CLI without browser access.

**Key principle: retrieve-then-modify.** For most metadata types in this guide — especially Layouts, FlexiPages, and standard object CustomObjects — always retrieve the existing metadata from the org first, then edit the retrieved XML. These types contain many auto-generated fields and org-specific values that are impossible to author correctly by hand. Use the templates here only for simple, new metadata (custom tabs, new list views, new compact layouts).

## Custom Tabs

A custom tab is required to make a custom object accessible in Lightning apps.

**File path**: `force-app/main/default/tabs/<ObjectName>__c.tab-meta.xml`
**Template**: [custom-tab.xml](../metadata-templates/custom-tab.xml)

Deploy alongside the object. No profile changes needed — tab visibility is controlled by app assignment.

## List Views

**File path**: `force-app/main/default/objects/<ObjectName>/listViews/<ViewName>.listView-meta.xml`
**Template**: [listview.xml](../metadata-templates/listview.xml)

### Filter field name format (CRITICAL)

Standard object list view filter fields use `OBJECT.FIELD_NAME` format, **not** the API field name:

| API Field Name | ListView Filter Name |
|---------------|---------------------|
| `StageName` | `OPPORTUNITY.STAGE_NAME` |
| `CloseDate` | `OPPORTUNITY.CLOSE_DATE` |
| `Amount` | `OPPORTUNITY.AMOUNT` |
| `Probability` | `OPPORTUNITY.PROBABILITY` |
| `IsClosed` | `OPPORTUNITY.CLOSED` |
| `Name` | `ACCOUNT.NAME` |

**If you don't know the correct filter name**: retrieve an existing list view on that object and inspect the XML — this is always more reliable than guessing the format:
```bash
sf project retrieve start --metadata "ListView:Opportunity.ClosingNextMonth" --target-org <alias>
```

Custom fields use their API name directly (e.g., `MyField__c`).

### Multiple filter values

Use commas to separate values in an `equals` filter:
```xml
<value>Proposal/Price Quote,Negotiation/Review</value>
```

### Sharing

- `<sharedTo><allInternalUsers></allInternalUsers></sharedTo>` — visible to all users
- Omit `<sharedTo>` — private to the creator

## Compact Layouts

Compact layouts control the highlights panel at the top of record pages.

**File path**: `force-app/main/default/objects/<ObjectName>/compactLayouts/<LayoutName>.compactLayout-meta.xml`
**Template**: [compact-layout.xml](../metadata-templates/compact-layout.xml)

### Setting as primary compact layout

The compact layout alone isn't enough — you must also set it as the primary layout on the object:

```xml
<!-- In the CustomObject metadata file -->
<compactLayoutAssignment>My_Compact_Layout</compactLayoutAssignment>
```

Deploy both the CompactLayout file and the updated object file together.

## Custom Buttons and Links (WebLinks)

**File path**: `force-app/main/default/objects/<ObjectName>/webLinks/<ButtonName>.webLink-meta.xml`
**Template**: [weblink.xml](../metadata-templates/weblink.xml)

### Gotchas

- **`encodingKey` is required** — deploy fails without it. Use `UTF-8`.
- **Deploy ordering**: The WebLink must be deployed **before** the Layout that references it. If deploying both together fails, deploy the WebLink first, then the Layout separately.

### Adding to a page layout

Add a `<customButtons>` element to the Layout XML:
```xml
<customButtons>Google_Info</customButtons>
```

This goes at the top level of the `<Layout>` element (not inside `<layoutSections>`).

## Feed Tracking (Chatter)

Feed tracking lets users follow record changes in Chatter feeds.

### Enable on the object

Add to the CustomObject XML:
```xml
<enableFeeds>true</enableFeeds>
```

### Enable on individual fields

Add to each CustomField XML:
```xml
<trackFeedHistory>true</trackFeedHistory>
```

For the Name field, add it inside the `<nameField>` block of the object XML:
```xml
<nameField>
    <label>My Object Name</label>
    <trackFeedHistory>true</trackFeedHistory>
    <type>Text</type>
</nameField>
```

**Note**: The nameField's `trackFeedHistory` may not take effect on the first deploy if `enableFeeds` is being set in the same deployment. If the retrieved metadata shows `false`, redeploy the object XML with it set to `true`.

## Page Layout Modifications

**File path**: `force-app/main/default/layouts/<ObjectName>-<LayoutName>.layout-meta.xml`

### Swapping related lists

Retrieve the layout, find the `<relatedLists>` block, and change the `<relatedList>` value:

```xml
<!-- Replace Notes & Attachments with Files -->
<!-- Before: -->
<relatedLists>
    <relatedList>RelatedNoteList</relatedList>
</relatedLists>
<!-- After: -->
<relatedLists>
    <relatedList>RelatedFileList</relatedList>
</relatedLists>
```

Common related list API names:
| Display Name | API Name |
|-------------|----------|
| Notes & Attachments | `RelatedNoteList` |
| Files | `RelatedFileList` |
| Activities (Open) | `RelatedActivityList` |
| Activity History | `RelatedHistoryList` |
| Campaign History | `RelatedCampaignList` |

## FlexiPage Activation (Lightning Record Pages)

To set a Lightning page (FlexiPage) as the org default for an object, use `actionOverrides` on the CustomObject metadata.

### Override the View action for desktop and phone

```xml
<!-- In the CustomObject metadata file (e.g., Contact.object-meta.xml) -->
<actionOverrides>
    <actionName>View</actionName>
    <content>My_FlexiPage_Name</content>
    <formFactor>Large</formFactor>    <!-- Desktop -->
    <type>Flexipage</type>
</actionOverrides>
<actionOverrides>
    <actionName>View</actionName>
    <content>My_FlexiPage_Name</content>
    <formFactor>Small</formFactor>    <!-- Phone -->
    <type>Flexipage</type>
</actionOverrides>
```

### Steps

You MUST retrieve-then-modify here — standard object metadata has dozens of actionOverrides and other settings that must be preserved:

1. Retrieve the object metadata: `sf project retrieve start --metadata "CustomObject:Contact" --target-org <alias>`
2. Find the `View` action entries with `formFactor` of `Large` and `Small`
3. Change `<type>Default</type>` to `<type>Flexipage</type>`
4. Add `<content>FlexiPage_API_Name</content>`
5. Deploy the updated object metadata

### Removing fields from a FlexiPage (Dynamic Forms)

After a page has been migrated to Dynamic Forms, individual fields appear as `<fieldInstance>` elements inside `<itemInstances>` blocks. To remove a field:

1. Retrieve the FlexiPage: `sf project retrieve start --metadata "FlexiPage:My_Page"`
2. Find and delete the entire `<itemInstances>` block containing the field's `<fieldItem>` (e.g., `Record.Fax`)
3. Deploy the modified FlexiPage

**Note**: The Dynamic Forms migration itself (converting the monolithic Record Detail component into individual field components) can only be performed through the Lightning App Builder UI. It cannot be triggered via the Metadata API. However, once migrated, all subsequent field additions/removals can be done via metadata.
