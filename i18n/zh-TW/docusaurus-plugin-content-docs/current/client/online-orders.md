---
title: 線上訂單
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
負責市場平台／線上渠道與取餐訂單狀態的員工。
:::

## 開始前

- 您已登入
- 店舖已啟用線上渠道整合

## 此畫面用途

`Online Orders` 可以讓您查看線上訂單狀態，並處理取餐流程操作。

## 主要畫面

<Tabs>
  <TabItem value="server" label="Server">
顯示伺服器連線與訂單處理計數／狀態（`Pending`、`Processing`、`Completed`、`Error`、`Info`）。
  </TabItem>
  <TabItem value="pickup" label="Pickup">
顯示取餐訂單與動作按鈕，例如 `View`、`Reject`、`Accept`、`Prepare`、`Pick up` 與 `Create`。
  </TabItem>
</Tabs>

## 步驟

1. 從左側選單點選 `Online Orders`。
2. 選擇 `Server` 或 `Pickup`。
3. 檢查目前訂單狀態。
4. 開啟目標訂單，並套用需要的動作（`Accept`、`Prepare`、`Pick up` 等）。
5. 動作完成後，確認清單狀態已更新。

## 你應該看到什麼

- 頂部會有 `Server` 與 `Pickup` 分頁
- 狀態與清單會依目前分頁即時更新

:::note[截圖待補]
需要檔案：`client/cl-28-online-orders-server-tab.png`、`client/cl-29-online-orders-pickup-actions.png`
:::

## 如發生問題

:::warning[狀態沒有更新]
先重新整理一次，確認網路正常，然後再重試該動作。
:::

## 何時要找經理／管理員

- 交易重試後仍卡在同一個狀態
- 預期的訂單缺少渠道或取餐動作
- 需要根據店舖政策決定是否拒絕或取消
