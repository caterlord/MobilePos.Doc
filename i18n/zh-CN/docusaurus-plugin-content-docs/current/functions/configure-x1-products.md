---
title: 配置 X1 产品
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
经理或授权员工配置 X1 产品设备时使用。
:::

## 开始前

- 你已登录，并拥有设备设置权限。
- `收银机代码` 已设置。

## 步骤

1. 打开 `设备`。
2. 打开 `X1 产品` 页签。
3. 如有需要，点按 `信息` 查看状态详情。
4. 点按目标产品设备上的编辑图标。
5. 保存配置并确认连接状态。

## 你应该看到什么

- X1 产品列表会显示状态指示。
- 每一行都会显示 `信息` 和编辑操作。

> 截图待补充：`client/cl-36-devices-x1-products-tab-list.png`

## 产品专属对话框

<Tabs>
  <TabItem value="customer-display" label="顾客显示">
会打开主机管理对话框（`顾客显示主机`），其中包含主机启用/状态、令牌、配对链接、二维码，以及 `重新生成令牌`。

> 截图待补充：`functions/fn-x1-customer-display-host-dialog.png`
  </TabItem>
  <TabItem value="pickup-display" label="取餐显示">
会打开取餐显示配置对话框，其中包含 `启用取餐显示`、`控制器模式` 和配对选项（`使用链接`、`配对`、`扫描二维码`、`重试`、`重新配对`）。

> 截图待补充：`functions/fn-x1-pickup-display-dialog.png`
  </TabItem>
  <TabItem value="express-checkout" label="快速结账自助机">
会打开自助机配对对话框（`快速结账自助机`），用于配对/移除自助机，并查看已连接/未连接状态。

> 截图待补充：`functions/fn-x1-express-checkout-kiosk-dialog.png`
  </TabItem>
</Tabs>

## 如果出现问题

:::warning[产品设备显示为未连接]
先打开 `信息`，确认主机/控制器配对值，然后再重试连接。
:::

## 何时需要找经理／管理员

- 配对资料未知或无效
- 重新配对/重试后，产品设备仍然未连接
