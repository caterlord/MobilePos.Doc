---
title: Settings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Who this is for
Managers/admin-level users maintaining terminal configuration.
:::

## Before you start

- You are signed in with settings access rights
- You understand store policy for configuration changes

## What this screen is for

Use `Settings` to maintain terminal behavior, language/POS code, and operation rules.

## Language configuration

Use the language section in `General` to manage:

- Default UI language for this terminal
- Item name display source per language (`Main` or `Alt`)
- Login-screen quick-switch availability per language

:::tip How to read `Main` / `Alt`
`Main` and `Alt` are two item-name sources from your menu setup.  
If one source is blank for an item, POS falls back to the other available name.
:::

## Main sections

<Tabs>
  <TabItem value="general" label="General">
Includes language configuration, `POS Code`, `Cash Register Code`, and base floor/order toggles.
  </TabItem>
  <TabItem value="operation" label="Operation">
Includes order/payment behavior toggles and service workflow controls.
  </TabItem>
  <TabItem value="other" label="Other sections">
Other store-config sections may include system/report/printing/platform options depending on build and setup.
  </TabItem>
</Tabs>

## Common language tasks

<Tabs>
  <TabItem value="set-ui-language" label="Set default UI language">
1. Tap `Settings` -> `General`.
2. In language configuration, select the language row you want as default.
3. Confirm UI text updates to the selected language.
4. Tap `Save`.
  </TabItem>
  <TabItem value="item-mapping" label="Set item name mapping">
1. Tap `Settings` -> `General`.
2. In the target language row, set `Item Mapping` to `Main` or `Alt`.
3. Tap `Save`.
4. Open `Ordering` and confirm item names display as expected.
  </TabItem>
  <TabItem value="quick-switch" label="Configure login quick switch">
1. Tap `Settings` -> `General`.
2. Turn `Login Quick Switch` on for the languages staff can switch on login screen.
3. Tap `Save`.
4. Return to login screen and confirm the language quick-switch button appears.
  </TabItem>
</Tabs>

## Steps

1. Tap `Settings`.
2. Select the section on left panel.
3. Update required fields/toggles.
4. Tap `Save`.
5. Verify changes are applied.

## What you should see

![Settings General with Language and POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

:::note Screenshot pending
Needed file: `client/cl-40-settings-language-configuration-grid.png`
:::

## If something goes wrong

:::warning Cannot save settings
Check required fields (`POS Code`, required codes) and retry.
:::

## When to ask manager/admin

- You do not have permission to change settings
- Change may affect all terminals/store behavior
