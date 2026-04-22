---
sidebar_position: 3
title: Workspace Administration
---

# Workspace Administration

:::info[Who this is for]
Workspace admins, owners, and managers who maintain the HQ business structure or give office staff access to companies, brands, and shops.
:::

## Before you start

- Confirm the correct workspace is selected in the top-left workspace and brand selector.
- Decide whether you need to update business structure, invite a workspace member, or assign HQ business access.
- Prepare the member email address before sending an invitation.
- Confirm which `Company`, `Brand`, or `Shop` the person should access, and what role they should receive.

## Open this page

Open the workspace and brand selector in the upper-left corner, then select `Workspace Administration`.

## What this page controls

`Workspace Administration` manages the business structure and HQ access rules inside the active workspace.

It controls:

- `Companies`
- `Brands`
- `Shops`
- `Business Access`

It does not create cashier logins for the POS terminal. For cashier accounts, use [POS Users](./pos-settings/pos-users.md).

![Workspace Administration Business Access](/img/hq/workspace-administration-business-access.png)

_`Business Access` shows workspace members, pending invitations, and their company, brand, and shop assignments._

## Main tabs

### Companies

Use `Companies` to create or maintain the top level of the business structure. A company can contain one or more brands.

### Brands

Use `Brands` to create or maintain brands under a company. A brand is the main scope used by many HQ setup pages, and brand records can include receipt branding details such as the logo used on printed receipts.

### Shops

Use `Shops` to create or maintain shop records under a brand. Shop records are used by store settings, POS setup, reports, and online ordering.

### Business Access

Use `Business Access` to review workspace members, pending invitations, and the HQ business access assigned to each person.

This tab separates two jobs:

- workspace membership: whether the person belongs to the workspace
- HQ business access: which company, brand, or shop the person can work with in HQ

## Key actions

### Create a company, brand, or shop

1. Select `Companies`, `Brands`, or `Shops`.
2. Click `Add New`.
3. Enter the required `Name`.
4. Select the parent `Company` or `Brand` if HQ asks for one.
5. Enter the optional `Description` or `Address` if needed.
6. Save the record.

### Invite a workspace member and assign access

1. Select `Business Access`.
2. Click `Invite member`.
3. Enter the person's `Email`.
4. Click `Send Invitation`.
5. Find the new row marked `Pending invitation`.
6. Click `Assign access`.
7. Select the `Access level`.
8. Select the `Target`.
9. Select the `Role`.
10. Click `Grant access`.
11. Repeat the assignment if the person needs access to more than one company, brand, or shop.

### Assign access to an existing workspace member

1. Select `Business Access`.
2. Find the member in the `User` column.
3. Click `Assign access`.
4. Select the `Access level`, `Target`, and `Role`.
5. Click `Grant access`.

### Remove direct business access

1. Select `Business Access`.
2. Find the member or pending invitation.
3. Find the company, brand, or shop assignment.
4. Click `Remove` on the assignment you want to remove.

If the assignment is marked `Inherited`, remove the higher-level source assignment instead.

## What changes after you save

- Changes in `Companies`, `Brands`, and `Shops` affect the active workspace business structure.
- `Business Access` changes affect what the member can see or administer in HQ.
- Assignments added to a `Pending invitation` are applied when the invited person accepts the invitation and signs in.
- These changes do not create or change POS cashier logins.

## How to check your change

1. Confirm the new or updated company, brand, or shop appears in the correct tab.
2. Select `Business Access`.
3. Confirm the member, pending invitation, or assignment appears in the table.
4. Check the summary cards for `Workspace Members`, `Pending Invitations`, `Company Assignments`, `Brand Assignments`, and `Shop Assignments`.
5. Ask the member to sign in and confirm they can see the expected brand or shop only.

## If something goes wrong

- If `Sign-in required` appears, ask the invited person to sign in to HQ once before assigning access to their active account.
- If `No assignable access` appears, your account may not have permission to grant access for that company, brand, or shop.
- If a member can see too much or too little, check whether their access is assigned at `Company`, `Brand`, or `Shop` level.
- If an assignment is inherited, remove the higher-level assignment that created it.
- If you need a cashier login for the POS terminal, go to [POS Users](./pos-settings/pos-users.md) instead.

## When to ask owner/admin

- You are not sure which workspace, company, brand, or shop should receive the change.
- You need to grant or remove admin-level access for another manager.
- You need to delete or deactivate a company, brand, or shop.
- The access change affects live setup, payments, reports, or customer-facing channels.
