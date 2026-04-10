---
sidebar_position: 2
title: 开班
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
收银员和班次经理，在接第一单前准备终端。
:::

## 开始前

- 终端已开机并联网
- 你知道登录 PIN
- 至少有一台打印机可用

## 步骤

1. 输入 PIN，然后点击 `登录`。
2. 在左侧菜单打开 `设备`。
3. 进入 `打印机` 选项卡。
4. 在当前启用的打印机上点击 `测试打印`。
5. 确认没有出现 `需要收银机代码` 警告。
6. 返回 `点餐`。

<Tabs>
  <TabItem value="with-roster" label="有考勤">
1. 在登录画面点击 `考勤`。
2. 点击 `上班打卡`。
3. 继续正常登录。
  </TabItem>
  <TabItem value="without-roster" label="无考勤">
1. 如果没有显示 `考勤`，直接继续正常登录。
2. 不需要额外操作。
  </TabItem>
</Tabs>

## 你应该会看到

- `设备` 页面打开，打印机状态正常
- 出现 `测试打印` 成功消息
- `点餐` 页面正常载入桌台/订单画面

![设备打印机选项卡](/img/manual/en/client/cl-01-devices-printer-tab.png)
![添加打印机对话框](/img/manual/en/client/miss_3_device_printer_add.png)
![打印机添加成功](/img/manual/en/client/miss_4_device_printer_add_completed.png)
![打印机信息状态对话框](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![测试打印结果](/img/manual/en/client/cl-03-devices-test-print-result.png)
![设置常规中的语言与收银机代码](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

## 出现问题时

:::warning[`需要收银机代码`]
打开 `设置` -> `常规`，填写 `收银机代码`，然后点击 `保存`。
:::

:::note[打印机未就绪]
先检查纸张、机盖和网络，然后再执行一次 `测试打印`。
:::

## 何时找经理/管理员

- 你无法编辑设置（`收银机代码`、系统字段）
- 经过本地检查后打印机仍然失败
- 登录/订阅警告阻止你开班
