---
title: 在线订单
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
处理市场／线上渠道与取餐订单状态的员工。
:::

## 开始前

- 你已经登录
- 你的门市已启用线上渠道整合

## 这个画面的用途

`Online Orders` 用来监看线上订单状态，并处理取餐流程动作。

## 主要画面

<Tabs>
  <TabItem value="server" label="Server">
显示服务器连线与订单处理计数／状态（`Pending`、`Processing`、`Completed`、`Error`、`Info`）。
  </TabItem>
  <TabItem value="pickup" label="Pickup">
显示取餐订单与动作按钮，例如 `View`、`Reject`、`Accept`、`Prepare`、`Pick up` 和 `Create`。
  </TabItem>
</Tabs>

## 步骤

1. 在左侧菜单点按 `Online Orders`。
2. 选择 `Server` 或 `Pickup`。
3. 检查当前订单状态。
4. 打开目标订单并执行需要的动作（`Accept`、`Prepare`、`Pick up` 等）。
5. 完成动作后确认列表状态更新。

## 你应该会看到

- 顶部的 `Server` 与 `Pickup` 页签
- 状态与列表会依当前页签刷新

:::note[待补截图]
需要文件：`client/cl-28-online-orders-server-tab.png`, `client/cl-29-online-orders-pickup-actions.png`
:::

## 如果出现问题

:::warning[状态没有更新]
先刷新一次，检查网络，然后再重试动作。
:::

## 什么时候要找经理／管理员

- 重试后订单仍卡在同一种状态
- 预期订单缺少渠道／取餐动作
- 需要门市政策决定是否拒绝／取消处理
