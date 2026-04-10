---
title: 管理打印机
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
经理或授权员工在 `设备` -> `打印机` 中进行打印机设置和维护时使用。
:::

## 开始前

- 你已登录，并拥有设备设置权限。
- 目标打印机已开机，并连接到同一网络。
- `收银机代码` 已设置。

## 快速流程

1. 打开 `设备`。
2. 打开 `打印机` 页签。
3. 选择打印机所在行，或者点按 `添加打印机`。
4. 执行所需操作（`信息`、`测试打印`、编辑、移除或打印队列）。
5. 返回营运前，先确认状态。

## 任务

<Tabs>
  <TabItem value="add-printer" label="添加打印机">
1. 点按 `添加打印机`。
2. 填写 `名称`、`打印机类型`、`连接`、`IP 地址` 和 `端口`。
3. 点按 `保存`。
4. 点按 `测试打印`。

需要确认：

- 打印机已出现在列表中
- 状态显示为已连接/已就绪
- 显示测试打印成功消息

![添加打印机对话框](/img/manual/en/client/miss_3_device_printer_add.png)
![打印机添加成功](/img/manual/en/client/miss_4_device_printer_add_completed.png)
  </TabItem>
  <TabItem value="info-status" label="打印机信息与状态">
1. 点按目标打印机所在行的 `信息`。
2. 查看 `连接详情` 和 `状态详情`。
3. 点按 `关闭`。

需要确认：

- `类型`、`地址`、`状态` 和 `最后检查` 都正确

![打印机信息状态对话框](/img/manual/en/client/cl-02-devices-printer-info-status.png)
  </TabItem>
  <TabItem value="test-print" label="测试打印">
1. 点按目标打印机所在行的 `测试打印`。
2. 等待结果消息。
3. 确认实体测试单已输出。

需要确认：

- 成功消息：`已成功向 '<打印机名称>' 发送测试打印`

![测试打印结果](/img/manual/en/client/cl-03-devices-test-print-result.png)
  </TabItem>
  <TabItem value="edit-remove" label="编辑或移除打印机">
1. 点按编辑图标，更新 `名称`、`打印机类型`、`连接`、`IP 地址` 和 `端口`。
2. 点按 `保存`。
3. 如需移除，点按删除图标。
4. 确认移除提示。

需要确认：

- 更新后的设置会显示在打印机所在行
- 已移除的打印机会从列表中消失

> 截图待补充：`functions/fn-printer-remove-confirm-dialog.png`
  </TabItem>
  <TabItem value="spooler" label="管理打印队列">
1. 点按目标打印机所在行的 `管理打印队列`。
2. 查看页签：`打印中`、`历史`、`错误`。
3. 使用所需操作：
   - `刷新`
   - `清除选择`
   - `删除已选`
   - `全部删除`
4. 在 `错误` 页签中，使用重试操作：
   - `全选`
   - `重试已选`
   - `重试全部`

需要确认：

- 在重试/删除后，队列会减少
- 新的打印任务会正常处理

> 截图待补充：`functions/fn-printer-spooler-manager-dialog.png`
> 截图待补充：`functions/fn-printer-spooler-error-retry-actions.png`
  </TabItem>
</Tabs>

## 如果出现问题

:::warning[测试打印失败]
先检查 IP/端口、纸张、打印机盖和网络，然后重试一次。
:::

:::warning[状态仍然显示未连接]
先确认打印机电源和网络，然后运行 `测试打印`。
:::

:::note[打印队列重试无法清除错误任务]
请删除失败任务、确认连接正常，然后重新发送订单/打印请求。
:::

:::warning[移除打印机失败]
如果部分移除失败，请刷新打印机列表，并确认打印队列文件是否仍然存在。
:::

## 何时需要找经理／管理员

- 需要 `收银机代码`，但你无法编辑设置。
- 打印机设置保存成功，但打印机仍然不可用。
- 重试/删除后，打印队列错误数量持续增加。
