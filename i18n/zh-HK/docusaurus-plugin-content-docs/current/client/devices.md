---
title: 裝置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
檢查印表機和已連接裝置的收銀員和經理。
:::

## 開始前

- 您已登入
- 裝置硬件已開機並連接

## 此畫面用途

使用 `Devices` 檢查連線狀況，並在日常營運期間維持裝置設定。

:::note[範圍界線]
`Devices` 只用於硬件和連線設定（印表機 / 付款 / 輸入 / X1 products）。
如需現金控制和日結，請使用 `More Tools`。
:::

## 主要分頁

- `Printer`
- `Payments`
- `Input Devices`
- `X1 Products`

## 如何使用各分頁

<Tabs>
  <TabItem value="printer" label="印表機">
此分頁用於印表機生命週期和佇列操作：

`Add Printer`、`Info`、`Test Print`、編輯印表機、`Manage Spooler`，以及移除印表機。
  </TabItem>
  <TabItem value="payments" label="付款">
此分頁用於付款終端機狀態 / 設定：

`Info`、編輯付款裝置設定（包括 Linkly EFTPOS 終端機配對 / 設定），以及裝置不可用時的標記 (`!`)。
  </TabItem>
  <TabItem value="input" label="輸入裝置">
此分頁用於掃描器 / 輸入設定：

`Info`、編輯輸入裝置設定（例如條碼 / QR 掃描器），以及裝置不可用時的標記 (`!`)。
  </TabItem>
  <TabItem value="x1" label="X1 Products">
此分頁用於面向顧客 / 配對的產品：

`Info`、編輯 X1 產品設定，以及顧客顯示器主機、取餐顯示器配對和 express kiosk 配對流程。
  </TabItem>
</Tabs>

## 一般步驟

1. 從左側選單按 `Devices`。
2. 選擇您需要的分頁。
3. 如需快速診斷，先按 `Info`。
4. 執行該分頁需要的操作（測試列印 / 編輯 / 配對 / spooler）。
5. 返回營運前先確認狀態。

## 您會看到

- 裝置項目和狀態指示
- 維護操作（例如印表機測試 / 資訊）

![裝置 印表機 tab](/img/manual/en/client/cl-01-devices-printer-tab.png)
![印表機 Info 狀態 dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![Test 列印 結果](/img/manual/en/client/cl-03-devices-test-print-result.png)

:::note[Screenshot pending for other tabs]
Need files: `client/cl-34-devices-payments-tab-list.png`, `client/cl-35-devices-input-devices-tab-list.png`, `client/cl-36-devices-x1-products-tab-list.png`
:::

## 如果出現問題

:::warning[`POS Code is required`]
請開啟 `Settings` -> `General`，填寫 `POS Code`，按 `Save`，然後重試。
:::

## 何時需要找經理／管理員

- 您無法編輯需要的裝置設定
- 本地檢查後仍然反覆測試失敗
- 裝置專用的配對 / 設定不清楚

## 相關指南

- [開始班次](./start-shift)
- [Function: 管理印表機](../functions/manage-printers)
- [Function: 設定付款裝置](../functions/configure-payment-devices)
- [Function: 設定輸入裝置](../functions/configure-input-devices)
- [Function: 設定 X1 產品](../functions/configure-x1-products)
