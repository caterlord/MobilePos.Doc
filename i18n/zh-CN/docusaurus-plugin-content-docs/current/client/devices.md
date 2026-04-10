---
title: 设备
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
需要检查打印机和连接设备的收银员与经理。
:::

## 开始前

- 你已经登录
- 设备硬件已通电并连接

## 这个页面的用途

使用 `设备` 来检查连接状态，并在营业中维护设备配置。

:::note[范围说明]
`设备` 只负责硬件和连接设置（打印机 / 支付设备 / 输入设备 / X1 产品）。
现金控制和日结请使用 `更多工具`。
:::

## 主要选项卡

- `打印机`
- `支付设备`
- `输入设备`
- `X1 产品`

## 各选项卡怎么用

<Tabs>
  <TabItem value="printer" label="打印机">
用于打印机的新增、查看和队列操作：

`添加打印机`、`信息`、`测试打印`、编辑打印机、`管理打印队列` 和移除打印机。
  </TabItem>
  <TabItem value="payments" label="支付设备">
用于查看和配置支付终端状态：

`信息`、编辑支付设备设置（包括 Linkly EFTPOS 终端配对/设置），以及设备不可用时的标记（`!`）。
  </TabItem>
  <TabItem value="input" label="输入设备">
用于扫描器/输入设备设置：

`信息`、编辑输入设备设置（例如条码/二维码扫描器），以及设备不可用时的标记（`!`）。
  </TabItem>
  <TabItem value="x1" label="X1 产品">
用于面向顾客的配对产品：

`信息`、编辑 X1 产品设置，以及顾客显示主机、取餐显示配对和快速结账自助机配对流程。
  </TabItem>
</Tabs>

## 通用步骤

1. 在左侧菜单点击 `设备`。
2. 选择你需要的选项卡。
3. 如果要快速诊断，先点 `信息`。
4. 执行该选项卡对应的操作（测试打印 / 编辑 / 配对 / 队列）。
5. 返回营业前，先确认状态正常。

## 你应该会看到

- 带有状态标记的设备条目
- 用于维护的操作（例如打印机测试 / 信息）

![设备打印机选项卡](/img/manual/en/client/cl-01-devices-printer-tab.png)
![打印机信息状态对话框](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![测试打印结果](/img/manual/en/client/cl-03-devices-test-print-result.png)

:::note[Screenshot pending for other tabs]
Need files: `client/cl-34-devices-payments-tab-list.png`, `client/cl-35-devices-input-devices-tab-list.png`, `client/cl-36-devices-x1-products-tab-list.png`
:::

## 出现问题时

:::warning[`需要收银机代码`]
进入 `设置` -> `常规`，填写 `收银机代码`，然后点击 `保存`。
:::

## 何时找经理/管理员

- 你无法编辑必填设备设置
- 本地检查后测试仍然失败
- 设备配对/配置不明确

## 相关指南

- [开班](./start-shift)
- [功能：管理打印机](../functions/manage-printers)
- [功能：配置支付设备](../functions/configure-payment-devices)
- [功能：配置输入设备](../functions/configure-input-devices)
- [功能：配置 X1 产品](../functions/configure-x1-products)
