---
sidebar_position: 6
title: 退貨與作廢
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
班次經理與授權員工，負責訂單完成後的修正。
:::

## 開始前

- 確認目標交易號碼
- 確認已符合客戶／店舖政策
- 先確認交易是進行中還是已完成

## 選擇正確的動作

<Tabs>
  <TabItem value="void" label="作廢進行中交易">
1. 開啟進行中的訂單。
2. 點選功能選單（三點）。
3. 在 `選擇功能` 中點選 `取消交易`。
4. 如果 `取消交易` 在另一頁，請點選 `上一頁` 或 `下一頁`。
5. 確認 `確認取消此交易？`。
6. 完成需要的原因選擇。
  </TabItem>
  <TabItem value="return" label="退回已完成交易">
1. 開啟 `Orders Overview` 並選擇已完成交易。
2. 點選 `退回`。
3. 確認 `確定要退貨此交易嗎？`。
4. 完成退款付款步驟。
  </TabItem>
</Tabs>

## 你應該看到什麼

![Completed order actions](/img/manual/en/client/cl-19-completed-order-actions.png)
![Void confirmation dialog](/img/manual/en/client/cl-20-void-confirm-dialog.png)
![Return confirmation dialog](/img/manual/en/client/cl-21-return-confirm-dialog.png)

## 如發生問題

:::warning[`取消交易` 被阻止]
先傳送或清除待處理編輯，然後再重試。
:::

:::note[`Modify Payment` 限制]
某些第三方連結付款無法完全修改。
如果店舖政策需要真正的逆轉，請使用 `退回` 流程。
:::

> 截圖待補：`cl-22-modify-payment-3rdparty-warning.png`

## 執行與不要

:::tip[要做]
進行中交易使用 `取消交易`，已完成交易使用 `退回`。
:::

:::danger[不要做]
付款狀態不明確時，不要反覆盲目重試。
:::

## 何時要找經理／管理員

- 高金額或例外退款
- 第三方付款修改限制
- 作廢／退回決策與政策衝突

## 相關指南

- [功能：作廢與退回](../functions/void-vs-return)
- [功能：重開訂單](../functions/reopen-order)
- [功能：重印收據](../functions/reprint-receipt)
