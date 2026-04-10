---
sidebar_position: 3
title: Data Retention and Storage
---

:::info[Who this is for]
Store managers, owners, and support contacts who need to know how long POS data is typically kept.
:::

## Why this matters

This page explains what POS X1 keeps on device and in support uploads, and when automatic cleanup usually happens.

Use this page when you need to answer:

- "How long do logs stay on this terminal?"
- "What data is auto-cleaned vs kept until we remove it?"
- "What should we do regularly to avoid excess old files?"

## Retention at a glance

| Data type | Typical retention | Auto cleanup behavior | What staff should do |
| --- | --- | --- | --- |
| App and device logs | Up to about 31 daily log files | Rolling file limit replaces oldest logs | No action needed for normal operation |
| Crash text logs | Daily files; old files are generally cleaned after about 30 days | Cleanup happens during log-management actions (not constant background cleanup) | Export/upload needed files before removing old ones |
| Crash report files waiting to upload | About 30 days while pending | Cleanup runs when the app processes crash report uploads | Keep internet available so pending reports can upload |
| Previously uploaded crash-report copies | About 10 days | Cleanup runs during crash report processing | No routine action needed |
| Export/upload log list files (including startup diagnostics logs) | About 30 days for normal logs, about 10 days for uploaded-copy area | Cleanup runs when opening the log file selection flow | Open `Info` > `Export Logs` regularly and remove unneeded files |
| Customer display media cache | No fixed auto-expiry | Replaced by newer files or removed manually | Clear old files during device maintenance if storage is tight |
| Receipt logo cache | No fixed age-based expiry | Refreshes when settings/configuration change | No routine action unless branding changes or storage is constrained |
| Local POS databases (orders/config/device data) | No general age-based auto purge | Data remains until business actions remove it, sync clears related queues, or device/shop data is reset | Follow business archive/reset process when decommissioning terminals |
| Cloud support uploads (manual log uploads, crash-report uploads) | Retention depends on cloud policy | This user manual does not define a fixed cloud auto-delete timeline | Confirm your company policy with admin/IT |

## Important behavior to know

:::warning[Cleanup is action-triggered for support logs]
Some cleanup runs only when specific support actions are used (for example opening `Info` > `Export Logs`), not continuously in the background.
:::

:::tip[Practical routine]
For busy stores, review logs weekly or monthly in `Info` > `Export Logs`: upload files needed by support, then remove old unneeded files.
:::

## Suggested store policy (recommended)

1. Keep recent logs available for support investigations.
2. After a case is closed, remove old local log files from `Info` > `Export Logs`.
3. During terminal replacement/decommission, run your approved data reset process so old shop data is not left on unused devices.
4. Define a company cloud-retention policy with admin/IT for uploaded support files.

## Related pages

- [Info](../client/info)
- [Troubleshooting](./troubleshooting)
