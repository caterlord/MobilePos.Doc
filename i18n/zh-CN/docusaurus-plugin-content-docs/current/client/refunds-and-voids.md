---
sidebar_position: 6
title: 退款与作废
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
负责订单后续修正的班次经理和授权员工。
:::

## 开始前

- 确认目标交易编号
- 先和顾客 / 按门店制度确认
- 确认这笔交易是进行中还是已完成

## 选择正确的操作

<Tabs>
  <TabItem value="void" label="作废进行中交易">
1. 打开进行中的订单。
2. 点击功能菜单（三个点）。
3. 在 `选择功能` 中点击 `取消交易`。
4. 如果 `取消交易` 在另一页，点击 `上一页` 或 `下一页`。
5. 确认 `确定要取消此交易吗？`。
6. 完成所需的原因选择。
  </TabItem>
  <TabItem value="return" label="退回已完成交易">
1. 打开 `订单总览`，然后选择已完成交易。
2. 点击 `退回`。
3. 确认 `确定要退货此交易吗？`。
4. 完成退款付款步骤。
  </TabItem>
</Tabs>

## 你应该会看到

![已完成订单操作](/img/manual/en/client/cl-19-completed-order-actions.png)
![作废确认对话框](/img/manual/en/client/cl-20-void-confirm-dialog.png)
![退回确认对话框](/img/manual/en/client/cl-21-return-confirm-dialog.png)

## 出现问题时

:::warning[`取消交易` 被阻止]
先发送 / 清除尚未提交的修改，然后再重试。
:::

:::note[`修改付款` 限制]
某些第三方连结付款无法被完全修改。
如果门店制度要求真正的逆转，请使用 `退回` 流程。
:::

> 截图占位符 `cl-22-modify-payment-3rdparty-warning.png` 仍在处理中。

## 要做 / 不要做

:::tip[要做]
进行中交易使用 `取消交易`，已完成交易使用 `退回`。
:::

:::danger[不要做]
不要在付款状态不明确时反复盲目重试。
:::

## 何时找经理/管理员

- 高金额或例外退款
- 第三方付款修改受限
- 对 `取消交易` / `退回` 的决定与门店制度冲突

## 相关指南

- [功能：作废 vs 退回](../functions/void-vs-return)
- [功能：重开订单](../functions/reopen-order)
- [功能：重印收据](../functions/reprint-receipt)
