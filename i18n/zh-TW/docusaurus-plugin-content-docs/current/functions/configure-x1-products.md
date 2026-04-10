---
title: 設定 X1 Products
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
負責設定 X1 產品設備的經理或授權員工。
:::

## 開始前

- 您已登入，且具備裝置設定權限
- `收銀機代碼` 已設定

## 步驟

1. 開啟 `裝置`。
2. 開啟 `X1 Products` 分頁。
3. 如果需要，點選 `Info` 查看狀態詳細資料。
4. 點選目標產品設備上的編輯圖示。
5. 儲存設定並確認連線狀態。

## 你應該看到什麼

- X1 產品清單與狀態指示器
- 每一列都有 `Info` 與編輯動作

> 截圖待補：`client/cl-36-devices-x1-products-tab-list.png`

## 產品相關對話框

<Tabs>
  <TabItem value="customer-display" label="客戶顯示器">
會開啟主機管理對話框（`Customer Display Host`），內容包含主機啟用／狀態、token、配對連結、QR code 與 `Regenerate token`。

> 截圖待補：`functions/fn-x1-customer-display-host-dialog.png`
  </TabItem>
  <TabItem value="pickup-display" label="取餐顯示器">
會開啟取餐顯示器設定對話框，內容包含 `Enable pickup display`、`Controller mode` 與配對選項（`Use link`、`Pair`、`Scan QR`、`Retry`、`Re-pair`）。

> 截圖待補：`functions/fn-x1-pickup-display-dialog.png`
  </TabItem>
  <TabItem value="express-checkout" label="快速結帳自助機">
會開啟自助機配對對話框（`Express Checkout Kiosks`），用來配對或移除自助機，並檢查已連線／未連線狀態。

> 截圖待補：`functions/fn-x1-express-checkout-kiosk-dialog.png`
  </TabItem>
</Tabs>

## 如發生問題

:::warning[產品設備顯示已中斷連線]
開啟 `Info`，確認主機／控制器配對值，然後重試連線。
:::

## 何時要找經理／管理員

- 配對資料未知或無效
- 重新配對或重試後，產品設備仍然離線
