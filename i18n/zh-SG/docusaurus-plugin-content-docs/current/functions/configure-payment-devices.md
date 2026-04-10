---
title: 配置付款设备
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
在 `Devices` -> `Payments` 配置付款终端的经理或授权员工。
:::

## 开始前

- 你已经使用设备设定权限登录
- `POS Code` 已设定
- 相关付款方式／网关已在店铺设定中启用

## 步骤

1. 打开 `Devices`。
2. 打开 `Payments` 页签。
3. 选择目标设备列。
4. 点按 `Info` 检查状态，或点按编辑图示进行配置。
5. 保存变更并重新检查状态。

## 你应该会看到

- 付款设备列表与状态指示
- 每一列都有 `Info` 与编辑动作
- 当前不可用的设备会显示不可用标记（`!`）

> 待补截图：`client/cl-34-devices-payments-tab-list.png`

## 常见编辑对话框

<Tabs>
  <TabItem value="linkly-eftpos" label="Linkly EFTPOS Terminal">
常见栏位与动作包括：

- `Environment`（`Production` / `Sandbox`）
- `Username`
- `Password`
- `Pair Code`
- `Pair` / `Unpair`
- `POS Name`、`POS Version`、`POS ID`、`POS Vendor ID`

成功配对后，请保存设定，并确认设备在 `Payments` 页签仍显示可用。

> 待补截图：`functions/fn-payment-linkly-terminal-dialog.png`
  </TabItem>
  <TabItem value="octopus-v3" label="Octopus V3 Reader">
常见栏位包含 `IP Address`、`Port`、`API ID`、`API Token`，以及 Octopus 相关开关。

> 待补截图：`functions/fn-payment-octopus-v3-reader-dialog.png`
  </TabItem>
  <TabItem value="other-ecr" label="其他付款终端">
一般对话框会包含连接设定，例如 `Connection`、`IP Address` 与 `Port`。

> 待补截图：`functions/fn-payment-generic-device-dialog.png`
  </TabItem>
</Tabs>

## 如果出现问题

:::warning[设备没有出现在 Payments 页签]
付款设备是否显示，可能取决于已启用的连结网关。
:::

## 什么时候要找经理／管理员

- 需要的付款终端类型不见了
- 设定已保存，但设备还是不可用
