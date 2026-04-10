---
sidebar_position: 4
title: 收款
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
负责结账的收银员。
:::

## 开始前

- 订单已经准备好收款
- 客户确认付款方式

## 步骤

<Tabs>
  <TabItem value="amount" label="Amount">
1. 点按 `Checkout`。
2. 保持在 `Amount`。
3. 选择付款方式。
4. 输入金额，然后点按 `Pay`。
  </TabItem>
  <TabItem value="split-by-amount" label="Split By Amount">
1. 点按 `Split By Amount`。
2. 输入第一笔部分付款。
3. 再输入剩余金额。
4. 点按 `Pay`。
  </TabItem>
</Tabs>

## 你应该会看到

- `Unpaid` 金额会正确减少
- 每一笔已付项目都会按方式记录

![Checkout Amount tab](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![Checkout Split By Amount](/img/manual/en/client/cl-14-checkout-split-by-amount.png)

## 如果出现问题

:::warning[付款失败]
只有在状态明确失败／已取消时，才重试一次。
:::

## 什么时候要找经理／管理员

- 付款结果不清楚
- 付款卡住或被锁定
