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

## Authoring a FlexiPage from scratch

**Rule of thumb: do NOT hand-author a non-trivial FlexiPage.** Retrieve a working standard FlexiPage from the org and copy its `<template>` and `<componentName>` values. The set of valid template/component FQNs is **not** discoverable from deploy errors — error messages just say "Invalid template" or "Invalid component" without listing valid alternatives. Guessing burns hours.

**Standard FlexiPages by page type** — retrieve the one matching your `<type>`. Pulling the wrong type wastes a retrieve cycle and can mislead you (the agent that wrote this section retrieved an `AppPage` when it needed a `HomePage` and gave up):

| Your `<type>` | Standard FlexiPages to retrieve |
|---------------|--------------------------------|
| `HomePage` | `Marketing_Home_Page`, `Sales_Home`, `Service_Home` |
| `RecordPage` | `Account_Record_Page`, `Contact_Record_Page`, `Opportunity_Record_Page`, `Case_Record_Page` |
| `AppPage` | `Property_Finder` (Sales console example), or any custom one already in your org |
| `UtilityBar` | `LightningSales_UtilityBar`, `LightningService_UtilityBar` |

```bash
# Pull a standard Home FlexiPage to use as a starting point
sf project retrieve start --metadata "FlexiPage:Marketing_Home_Page" --target-org <alias>
# Or any standard Record Page
sf project retrieve start --metadata "FlexiPage:Account_Record_Page" --target-org <alias>
```

If you must author from scratch, start from [`metadata-templates/flexipage-home.xml`](../metadata-templates/flexipage-home.xml) and these canonical values:

### Canonical `<template>` names

| FlexiPage `<type>` | `<template><name>` |
|--------------------|--------------------|
| `HomePage` | `home:desktopTemplate` |
| `RecordPage` | `flexipage:recordHomeTemplateDesktop` (one-region default), or retrieve a standard one for multi-region |
| `AppPage` | `flexipage:appHomeTemplateDesktop` (one-region default) |

These are NOT `flexipage:home_default`, `flexipage:homeDefault`, etc. — those guesses fail. Retrieve to confirm template names for your specific page type.

### Canonical Home-page component FQNs

These are the components shown in the standard Service/Marketing Home pages:

| Component FQN | Purpose | Notes |
|---------------|---------|-------|
| `forceChatter:exposedFeed` | Chatter feed tile | Property `context` = `TO` (NOT `feedType=ToMe`) |
| `home:eventContainer` | Today's Events tile | No required properties |
| `runtime_sales_activities:todayTaskContainer` | Today's Tasks tile | No required properties |
| `flexipage:recentItems` | Recent Items list | Properties: `entityNames` (valueList of sObject API names), `label`, `maxRecords` |
| `forceChatter:publisher` | Chatter publisher | Property `context` = `GLOBAL` |
| `flexipage:richText` | Rich text panel | Property `richTextValue` (HTML-escaped) |

`home:desktopTemplate` exposes regions named `top`, `bottomLeft`, `bottomRight`, `sidebar`.

**Working reference** for all of the above: [`force-app/main/default/flexipages/Support_Home_Page.flexipage-meta.xml`](../../../../../force-app/main/default/flexipages/Support_Home_Page.flexipage-meta.xml).

### Assigning a Home FlexiPage to a profile (per-app)

**Standard apps live on disk under `standard__<AppName>.app-meta.xml`** (double underscore — not single). The metadata API name when retrieving is also `standard__<AppName>`:

```bash
# RIGHT
sf project retrieve start --metadata "CustomApplication:standard__LightningService"
# WRONG — returns nothing
sf project retrieve start --metadata "CustomApplication:LightningService"
```

Home pages are assigned via `profileActionOverrides` on the `CustomApplication` (`.app-meta.xml`), not on a CustomObject. One block per (profile, app, formFactor) tuple:

```xml
<!-- In the .app-meta.xml file (e.g., Service_Console.app-meta.xml) -->
<profileActionOverrides>
    <actionName>Tab</actionName>
    <content>Support_Home_Page</content>          <!-- FlexiPage API name -->
    <formFactor>Large</formFactor>
    <pageOrSobjectType>standard-home</pageOrSobjectType>
    <profile>Admin</profile>                       <!-- Profile API name -->
    <type>Flexipage</type>
</profileActionOverrides>
<profileActionOverrides>
    <actionName>Tab</actionName>
    <content>Support_Home_Page</content>
    <formFactor>Large</formFactor>
    <pageOrSobjectType>standard-home</pageOrSobjectType>
    <profile>Custom%3A Support Profile</profile>   <!-- ":" must be encoded as %3A in profile names with spaces/colons -->
    <type>Flexipage</type>
</profileActionOverrides>
```

Working reference: [`force-app/main/default/applications/standard__LightningService.app-meta.xml`](../../../../../force-app/main/default/applications/standard__LightningService.app-meta.xml).

Notes:
- The CustomApplication file must already exist in `force-app/main/default/applications/` before you can add `profileActionOverrides`. Retrieve first.
- The referenced FlexiPage must be deployed before (or in the same deploy as) the app file.

### App Builder UI fallback (when metadata fails)

If a particular component's properties are not discoverable from any retrieved example (rare but possible — e.g. recently-released components), Lightning App Builder's UI is the fallback. Three gotchas before driving it via `agent-browser`:

- **"Done" / "Save" buttons ignore `.click()`.** App Builder's modal/toolbar buttons are Aura-rendered and only fire on a real pointer sequence. Use `agent-browser mouse move <x> <y>` → `mouse down` → `mouse up` at the button's coordinates. See `salesforce-trailhead/SKILL.md` "When You're Stuck" rule 4.
- **Component palette drag-and-drop ignores `agent-browser drag`.** The palette uses HTML5 drag-and-drop with custom `dataTransfer` hooks, and Lightning's drop validators require multiple `dragover` events. A single `agent-browser drag` returns `"no drop"`. The pattern that works:
  ```bash
  agent-browser snapshot -i -s '<palette item selector>'   # get source x/y
  agent-browser snapshot -i -s '<drop region selector>'    # get destination x/y
  agent-browser mouse move <src_x> <src_y>
  agent-browser mouse down
  agent-browser mouse move <mid_x> <mid_y>     # waypoint 1
  agent-browser wait 500
  agent-browser mouse move <near_x> <near_y>   # waypoint 2 (close to drop)
  agent-browser wait 500
  agent-browser mouse move <dst_x> <dst_y>     # over the drop region
  agent-browser wait 500                        # let dragover validators fire
  agent-browser mouse up
  ```
  Each waypoint fires a `dragover` event; without enough of them the drop validator rejects the drop. Two waypoints is usually enough; add more if the drop region's hover state never highlights.
- **Setup pages may wrap content in a `<iframe id="vfFrameId_*">`.** `shadowAct` does not pierce iframes. Use `iframe.contentDocument` directly. See `salesforce-trailhead/references/setup-iframes.md`.

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
