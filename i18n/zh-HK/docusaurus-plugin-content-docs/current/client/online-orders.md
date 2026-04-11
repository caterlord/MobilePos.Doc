---
title: 線上訂單
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
處理 marketplace / online channel 和取餐訂單狀態的員工。
:::

## 開始前

- 您已登入
- 門店已啟用線上渠道整合

## 此畫面用途

`Online Orders` 可幫助您監察線上訂單狀態，並處理取餐流程操作。

## 主要畫面

<Tabs>
  <TabItem value="server" label="伺服器">
顯示伺服器連線和訂單處理計數 / 狀態（`Pending`、`Processing`、`Completed`、`Error`、`Info`）。
  </TabItem>
  <TabItem value="pickup" label="取餐">
顯示取餐訂單和操作按鈕，例如 `View`、`Reject`、`Accept`、`Prepare`、`Pick up` 和 `Create`。
  </TabItem>
</Tabs>

## 步驟

1. 在左側選單按 `Online Orders`。
2. 選擇 `伺服器` 或 `取餐`。
3. 查看目前訂單狀態。
4. 開啟目標訂單並執行所需操作（`Accept`、`Prepare`、`Pick up` 等）。
5. 確認操作後清單狀態有更新。

## 您會看到

- 頁面上方有 `伺服器` 和 `取餐` 分頁
- 狀態和清單會依目前分頁而更新

:::note[截圖待補]
需要檔案：`client/cl-28-online-orders-server-tab.png`、`client/cl-29-online-orders-pickup-actions.png`
:::

## 如果出現問題

:::warning[狀態沒有更新]
請先重新整理一次，確認網絡正常，然後再重試操作。
:::

## 何時需要找經理／管理員

- 重試後，訂單仍然卡在同一狀態
- 預期訂單缺少 channel / pickup 操作
- 拒絕 / 取消處理需要門店政策決定
