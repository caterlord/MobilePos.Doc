---
title: 設定 X1 產品
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
設定 X1 產品裝置的經理或授權員工。
:::

## 開始前

- 您已登入並具備裝置設定權限
- 已設定 `POS Code`

## 步驟

1. 開啟 `Devices`。
2. 開啟 `X1 Products` 分頁。
3. 如有需要，按 `Info` 查看狀態詳情。
4. 按目標產品裝置的編輯圖示。
5. 儲存設定並確認連線狀態。

## 您會看到

- X1 產品清單和狀態指示
- 每列都有 `Info` 和編輯操作

> Screenshot pending: `client/cl-36-devices-x1-products-tab-list.png`

## 產品專用視窗

<Tabs>
  <TabItem value="customer-display" label="顧客顯示器">
會開啟主機管理視窗（`Customer Display Host`），包含主機啟用 / 狀態、token、配對連結、QR 碼，以及 `Regenerate token`。

> Screenshot pending: `functions/fn-x1-customer-display-host-dialog.png`
  </TabItem>
  <TabItem value="pickup-display" label="取餐顯示器">
會開啟取餐顯示器設定視窗，包含 `Enable pickup display`、`Controller mode`，以及配對選項（`Use link`、`Pair`、`Scan QR`、`Retry`、`Re-pair`）。

> Screenshot pending: `functions/fn-x1-pickup-display-dialog.png`
  </TabItem>
  <TabItem value="express-checkout" label="Express Checkout Kiosk">
會開啟 kiosk 配對視窗（`Express Checkout Kiosks`），用於配對 / 移除 kiosk，並查看已連線 / 未連線狀態。

> Screenshot pending: `functions/fn-x1-express-checkout-kiosk-dialog.png`
  </TabItem>
</Tabs>

## 如果出現問題

:::warning[產品裝置顯示 disconnected]
請先開啟 `Info`，確認主機 / 控制器配對值，然後重試連線。
:::

## 何時需要找經理／管理員

- 配對資料未知或無效
- 重新配對 / 重試後，產品裝置仍然 disconnected
