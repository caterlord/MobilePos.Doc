---
title: Info
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[Who this is for]
Managers/admin staff checking app health and support data.
:::

## Before you start

- You are signed in
- You understand your store policy on debug/log export

## What this screen is for

Use `Info` for app diagnostics and support actions.

Policy reference: [Data Retention and Storage](../reference/data-retention-and-storage)

## What you can do

- Check app version and update status
- Toggle debug mode (`Enabled` / `Disabled`)
- Check offline mode status and tap `Reactivate now` when available
- Open log file picker for support data
- `Export` selected logs to local folder/downloads (including Octopus logs when available)
- `Upload` selected logs to cloud support path
- `Remove` selected logs from the device

## Export or upload logs

<Tabs>
  <TabItem value="export" label="Export logs (local file)">
1. Tap `Info` > `Export Logs`.
2. In `Select Log Files`, select one or more log files.
3. Tap `Export`.
4. Choose an export folder when prompted (or allow default downloads path).
5. Wait for completion message: `Logs exported to ...`.
  </TabItem>
  <TabItem value="upload" label="Upload logs (support)">
1. Tap `Info` > `Export Logs`.
2. Select the files requested by support.
3. Tap `Upload`.
4. Wait for completion message: `Logs uploaded to ...`.

Use this path when support asks you to send logs directly to cloud.
  </TabItem>
  <TabItem value="remove" label="Remove old log files">
1. Tap `Info` > `Export Logs`.
2. Select old/unneeded log files.
3. Tap `Remove`.
4. Confirm removal.

Only remove files that are no longer needed by support.
  </TabItem>
</Tabs>

## Steps

1. Tap `Info`.
2. Select the required action (version/debug/offline/log action).
3. Confirm action result on-screen.

## What you should see

:::note[Screenshot pending]
Needed file: `client/cl-33-info-page-version-debug-offline-export.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-38-info-log-file-selection-export-upload-remove.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-39-info-log-upload-success-message.png`
:::

## If something goes wrong

:::warning[Reactivation/export fails]
Verify internet and storage access, then retry once.
:::

:::warning[Upload fails]
Confirm internet is stable, retry once, and keep the error message for support.
:::

## When to ask manager/admin

- Update status looks incorrect
- Log export/upload repeatedly fails
- Offline mode cannot be reactivated
