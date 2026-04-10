---
title: 配置 X1 产品
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
配置 X1 产品设备的经理或授权员工。
:::

## 开始前

- 你已经使用设备设定权限登录
- `POS Code` 已设定

## 步骤

1. 打开 `Devices`。
2. 打开 `X1 Products` 页签。
3. 需要时点按 `Info` 查看状态细节。
4. 点按目标产品设备的编辑图示。
5. 保存配置并确认连接状态。

## 你应该会看到

- X1 产品列表与状态指示
- 每一列都有 `Info` 与编辑动作

> 待补截图：`client/cl-36-devices-x1-products-tab-list.png`

## 各产品对话框

<Tabs>
  <TabItem value="customer-display" label="Customer Display">
会打开客显主机管理对话框（`Customer Display Host`），里面有主机启用／状态、Token、配对连结、QR，以及 `Regenerate token`。

> 待补截图：`functions/fn-x1-customer-display-host-dialog.png`
  </TabItem>
  <TabItem value="pickup-display" label="Pickup Display">
会打开取餐屏设定对话框，里面有 `Enable pickup display`、`Controller mode`，以及 `Use link`、`Pair`、`Scan QR`、`Retry`、`Re-pair` 等配对选项。

> 待补截图：`functions/fn-x1-pickup-display-dialog.png`
  </TabItem>
  <TabItem value="express-checkout" label="Express Checkout Kiosk">
会打开 Express 结账 Kiosk 配对对话框（`Express Checkout Kiosks`），用来配对或移除 Kiosk，并查看已连接／未连接状态。

> 待补截图：`functions/fn-x1-express-checkout-kiosk-dialog.png`
  </TabItem>
</Tabs>

## 如果出现问题

:::warning[产品设备显示离线]
打开 `Info`，确认主机／控制器配对值后，再重试连接。
:::

## 什么时候要找经理／管理员

- 你不知道或没有正确的配对资料
- 重新配对／重试后，产品设备仍然离线
