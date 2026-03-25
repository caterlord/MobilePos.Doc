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

Use `Settings` to maintain terminal behavior, service mode, language/POS code, printing, integrations, and operation rules.

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
Includes language configuration (`Item Mapping`, `Login Quick Switch`) and required codes (`POS Code`, `Cash Register Code`).
  </TabItem>
  <TabItem value="operation" label="Operation">
Includes `Terminal` mode plus order/payment behavior toggles and service workflow controls.
  </TabItem>
  <TabItem value="system" label="System">
Includes `Number` controls such as `Rounding Method`, `Decimal Places`, and `Round For Cash Only`.
  </TabItem>
  <TabItem value="printing" label="Printing">
Includes `Mapping`, `Setting`, and `Template` tabs for printer routing and print output behavior.
  </TabItem>
  <TabItem value="platforms" label="Third Party Platform + ODO">
Includes enabled third-party integrations and ODO controls such as `Channel Mapping`.
  </TabItem>
  <TabItem value="report" label="Report">
Includes report-related output settings (for example report print quantity).
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

## Switch terminal mode

<Tabs>
  <TabItem value="restaurant" label="Restaurant">
1. Tap `Settings` -> `Operation`.
2. In `Terminal`, set `Mode` to `Restaurant`.
3. Tap `Settings` -> `General`.
4. Turn `Enable Dine In Auto Open Order` off.
5. Turn `Enable Takeaway Auto Open Order` off.
6. Turn `Enable Floor Plan Mode` on if your store uses floor-plan table view.
7. Tap `Save`.
8. Return to `Ordering` and confirm staff must choose a table or takeaway order before adding items.
  </TabItem>
  <TabItem value="quick-order" label="Quick Order">
1. Tap `Settings` -> `Operation`.
2. In `Terminal`, set `Mode` to `Quick Order`.
3. Tap `Settings` -> `General`.
4. Turn `Enable Dine In Auto Open Order` on.
5. Turn `Enable Takeaway Auto Open Order` on.
6. Turn `Enable Default Takeaway Mode` on if takeaway should open first. Leave it off if dine-in should open first.
7. Turn `Enable Dine In Auto Assign Table Code` and `Enable Takeaway Auto Assign Table Code` on if you want POS to rotate counters automatically for new quick orders.
8. Tap `Save`.
9. Return to `Ordering` and confirm POS opens a new order directly instead of asking staff to pick a table first.
  </TabItem>
</Tabs>

:::note Related settings
`Enable Dine In Auto Assign Table Code` and `Enable Takeaway Auto Assign Table Code` only appear after the matching auto-open setting is turned on.
:::

:::tip Quick-order tools
`Reset Table Counters` in `More Tools` is used with Quick Order mode when your store uses the rotating quick-order counters.
:::

## Common rounding tasks

1. Tap `Settings` -> `System`.
2. In `Number`, select `Rounding Method` (`None`, `Round Up`, `Round Down`, or `Round to Nearest 5 cents`).
3. Set `Decimal Places` when that field is shown.
4. Turn `Round For Cash Only` on when rounding should apply only to cash payments.
5. Tap `Save`.
6. Open `Checkout` and confirm totals behave as expected for cash and non-cash methods.

If `Rounding Method` is `Round to Nearest 5 cents`, `Decimal Places` is hidden.

## Restore settings from backup

1. Tap `Settings`.
2. Tap `Restore` in the bottom action bar.
3. Select the backup entry you want to apply.
4. Confirm restore completes.
5. Review key settings and tap `Save`.

Restore now covers more configuration areas in current builds, so verify critical items after restore:

- Printer routing and print settings
- Customer display and terminal behavior settings
- Integration-related settings

## Common print language override task

1. Tap `Settings` -> `Printing`.
2. Open `Template`.
3. Select the target print template.
4. Set `Language` to the required print language (or keep `Follow System`).
5. Tap `Save`.
6. Print a test receipt/slip and confirm output language.

## Common takeaway contact print task

1. Tap `Settings` -> `Printing`.
2. Open `Setting`.
3. In `Receipt`, turn `Show Order Contact On Receipt` on or off.
4. In `Kitchen Slip`, turn `Show Order Contact On Kitchen Output` on or off.
5. Tap `Save`.
6. Print a takeaway receipt or kitchen slip and confirm the contact details show only where your store expects them.

:::note
If you need to adjust receipt font size for this section, open `Template` and review the `Customer Contact` row in the receipt font settings.
:::

## Integration and channel visibility behavior

- In `Third Party Platform`, only enabled integrations are shown.
- In `ODO` -> `Channel Mapping`, only mapped channels are shown.
- If the terminal is offline, channel mapping shows an online-only hint and mapping rows are unavailable.

## Steps

1. Tap `Settings`.
2. Select the section on left panel.
3. Update required fields/toggles.
4. Tap `Save`.
5. Verify changes are applied.

## What you should see

![Settings General with Language and POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

- `Language Configuration` grid with `Item Mapping` and `Login Quick Switch`
- `Operation` -> `Terminal` includes `Mode` with `Restaurant` and `Quick Order`
- `General` includes the auto-open and auto-assign settings that control table-first vs direct-order flow
- `System` -> `Number` with `Rounding Method`, `Decimal Places` (when shown), and `Round For Cash Only`
- `Printing` with `Mapping`, `Setting`, and `Template` tabs
- `Printing` -> `Setting` includes `Show Order Contact On Receipt` and `Show Order Contact On Kitchen Output`
- `Printing` -> `Template` receipt font settings include `Customer Contact`
- `Restore` action at the bottom of settings

:::note Screenshot pending
Needed file: `client/cl-40-settings-language-configuration-grid.png`
:::

:::note Screenshot pending
Needed file: `client/cl-45-settings-print-order-contact-toggles.png`
:::

:::note Screenshot pending
Needed files: `client/cl-46-settings-operation-terminal-mode.png`, `client/cl-47-settings-general-order-mode-toggles.png`
:::

## If something goes wrong

:::warning Cannot save settings
Check required fields (`POS Code`, required codes) and retry.
:::

## When to ask manager/admin

- You do not have permission to change settings
- Change may affect all terminals/store behavior
