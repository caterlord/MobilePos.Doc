---
title: 配置支付设备
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
经理或授权员工在 `设备` -> `支付设备` 中配置付款终端机时使用。
:::

## 开始前

- 你已登录，并拥有设备设置权限。
- `收银机代码` 已设置。
- 相关付款方式/网关已在门店设置中启用。

## 步骤

1. 打开 `设备`。
2. 打开 `支付设备` 页签。
3. 选择目标设备行。
4. 点按 `信息` 检查状态，或点按编辑图标进行配置。
5. 保存更改后，再次检查状态。

## 你应该看到什么

- 支付设备列表会显示状态指示。
- 每一行都会显示 `信息` 和编辑操作。
- 不可用设备上会显示不可用状态标记（`!`）。

> 截图待补充：`client/cl-34-devices-payments-tab-list.png`

## 常见编辑对话框

<Tabs>
  <TabItem value="linkly-eftpos" label="Linkly EFTPOS 终端机">
常见字段和操作包括：

- `环境`（`生产环境` / `沙盒环境`）
- `用户名`
- `密码`
- `配对码`
- `配对` / `取消配对`
- `POS 名称`、`POS 版本`、`POS ID`、`POS 供应商 ID`

配对成功后，请保存设置，并确认设备仍然显示为 `支付设备` 页签中的可用状态。

> 截图待补充：`functions/fn-payment-linkly-terminal-dialog.png`
  </TabItem>
  <TabItem value="octopus-v3" label="八达通 V3 读卡器">
常见字段包括 `IP 地址`、`端口`、`API ID`、`API Token` 以及八达通相关开关。

> 截图待补充：`functions/fn-payment-octopus-v3-reader-dialog.png`
  </TabItem>
  <TabItem value="other-ecr" label="其他支付终端机">
通用对话框通常包含 `连接`、`IP 地址` 和 `端口` 等连接设置。

> 截图待补充：`functions/fn-payment-generic-device-dialog.png`
  </TabItem>
</Tabs>

## 如果出现问题

:::warning[设备未显示在支付设备页签中]
支付设备是否显示，可能取决于是否已启用关联网关。
:::

## 何时需要找经理／管理员

- 缺少需要的付款终端机类型
- 设置保存成功，但设备仍然不可用
