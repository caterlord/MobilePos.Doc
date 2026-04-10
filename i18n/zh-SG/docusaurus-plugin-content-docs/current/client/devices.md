---
title: 设备
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
检查打印机与连接设备的收银员和经理。
:::

## 开始前

- 你已经登录
- 设备硬件已开机并连接

## 这个画面的用途

使用 `Devices` 检查连接状态，并在营运期间维护设备设定。

:::note[范围界线]
`Devices` 只处理硬件与连接设定（打印机、付款设备、输入设备、X1 产品）。
现金控制与日结请使用 `More Tools`。
:::

## 主要页签

- `Printer`
- `Payments`
- `Input Devices`
- `X1 Products`

## 各页签用途

<Tabs>
  <TabItem value="printer" label="Printer">
用来处理打印机生命周期与队列动作：

`Add Printer`、`Info`、`Test Print`、编辑打印机、`Manage Spooler`、删除打印机。
  </TabItem>
  <TabItem value="payments" label="Payments">
用来查看与配置付款终端状态：

`Info`、编辑付款设备设定（包含 Linkly EFTPOS 终端配对／设定），以及设备不可用时的标记（`!`）。
  </TabItem>
  <TabItem value="input" label="Input Devices">
用来处理扫描器／输入设备设定：

`Info`、编辑输入设备设定（例如条码／QR 扫描器），以及设备不可用时的标记（`!`）。
  </TabItem>
  <TabItem value="x1" label="X1 Products">
用来处理面向客户与配对类产品：

`Info`、编辑 X1 产品设定，以及客显主机、取餐屏配对、Express Kiosk 配对流程。
  </TabItem>
</Tabs>

## 通用步骤

1. 从左侧菜单点按 `Devices`。
2. 选择你需要的页签。
3. 如果需要快速诊断，先点按 `Info`。
4. 执行该页签的专属动作（测试打印、编辑、配对或队列处理）。
5. 返回营运前先确认状态。

## 你应该会看到

- 带有状态指示的设备项目
- 维护用动作（例如打印测试与信息）

![Devices Printer tab](/img/manual/en/client/cl-01-devices-printer-tab.png)
![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)

:::note[其他页签待补截图]
需要文件：`client/cl-34-devices-payments-tab-list.png`, `client/cl-35-devices-input-devices-tab-list.png`, `client/cl-36-devices-x1-products-tab-list.png`
:::

## 如果出现问题

:::warning[`POS Code is required`]
打开 `Settings` -> `General`，填入 `POS Code`，点按 `Save`，然后再重试。
:::

## 什么时候要找经理／管理员

- 你无法编辑必要的设备设定
- 本地检查后测试仍然反复失败
- 不清楚该怎么配对或配置特定设备

## 相关指南

- [开班](./start-shift)
- [功能：管理打印机](../functions/manage-printers)
- [功能：配置付款设备](../functions/configure-payment-devices)
- [功能：配置输入设备](../functions/configure-input-devices)
- [功能：配置 X1 产品](../functions/configure-x1-products)
