---
sidebar_position: 9
title: 八達通結算
---

:::danger[Manager only]
只有在門店準備好核對 Octopus V3 總額時，才執行 `八達通結算`。
:::

## 開始之前

- 您已登入，並有權限使用經理級訂單功能。
- 此終端已啟用 Octopus V3 付款。
- Octopus V3 讀卡器已開機、已連接，並處於可用狀態。
- `裝置編號`、`API ID` 和 `API Token` 已儲存在 `裝置` -> `付款設備`。

## 步驟

1. 在 `點餐` 開啟一張訂單。
2. 按三點功能按鈕。
3. 在 `選擇功能` 中按 `八達通結算`。
4. 等待 POS 向 Octopus V3 讀卡器發送結算請求。
5. 查看 `八達通結算成功` 訊息。
6. 確認結算總額後，再繼續正常營業。

## 您會看到

- 只有在啟用 Octopus V3 付款且讀卡器可用時，才會顯示 `八達通結算`。
- 結算成功後，POS 會顯示 `扣款數量`、`扣款總額`、`充值數量`、`充值總額` 和結算檔案名稱。

> Screenshot pending: `functions/fn-octopus-settlement-function-menu.png`
> Screenshot pending: `functions/fn-octopus-settlement-success.png`

## 如果出現問題

:::warning[`八達通結算` 沒有顯示]
開啟 `裝置` -> `付款設備`，確認 Octopus V3 讀卡器已設定、已連接，並處於可用狀態。
:::

:::warning[結算未能完成]
不要多次重複執行結算。請檢查讀卡器連線，記錄時間和終端，然後請經理／管理員檢查 Octopus logs。
:::

## 何時需要找經理／管理員

- 您不確定今天是否已經執行過結算。
- 結算總額與預期 Octopus 活動不一致。
- 讀卡器沒有回應，或結果不清楚。
