---
title: 裝置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
收銀員及經理，用來檢查印表機與已連線裝置。
:::

## 開始前

- 您已登入
- 裝置硬體已開機並連線

## 此畫面用途

使用 `裝置` 來檢查連線狀態，並在營運中維護裝置設定。

:::note[範圍界線]
`裝置` 只用於硬體與連線設定，例如印表機、付款設備、輸入設備與 X1 產品。
現金控制與日結請使用 `More Tools`。
:::

## 主要分頁

- `Printer`
- `Payments`
- `Input Devices`
- `X1 Products`

## 如何使用各分頁

<Tabs>
  <TabItem value="printer" label="印表機">
使用這個分頁來管理印表機生命週期與佇列操作：

`Add Printer`、`Info`、`Test Print`、編輯印表機、`Manage Spooler`，以及移除印表機。
  </TabItem>
  <TabItem value="payments" label="付款">
使用這個分頁來查看付款終端狀態與設定：

`Info`、編輯付款設備設定（包含 Linkly EFTPOS 終端配對／設定），以及裝置不可用時的 `!` 標記。
  </TabItem>
  <TabItem value="input" label="輸入設備">
使用這個分頁來管理掃描器與輸入設備設定：

`Info`、編輯輸入設備設定（例如條碼／QR code 掃描器），以及裝置不可用時的 `!` 標記。
  </TabItem>
  <TabItem value="x1" label="X1 Products">
使用這個分頁來管理面向客戶的配對產品：

`Info`、編輯 X1 產品設定，以及客戶顯示主機、取餐顯示器配對與快速結帳自助機配對流程。
  </TabItem>
</Tabs>

## 一般步驟

1. 從左側選單點選 `裝置`。
2. 選擇您需要的分頁。
3. 如果需要快速診斷，先點選 `Info`。
4. 執行該分頁對應的動作，例如測試列印、編輯、配對或管理佇列。
5. 返回營運前，先確認狀態正常。

## 你應該看到什麼

- 裝置清單與狀態指示器
- 維護用動作，例如印表機測試與資訊

![裝置 印表機 tab](/img/manual/en/client/cl-01-devices-printer-tab.png)
![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)

:::note[其他分頁的截圖待補]
需要檔案：`client/cl-34-devices-payments-tab-list.png`、`client/cl-35-devices-input-devices-tab-list.png`、`client/cl-36-devices-x1-products-tab-list.png`
:::

## 如發生問題

:::warning[`需要收銀機代碼`]
開啟 `Settings` -> `General`，填入 `收銀機代碼`，點選 `儲存`，然後重試。
:::

## 何時要找經理／管理員

- 您無法編輯必要的裝置設定
- 基本檢查後仍然反覆測試失敗
- 裝置配對或設定不清楚

## 相關指南

- [開班](./start-shift)
- [功能：管理印表機](../functions/manage-printers)
- [功能：設定付款設備](../functions/configure-payment-devices)
- [功能：設定輸入設備](../functions/configure-input-devices)
- [功能：設定 X1 Products](../functions/configure-x1-products)
