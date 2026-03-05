---
sidebar_position: 2
title: Access and Navigation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
All store staff who sign in to the POS terminal.
:::

## Before you start

- Terminal is initialized and online
- You have a valid login PIN

## Login screen basics

You will see:

- Current shop name
- Home icon (switch shop)
- Optional quick language-switch button (`EN` / `繁` / `简`) when enabled by manager
- PIN keypad
- `SIGN IN` login button

## Steps

<Tabs>
  <TabItem value="quick-language-switch" label="Quick language switch (if shown)">
1. Tap the round language button (`EN` / `繁` / `简`) on login screen.
2. Confirm screen text changes to the next enabled language.
3. Continue normal sign in.
  </TabItem>
  <TabItem value="sign-in" label="Sign in">
1. Enter PIN (or scan card if configured).
2. Tap `SIGN IN`.
3. Wait until `Ordering` screen loads.
  </TabItem>
  <TabItem value="clock-in" label="Clock in/out (if enabled)">
1. Tap roster button on login screen.
2. Tap `Clock In` at shift start, or `Clock Out` at shift end.
3. Continue sign in as normal.
  </TabItem>
  <TabItem value="sign-out" label="Sign out">
1. Go to table/order screen.
2. Tap top-right red sign-out button.
3. Confirm you return to login screen.
  </TabItem>
</Tabs>

## What you should see

![Login PIN screen](/img/manual/en/getting-started/gs-06-login-passcode-screen.png)
![Login with roster flyout](/img/manual/en/getting-started/gs-07-login-roster-flyout.png)

:::note Screenshot pending
Needed file: `getting-started/gs-10-login-quick-language-switch.png`
:::

## If something goes wrong

:::warning `SIGN IN` does not work
Re-enter PIN carefully and retry once.
:::

:::note Login is blocked by service warning
If subscription/offline warning appears, restore connection and retry sign in.
:::

## When to ask manager/admin

- PIN keeps failing after retry
- Subscription/offline block does not clear
- You cannot access the correct shop/role
