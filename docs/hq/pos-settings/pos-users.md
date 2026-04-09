---
sidebar_position: 3
---

# POS Users & Groups

![POS Users List](/img/hq/pos-settings/pos_users_list.png)

The **POS Users** module defines individual staff accounts for the physical point-of-sale tablets, governing how staff authenticate, interact with, and lock the hardware.

Administration is split into **User Groups** (role assignments) and **POS Users** (individual accounts).

## 1. User Groups

A User Group acts as a centralized role. By placing a POS User into a group, they inherit the specific operational permissions of that group (e.g., standard cashier privileges vs a manager capable of skipping required password steps or executing discounts).

- **Group ID / Code**: Internal code reference.
- **Group Name & Alt Name**: Identifiers in the HQ interface.

> [!NOTE]
> The exact capability matrix (what a group can and cannot do) is controlled inside the specialized Permissions engine, independent of this page. This page only handles group creation and user linkage.

## 2. POS Users

When creating a new POS User, you must map them to a specific **Shop ID** (users are branch-scoped, not global).

### Core Fields
- **User Name**: The login account identifier for typing on the keypad.
- **Alt Name**: An internal reference, typically using a localized language name.
- **Password**: Numeric passcode used for terminal authentication.
- **Staff Code**: A 6-8 digit internal code for API synchronization with your external HCM (Human Capital Management) tool.
- **Card No.**: A magnetic stripe or RFID track identifier. If your POS terminal has an active NFC or magstripe reader, scanning the card will auto-log the user in immediately.

### Login Behaviors
You control exactly how a user is permitted to authenticate:
- **Enable User ID Login**: Allows the user to select their name from a grid and punch in the numeric passcode.
- **Enable Card No. Login**: Forces or allows magnetic badge swipe.
- **Enable Staff Code Login**: Requires the user to remember and input their 6-8 digit long-form staff code.

### Status Toggles
- **Inactive Account**: Immediately locks out the account. The user's name will vanish from the POS login screen upon the next synchronization. Use this immediately during offboarding.
