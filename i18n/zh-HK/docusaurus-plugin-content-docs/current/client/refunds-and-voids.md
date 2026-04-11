---
sidebar_position: 6
title: 退款與作廢
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
處理訂單後更正的更班經理和授權員工。
:::

## 開始前

- 確認目標交易編號
- 確認顧客 / 門店政策
- 了解交易是進行中還是已完成

## 選擇正確操作

<Tabs>
  <TabItem value="void" label="作廢進行中交易">
1. 開啟進行中的訂單。
2. 按功能選單（三點按鈕）。
3. 在 `Select Function` 中按 `Void Txn`。
4. 如果 `Void Txn` 在其他頁，按 `Previous` 或 `Next`。
5. 確認 `Confirm to void the Txn?`。
6. 完成所需的原因選擇。
  </TabItem>
  <TabItem value="return" label="退回已完成交易">
1. 開啟 `Orders Overview`，然後選擇已完成交易。
2. 按 `Return`。
3. 確認 `Confirm to return the Txn?`。
4. 完成退款付款步驟。
  </TabItem>
</Tabs>

## 您會看到

![Completed order actions](/img/manual/en/client/cl-19-completed-order-actions.png)
![Void confirmation dialog](/img/manual/en/client/cl-20-void-confirm-dialog.png)
![Return confirmation dialog](/img/manual/en/client/cl-21-return-confirm-dialog.png)

## 如果出現問題

:::warning[`Void` 被阻止]
先送出 / 清除尚未處理的修改，再重試。
:::

:::note[`Modify Payment` 限制]
部分第三方連結付款無法完全修改。
如果門店政策要求真正撤銷，請使用 `Return` 流程。
:::

> 截圖待補：`cl-22-modify-payment-3rdparty-warning.png`

## 建議與不建議

:::tip[建議]
進行中交易用 `Void`，已完成交易用 `Return`。
:::

:::danger[不建議]
付款狀態不清楚時，不要重複盲目重試。
:::

## 何時需要找經理／管理員

- 高金額或例外退款
- 第三方付款修改限制
- 作廢 / 退回決策與政策衝突

## 相關指南

- [作廢與退回](../functions/void-vs-return)
- [重新開啟訂單](../functions/reopen-order)
- [重印收據](../functions/reprint-receipt)
