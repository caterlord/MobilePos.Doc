---
sidebar_position: 3
title: POS Users
---

:::info[Who this is for]
Admins and managers who maintain staff login records for the POS.
:::

## Before you start

- Confirm the correct brand and target shop.
- Decide whether you are creating a user group or an individual POS user.
- If you are creating several POS users for the same shop and login setup, prepare the names, staff codes, card numbers, and passwords before using `Beast Mode`.
- Decide which POS actions the group should be allowed to perform.
- Do not confuse POS user access with HQ workspace member access in [Workspace Administration](../organization.md).

## Open this page

Open `POS Settings` -> `POS Users`.

## What this page controls

`POS Users` manages the staff accounts used on physical POS terminals.

Use this page to manage:

- user groups
- POS permissions assigned to each user group
- individual POS user records
- login methods
- inactive or active user access

## Main sections

### User groups

User groups define reusable role assignments for POS users. Each group can also include POS action permissions.

Typical fields:

- `Group ID`
- `Group Name`
- `Alt Name`
- `Permissions`

Permission groups are shown in these sections:

- `Ordering`
- `Cashier & Reports`
- `Manager & Operations`

Common permission examples include:

- `Ordering`
- `Function menu`
- `Void item`
- `Void transaction`
- `Manual discount`
- `Open cash drawer`
- `Day end`
- `Reports`
- `Manager functions`
- `Sold-out management`
- `Pay in/out`
- `Online order operations`
- `ODO pickup orders`
- `POS settings admin`

### POS users

Individual users are assigned to a specific shop.

Typical fields:

- `User Name`
- `Alt Name`
- `Password`
- `Staff Code`
- `Card No`

Use `Beast Mode` in `New POS User` when you need to create several POS users for the same shop and shared login setup. When `Beast Mode` is on, enter one row per staff member with `User Name`, `Alt Name`, `Staff Code`, `Card No`, and `Password`. Then complete `Shared settings` such as `User Groups`, `Shop`, `User ID Login`, `Card No Login`, `Staff Code Login`, and `Inactive Account`. Use `Add row` if you need more rows. The create button shows the number of POS users that will be created.

### Login behaviors

Users can be configured for different login methods such as:

- user ID login
- card login
- staff code login

### Status

Use the inactive or active state to control whether the user can still sign in on the POS.

## Steps

1. Open `POS Settings` -> `POS Users`.
2. Select `User Groups`.
3. Select `New User Group` or edit an existing group.
4. Enter `Group Name` and `Alt Name` if needed.
5. In `Permissions`, tick only the actions this group should perform on the POS.
6. Save the group.
7. Select `POS Users`.
8. Create or open the target POS user.
9. Confirm the correct shop assignment.
10. Enter the login and identification fields.
11. Select the required user groups.
12. Turn on the required login methods.
13. Set the user as active or inactive as needed.
14. Save the user.

## Create several POS users with Beast Mode

1. Select `POS Users`.
2. Click `New User`.
3. Turn on `Beast Mode`.
4. Enter one row per staff member.
5. Click `Add row` if you need more rows.
6. In `Shared settings`, select `User Groups` and `Shop`.
7. Turn on the required login methods.
8. Set `Inactive Account` only if all listed users should be created inactive.
9. Click `Create POS users`.

## What changes after you save

These changes affect how the selected staff account can sign in to the POS in the assigned shop and which protected POS actions they can complete. `Beast Mode` creates every listed POS user with the same shared shop, user group, login-method, and status settings.

When a staff account does not have permission, POS can show `Permission denied`. If an action requires approval, POS can ask for `Input authorizing staff code`. The authorizing staff member must be different from the first staff member.

## How to check your change

1. Reopen the user record and confirm the saved fields.
2. Confirm the user is assigned to the correct shop.
3. Reopen the user group and confirm the selected `Permissions`.
4. If you used `Beast Mode`, confirm all expected POS users appear in the list and spot-check a few records.
5. Verify the intended login method works on the target POS when practical.
6. Test one protected action, such as `Day-end`, `Open Drawer`, `Reports`, or `POS settings admin`, with the correct staff account.

## If something goes wrong

- Confirm you edited a POS user and not an HQ workspace member.
- Check whether the wrong shop was selected.
- If POS shows `Permission denied`, confirm the user's group includes the required permission.
- If POS asks for `Input authorizing staff code`, ask a manager or another authorized staff member to approve the action.
- If the `Beast Mode` create button is disabled or a row fails validation, confirm every filled row has the required user identity and login fields, and that the shared shop and login settings are correct.
- Review the login method switches before changing the user identity fields again.

## When to ask owner/admin

- The account belongs to a manager or another privileged role.
- You are unsure whether the user should be disabled, moved, or recreated.
- You are unsure whether a group should receive manager-level permissions such as `Day end`, `Open cash drawer`, `Pay in/out`, or `POS settings admin`.
