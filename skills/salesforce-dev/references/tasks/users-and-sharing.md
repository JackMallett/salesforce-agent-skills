# Users, Permission Set Groups, and Org-Wide Sharing

Covers tasks that aren't about the data model itself: provisioning a user via the
CLI, bundling permission sets into groups (with muting), assigning the group, and
changing organization-wide default (OWD) sharing settings.

## Creating a User via SF CLI

`sf org create user` is **scratch-org only**. To create a user in any non-scratch
org (a Trailhead Playground, sandbox, or production), insert a `User` record with
`sf data create record`.

### Required fields

When inserting a `User` record, you must provide all of these or the insert
will fail with `REQUIRED_FIELD_MISSING`:

| Field | Notes |
|---|---|
| `FirstName`, `LastName` | LastName is required; FirstName is optional in the UI but safe to always include. |
| `Alias` | 8-char max, unique per user is not enforced but conventional. |
| `Email` | Any valid email; doesn't have to be unique. |
| `Username` | Must be in email format. **Globally unique across ALL Salesforce orgs.** |
| `ProfileId` | Look up via `SELECT Id, Name FROM Profile`. |
| `TimeZoneSidKey` | e.g. `America/Los_Angeles` |
| `LocaleSidKey` | e.g. `en_US` |
| `EmailEncodingKey` | e.g. `UTF-8` |
| `LanguageLocaleKey` | e.g. `en_US` |

`UserRoleId` is optional. Look it up via
`SELECT Id, Name, DeveloperName FROM UserRole`.

### Username collision strategy

`Username` must be globally unique across every Salesforce org on the planet.
Common formats like `firstinitial_lastname@example.com` will collide.
**Append an org-unique fragment** — the easiest source is a slug from the
sandbox/playground domain. For `jacktheboss03@resilient-otter-uxd29d.com`,
`jm_testuser_20260429_otter@example.com` succeeds where
`jm_testuser_20260429@example.com` collides.

### Quick lookup helpers

```bash
# Profile by name
sf data query --query "SELECT Id, Name FROM Profile WHERE Name = 'Minimum Access - Salesforce'" \
  --target-org <alias> --json | jq '.result.records'

# Role by display name
sf data query --query "SELECT Id, Name, DeveloperName FROM UserRole WHERE Name = 'Western Sales Team'" \
  --target-org <alias> --json | jq '.result.records'

# Inherit locale from the admin who is running the CLI
sf data query --query "SELECT TimeZoneSidKey, LocaleSidKey, EmailEncodingKey, LanguageLocaleKey FROM User WHERE Username = '<your-admin-username>'" \
  --target-org <alias> --json | jq '.result.records[0]'

# Available license headroom
sf data query --query "SELECT Name, TotalLicenses, UsedLicenses FROM UserLicense WHERE Name = 'Salesforce'" \
  --target-org <alias> --json | jq '.result.records'
```

### The insert

```bash
sf data create record --sobject User --target-org <alias> --json \
  --values "FirstName='Test' LastName='User' Alias='testuser' \
            Email='you@example.com' \
            Username='jm_testuser_20260429_otter@example.com' \
            ProfileId='00e...' UserRoleId='00E...' \
            TimeZoneSidKey='America/Los_Angeles' \
            LocaleSidKey='en_US' EmailEncodingKey='UTF-8' \
            LanguageLocaleKey='en_US'"
```

The new `User` Id comes back at `result.id`.

## Permission Set Groups and Muting Permission Sets

A **PermissionSetGroup** bundles one or more PermissionSets. Users assigned to the
group receive the union of all the included permission sets. A
**MutingPermissionSet** is a special permission set referenced by the group
that *removes* permissions from the union — useful when the same base permission
set is shared across personas but one persona needs a more limited subset.

### MutingPermissionSet metadata

- **Root element**: `<MutingPermissionSet>` (NOT `<PermissionSet>`).
- **Folder**: `force-app/main/default/mutingpermissionsets/`
- **Extension**: `.mutingpermissionset-meta.xml`
- **Schema**: identical to PermissionSet — same `objectPermissions`,
  `fieldPermissions`, `userPermissions`, etc.
- **Inverted semantics**: a `true` value MUTES (removes) the permission within
  the containing group. To mute the `delete` permission on Account, set
  `<allowDelete>true</allowDelete>` inside an `objectPermissions` block on the
  `Account` object. To mute edit on a field, set `<editable>true</editable>`
  inside the `fieldPermissions` block for that field.
- **Standalone is no-op**: a muting permission set has no effect unless it is
  referenced from a `PermissionSetGroup` via `<mutingPermissionSets>`.

Template: [`mutingpermissionset.xml`](../metadata-templates/mutingpermissionset.xml)

### PermissionSetGroup metadata

- **Folder**: `force-app/main/default/permissionsetgroups/`
- **Extension**: `.permissionsetgroup-meta.xml`
- Reference each included permission set by API name (no extension):
  `<permissionSets>Account_Access</permissionSets>`
- Reference each muting permission set the same way:
  `<mutingPermissionSets>Sales_User_Muted</mutingPermissionSets>`

Template: [`permissionsetgroup.xml`](../metadata-templates/permissionsetgroup.xml)

### Deploy order

You can deploy the permission set, the muting permission set, and the group in a
single deploy command — Salesforce resolves the references at the end of the
deployment. Always include the referenced permission sets in the same deploy if
they don't already exist in the org, or the group deploy fails with a missing
component error.

```bash
sf project deploy start \
  --source-dir force-app/main/default/permissionsets \
  --source-dir force-app/main/default/mutingpermissionsets \
  --source-dir force-app/main/default/permissionsetgroups \
  --target-org <alias> --dry-run --json
```

### Assigning a Permission Set Group to a User

Assignments live on the `PermissionSetAssignment` sObject. To assign a *group*,
provide ONLY `PermissionSetGroupId` and `AssigneeId`:

```bash
# Find the group's underlying permission set (auto-generated by the platform)
sf data query --query "SELECT Id, PermissionSetGroupId FROM PermissionSet WHERE PermissionSetGroupId != null" \
  --target-org <alias> --json | jq '.result.records'

# Assign — pass ONLY PermissionSetGroupId
sf data create record --sobject PermissionSetAssignment --target-org <alias> --json \
  --values "AssigneeId='005...' PermissionSetGroupId='0PG...'"
```

**Gotcha — `INVALID_CROSS_REFERENCE_KEY`:** if you pass both `PermissionSetId`
(the group's auto-generated underlying permset) AND `PermissionSetGroupId` in
the same insert, the API rejects it:

> "We can't save this assignment because you've specified both a permission set ID
> and a permission set group ID. Provide either a permission set ID or permission
> set group ID, but not both."

For a regular permission set, pass only `PermissionSetId`. For a group, pass
only `PermissionSetGroupId`.

## Org-Wide Default (OWD) Sharing

OWDs live on the `CustomObject` metadata for both standard and custom objects, in
two elements:

- `<sharingModel>` — internal default (employees, partners with internal access).
- `<externalSharingModel>` — default for high-volume external/Experience Cloud
  users.

| OWD setting (UI) | `sharingModel` value |
|---|---|
| Public Read/Write | `ReadWrite` |
| Public Read Only | `Read` |
| Private | `Private` |
| Controlled by Parent | `ControlledByParent` |

### Always retrieve, then modify

The standard object XMLs already contain ordering-sensitive sections
(`searchLayouts`, action overrides, etc.). Don't author from scratch. Pull the
object first:

```bash
sf project retrieve start --metadata "CustomObject:Account" --target-org <alias> --json
```

Then edit the `<sharingModel>` (and, if present, `<externalSharingModel>`)
values in the retrieved file.

### External sharing model — the silent gotcha

When changing the internal sharing model, you very likely need to change the
external one too. Two specifics that bit a recent Trailhead challenge:

1. **Trailhead checkers verify both internal and external models.** A challenge
   that says *"Visible but not editable for all users"* expected
   `externalSharingModel=Read`, not just `sharingModel=Read`. The challenge
   checker reports `"We can't find the correct organization-wide default
   sharing setting for X"` when only the internal model is updated.
2. **`<externalSharingModel>` may not be present in the retrieved XML for every
   object.** When it's omitted, deploying just `<sharingModel>` is fine — the
   platform infers the external value. But after you set the external model on
   one related object (e.g., Account), Salesforce may auto-align other related
   objects (e.g., Contract) on its own. Verify the result with a SOQL query
   against `EntityDefinition`:

   ```bash
   sf data query --query "SELECT QualifiedApiName, InternalSharingModel, ExternalSharingModel FROM EntityDefinition WHERE QualifiedApiName IN ('Account','Contract','Opportunity')" \
     --target-org <alias> --json | jq '.result.records'
   ```

### Sharing recalculation

OWD changes trigger an asynchronous sharing recalculation. For small Trailhead
playgrounds the recalc finishes in seconds, but for orgs with many records it
can take minutes. Trailhead challenge text often warns "Wait for the updates to
finish processing before checking" — if a check fails immediately after a
sharing-model change, retry after 30-60s before assuming the metadata is wrong.

## FLS Helper: the canonical "all permissionable fields" list

When a challenge or design says "grant FLS on all fields of object X", do not
build the list manually. The System Administrator profile already grants every
permissionable field. Mirror its set:

```bash
sf data query \
  --query "SELECT Field FROM FieldPermissions WHERE SobjectType = 'Account' AND Parent.IsOwnedByProfile = true AND Parent.Profile.Name = 'System Administrator'" \
  --target-org <alias> --json | jq '[.result.records[].Field] | sort'
```

That gives you the authoritative `<field>` list to drop into a permission set
or profile. Compound address fields like `Account.BillingAddress` cover their
constituent components (Street, City, State, etc.) — granting FLS on the
compound field is enough.

To verify your permission set was deployed with the right FLS, query
`FieldPermissions` filtered on the permission set:

```bash
sf data query \
  --query "SELECT Field FROM FieldPermissions WHERE Parent.Name = 'Account_Access' AND SobjectType = 'Account'" \
  --target-org <alias> --json | jq '[.result.records[].Field] | sort'
```
