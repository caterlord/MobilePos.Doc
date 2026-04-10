---
title: 信息
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
检查应用健康状态与支援资料的经理／管理员。
:::

## 开始前

- 你已经登录
- 你知道门市对除错／日志导出的政策

## 这个画面的用途

使用 `Info` 进行应用诊断与支援动作。

政策参考：[数据保留与存储](../reference/data-retention-and-storage)

## 你可以做什么

- 查看应用版本与更新状态
- 切换调试模式（`Enabled` / `Disabled`）
- 查看离线模式状态，并在可用时点按 `Reactivate now`
- 打开日志文件选取器以取得支援资料
- 将选取的日志 `Export` 到本机资料夹／下载区（可包括 Octopus 日志）
- 将选取的日志 `Upload` 到云端支援路径
- 将选取的日志从设备中 `Remove`

## 导出或上传日志

<Tabs>
  <TabItem value="export" label="导出日志（本机档案）">
1. 点按 `Info` > `Export Logs`。
2. 在 `Select Log Files` 选择一个或多个日志档。
3. 点按 `Export`。
4. 系统提示时选择导出资料夹（或使用预设下载路径）。
5. 等待完成讯息：`Logs exported to ...`。
  </TabItem>
  <TabItem value="upload" label="上传日志（支援）">
1. 点按 `Info` > `Export Logs`。
2. 选择支援要求的档案。
3. 点按 `Upload`。
4. 等待完成讯息：`Logs uploaded to ...`。

当支援要求你直接把日志送到云端时，请使用这条路径。
  </TabItem>
  <TabItem value="remove" label="移除旧日志">
1. 点按 `Info` > `Export Logs`。
2. 选择旧的或不需要的日志档。
3. 点按 `Remove`。
4. 确认移除。

只移除支援已经不再需要的档案。
  </TabItem>
</Tabs>

## 步骤

1. 点按 `Info`。
2. 选择需要的动作（版本／调试／离线／日志）。
3. 在画面上确认结果。

## 你应该会看到

:::note[待补截图]
需要文件：`client/cl-33-info-page-version-debug-offline-export.png`
:::

:::note[待补截图]
需要文件：`client/cl-38-info-log-file-selection-export-upload-remove.png`
:::

:::note[待补截图]
需要文件：`client/cl-39-info-log-upload-success-message.png`
:::

## 如果出现问题

:::warning[重新启用／导出失败]
先检查网络与储存权限，然后再重试一次。
:::

:::warning[上传失败]
确认网络稳定，重试一次，并保留错误讯息给支援。
:::

## 什么时候要找经理／管理员

- 更新状态看起来不正确
- 日志导出／上传反复失败
- 无法重新启用离线模式
