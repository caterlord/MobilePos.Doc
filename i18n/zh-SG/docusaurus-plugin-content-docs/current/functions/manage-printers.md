---
title: 管理打印机
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
在 `Devices` -> `Printer` 处理打印机设定与维护的经理或授权员工。
:::

## 开始前

- 你已经使用设备设定权限登录
- 目标打印机已开机并连接到同一网络
- `POS Code` 已设定

## 快速流程

1. 打开 `Devices`。
2. 打开 `Printer` 页签。
3. 选择打印机列（或点按 `Add Printer`）。
4. 执行需要的动作（`Info`、`Test Print`、编辑、删除或队列管理）。
5. 在返回营运前先确认状态。

## 任务

<Tabs>
  <TabItem value="add-printer" label="Add Printer">
1. 点按 `Add Printer`。
2. 填入 `Name`、`Printer Type`、`Connection`、`IP Address` 与 `Port`。
3. 点按 `Save`。
4. 点按 `Test Print`。

要确认的是：

- 打印机会出现在列表中
- 状态是连接／就绪
- 会出现测试打印成功讯息

![Add Printer dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
  </TabItem>
  <TabItem value="info-status" label="Printer Info and Status">
1. 点按目标打印机列上的 `Info`。
2. 检查 `Connection Details` 与 `Status Details`。
3. 点按 `Close`。

要确认的是：

- `Type`、`Address`、`Status` 与 `Last checked` 都正确

![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
  </TabItem>
  <TabItem value="test-print" label="Test Print">
1. 点按目标打印机列上的 `Test Print`。
2. 等待结果讯息。
3. 确认纸本测试单有实际印出。

要确认的是：

- 成功讯息会显示 `Test print sent to '<PrinterName>' successfully`

![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
  </TabItem>
  <TabItem value="edit-remove" label="Edit or Remove Printer">
1. 点按编辑图示，更新 `Name`、`Printer Type`、`Connection`、`IP Address` 与 `Port`。
2. 点按 `Save`。
3. 如果要移除，点按删除图示。
4. 确认移除提示。

要确认的是：

- 更新后的设定会显示在打印机列中
- 已移除的打印机会从列表中消失

> 待补截图：`functions/fn-printer-remove-confirm-dialog.png`
  </TabItem>
  <TabItem value="spooler" label="Manage Printer Spooler">
1. 点按目标打印机列上的 `Manage Spooler`。
2. 检查分页：`Printing`、`History`、`Error`。
3. 视需要使用以下动作：
   - `Refresh`
   - `Clear Selection`
   - `Remove Selected`
   - `Remove All`
4. 在 `Error` 页签中，使用重试动作：
   - `Select All`
   - `Retry Selected`
   - `Retry All`

要确认的是：

- 重试／移除动作后，队列会减少
- 新的列印工作会正常处理

> 待补截图：`functions/fn-printer-spooler-manager-dialog.png`
> 待补截图：`functions/fn-printer-spooler-error-retry-actions.png`
  </TabItem>
</Tabs>

## 如果出现问题

:::warning[测试打印失败]
先检查 IP／Port、纸张、打印机盖与网络，然后只重试一次。
:::

:::warning[状态一直离线]
先确认打印机电源与网络，再执行 `Test Print`。
:::

:::note[队列重试没有清除错误任务]
先移除失败任务，确认连接正常，再重新送出订单／打印请求。
:::

:::warning[删除打印机失败]
如果移除只成功一半，请刷新打印机列表，并确认 spooler 文件是否还存在。
:::

## 什么时候要找经理／管理员

- 需要 `POS Code`，但你不能编辑设定
- 打印机设定已保存，但设备仍不可用
- 队列错误一直增加，重试／移除也没用
