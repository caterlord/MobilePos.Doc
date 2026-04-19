---
title: 在线订单
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
负责线上渠道和取餐订单状态的员工。
:::

## 开始前

- 你已经登录
- 门店的线上渠道整合已启用
- 你的 POS 用户群组允许所需操作的 `网上订单操作` 或 `ODO 取餐订单`

## 这个页面的用途

使用 `在线订单` 查看线上订单状态，并处理取餐流程动作。

## 主要视图

<Tabs>
  <TabItem value="server" label="服务器">
查看服务器连接以及订单处理状态统计（`待处理`、`处理中`、`已完成`、`已拒绝`、`已接受`、`已备餐`）。
  </TabItem>
  <TabItem value="pickup" label="取餐">
查看取餐订单，以及 `查看`、`拒绝`、`接受`、`备餐`、`取餐` 和 `创建` 等操作按钮。
  </TabItem>
</Tabs>

## 步骤

1. 在左侧菜单点击 `在线订单`。
2. 选择 `服务器` 或 `取餐`。
3. 查看当前订单状态。
4. 打开目标订单，并执行需要的操作（`接受`、`备餐`、`取餐` 等）。
5. 操作后确认列表状态已更新。

`Accept`、`Reject`、`Prepare` 和 `Pick up` 使用 `网上订单操作` 权限。`Create` 使用 `ODO 取餐订单` 权限。

## 你应该会看到

- 顶部有 `服务器` 和 `取餐` 选项卡
- 状态和列表会根据当前选项卡刷新

:::note[Screenshot pending]
Needed files: `client/cl-28-online-orders-server-tab.png`, `client/cl-29-online-orders-pickup-actions.png`
:::

## 出现问题时

:::warning[状态没有更新]
先刷新一次，确认网络正常，然后再重试该操作。
:::

:::warning[`权限不足`]
请经理/管理员在 HQ `POS Users` 检查你的 POS 用户群组。除非门店制度允许，否则不要改用其他员工账号处理在线订单。
:::

## 何时找经理/管理员

- 重试后订单仍然卡在同一状态
- 预期订单缺少渠道/取餐操作
- POS 对在线订单操作显示 `权限不足`
- 对拒绝/取消处理需要门店策略决定
