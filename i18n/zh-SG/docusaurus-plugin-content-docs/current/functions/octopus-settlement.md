---
sidebar_position: 9
title: 八达通结算
---

:::danger[Manager only]
只有在门市准备好核对 Octopus V3 总额时，才执行 `八达通结算`。
:::

## 开始之前

- 你已登录，并有权限使用经理级订单功能。
- 此终端已启用 Octopus V3 付款。
- Octopus V3 Reader 已开机、已连接，并处于可用状态。
- `设备编号`、`API ID` 与 `API Token` 已保存在 `设备` -> `支付设备`。

## 步骤

1. 在 `点餐` 打开一张订单。
2. 点按三个点的功能按钮。
3. 在 `选择功能` 中点按 `八达通结算`。
4. 等待 POS 向 Octopus V3 Reader 发送结算请求。
5. 查看 `八达通结算成功` 信息。
6. 确认结算总额后，再继续正常营业。

## 你应该会看到

- 只有在启用 Octopus V3 付款且读卡器可用时，才会显示 `八达通结算`。
- 结算成功后，POS 会显示 `扣款数量`、`扣款总额`、`充值数量`、`充值总额` 与结算文件名。

> 待补截图：`functions/fn-octopus-settlement-function-menu.png`
> 待补截图：`functions/fn-octopus-settlement-success.png`

## 如果出现问题

:::warning[`八达通结算` 没有显示]
打开 `设备` -> `支付设备`，确认 Octopus V3 Reader 已设定、已连接，并处于可用状态。
:::

:::warning[结算没有完成]
不要重复执行结算多次。请检查读卡器连接，记录时间和终端，然后请经理／管理员检查 Octopus logs。
:::

## 什么时候要找经理／管理员

- 你不确定今天是否已经执行过结算。
- 结算总额与预期 Octopus 活动不一致。
- 读卡器没有回应，或结果不明确。
