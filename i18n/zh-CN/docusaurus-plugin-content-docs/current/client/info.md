---
title: 信息
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
需要检查应用健康状态和支持资料的经理/管理员。
:::

## 开始前

- 你已经登录
- 你了解门店对调试/日志导出的规定

## 这个页面的用途

使用 `信息` 进行应用诊断和支持操作。

制度参考：[数据保留与存储](../reference/data-retention-and-storage)

## 你可以做什么

- 查看应用版本和更新状态
- 切换调试模式（`已启用` / `已禁用`）
- 查看离线模式状态，并在可用时点击 `立即恢复在线`
- 打开日志文件选择器，准备支持资料
- 将选中的日志 `导出` 到本地文件夹/下载目录（如有需要也包含八达通日志）
- 将选中的日志 `上传` 到云端支持路径
- 从设备中 `移除` 选中的日志

## 导出或上传日志

<Tabs>
  <TabItem value="export" label="导出日志（本地文件）">
1. 点击 `信息` > `导出日志`。
2. 在 `选择日志文件` 中选择一个或多个日志文件。
3. 点击 `导出`。
4. 在提示时选择导出文件夹（或使用默认下载路径）。
5. 等待完成消息：`日志已导出至 ...`。
  </TabItem>
  <TabItem value="upload" label="上传日志（支持）">
1. 点击 `信息` > `导出日志`。
2. 选择支持人员要求的文件。
3. 点击 `上传`。
4. 等待完成消息：`日志已上传至 ...`。

当支持人员要求你直接把日志上传到云端时，使用这个路径。
  </TabItem>
  <TabItem value="remove" label="移除旧日志文件">
1. 点击 `信息` > `导出日志`。
2. 选择旧的或不需要的日志文件。
3. 点击 `移除`。
4. 确认移除。

只移除支持人员不再需要的文件。
  </TabItem>
</Tabs>

## 步骤

1. 点击 `信息`。
2. 选择需要的操作（版本 / 调试 / 离线 / 日志操作）。
3. 在屏幕上确认结果。

## 你应该会看到

:::note[Screenshot pending]
Needed file: `client/cl-33-info-page-version-debug-offline-export.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-38-info-log-file-selection-export-upload-remove.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-39-info-log-upload-success-message.png`
:::

## 出现问题时

:::warning[恢复在线/导出失败]
检查网络和存储权限，然后再重试一次。
:::

:::warning[上传失败]
确认网络稳定，再重试一次，并保留错误信息给支持人员。
:::

## 何时找经理/管理员

- 更新状态显示不正确
- 日志导出/上传反复失败
- 无法恢复在线模式
