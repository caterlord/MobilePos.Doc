---
sidebar_position: 4
title: 版本说明
---

本页按发布批次记录手册变更。

## 2026-04-02（v1.7.7 对齐）

### 更新内容

- `Settings`：补充 `Printing` -> `Setting` -> `Auto Print Receipt`。
- `Settings`：补充 `Report` -> `Daily Report Sections`、`Show advanced sections`，以及相关的日结报表区块控制。
- `Day-end`（`client` 与 `functions`）：说明日结输出会依照 `Report` 设定。
- `Function and Feature Map`：更新 `Settings` 范围，纳入自动列印收据与可配置的日结报表区块。

### 截图更新

- 新增收据自动列印开关与 `Report` 日结区块设定的待补截图。

### 已检查

- 复查新推出的手动 `±` 按钮与数字输入对话框的现有覆盖。现有操作页面没有单独说明这个对话框，因此这一轮无需新增独立页面。

### 写作整理

- 重新检查操作页面中的版本型提示框，并将发布历史保留在本页。

## 2026-03-25（Issue #82 设置模式说明）

### 更新内容

- `Settings`：补充在 `Restaurant` 与 `Quick Order` 终端模式之间切换的操作说明，以及相关的 `General` 设定，说明桌台优先与直接开单流程的差异。
- `Function and Feature Map`：更新 `Settings` 范围，纳入终端模式与快速订单相关的常规开关。

### 截图更新

- 新增 `Operation` -> `Terminal` 模式选择，以及相关 `General` 点餐模式开关的待补截图。

### 写作整理

- 重新检查 `Settings` 指南与当前 UI 标签是否一致，并把新的模式说明保留在设置页面里，不分散成版本注记。

## 2026-03-24（v1.7.6 对齐）

### 更新内容

- `Sales Flow`：补充外带 `Order Contact` 的可用位置，并说明已保存的联络资料会显示在外带订单标题下方。
- 新增功能指南：`Order Contact`，用于在外带订单上保存客户 `Name` 与 `Phone`。
- `Settings`：补充 `Printing` -> `Setting` 中 `Show Order Contact On Receipt` 与 `Show Order Contact On Kitchen Output`，以及收据模板字体里的 `Customer Contact` 项目。
- `Function and Feature Map`：更新点餐与设置范围，涵盖外带联络资料与列印控制。

### 截图更新

- 新增外带订单联络资料输入／结果，以及订单联络列印开关的待补截图。

### 写作整理

- 重新检查操作页面中的版本型提示框，并将发布历史保留在本页。

## 2026-03-15（v1.7.5 复核）

### 已复核

- 检查 `v1.7.5` 发布说明与原始变更，确认用户可见变动。
- 复查使用弹窗标题、输入提示、选择列表、日期／时间选择器、载入对话框，以及分页式 `Select Function` 对话框的流程。

### 结果

- 这次发布不需要调整操作说明。
- 没有 UI 标签、按钮名称或步骤从 `v1.7.4` 基线变更。
- 现有截图与待补截图请求仍然有效。

### 写作整理

- 重新检查操作页面中的版本型提示框，并将发布历史保留在本页。

## 2026-03-13（v1.7.4 对齐）

### 更新内容

- `Sales Flow`：补充分页式 `Select Function` 行为，新增 `Order Remark`，并说明保存后的订单备注如何再次编辑。
- `Checkout and Payments`：补充分页式 `Payment Methods` 选择，以及当前 `Payment Remark`／`Deposit Remark` 的输入位置。
- 功能菜单指南（`Apply Discount`、`Apply Service Charge`、`Member Login`、`Split or Merge Transaction`、`To Dine-In or To Takeaway`、`Void vs Return`、`Refunds and Voids`）：更新入口步骤，使其符合分页式 `Select Function` 对话框。
- `Change Table`：补充选择器对话框中 `Table List` 与 `Floor Plan` 的切换，以及 `Show Split` / `Hide Split` 行为。
- `Function and Feature Map`：更新点餐与结账范围，涵盖选择器分页与备注流程。

### 截图更新

- 新增功能选择器分页、订单备注显示／编辑、结账付款备注编辑按钮，以及更换桌台对话框视图切换的待补截图。

### 写作整理

- 重新检查操作页面中的版本型提示框，并将发布历史保留在本页。

## 2026-03-10（v1.7.3 对齐）

### 更新内容

- `Settings`：扩展到目前的页面结构（`General`、`Operation`、`System`、`Printing`、`Third Party Platform`、`ODO`、`Report`），补充从备份还原、`Printing` -> `Template` 的打印语言覆盖，以及已启用／已映射筛选行为。
- `Function and Feature Map`：更新 `Settings` 范围，纳入还原动作、打印语言覆盖、仅显示已启用整合清单，以及仅显示已映射的 ODO 渠道映射清单。

### 写作整理

- 重新检查操作页面中的版本型提示框，并将发布历史保留在本页。

## 2026-03-06（v1.7.2 对齐）

### 更新内容

- `Settings`：补充 `System` -> `Number` 的 `Rounding Method`、`Decimal Places` 与 `Round For Cash Only`。
- `Checkout and Payments`：说明只在现金参与当前付款时才套用仅现金四舍五入规则，并补充结账期间的总额即时刷新行为。
- `Payment Errors and Retry`：说明透过返回或导航离开结账时的预期解锁行为，并加入只现金四舍五入规则的背景说明。

### 写作整理

- 重新检查操作页面中的旧版本提示框；这一轮没有其他需要转换的版本注记。

## 2026-03-05（v1.7.1 对齐）

### 更新内容

- `Settings`：补充语言配置版面与任务流程。
- `Access and Navigation` + `Sign In`：补充登录页快速切换语言说明。
- `Sales Flow`：说明品项名称会跟随所选语言与品项映射（`Main` / `Alt`）。
- `Function and Feature Map` + `Terminology`：补充语言／品项映射／快速切换的参考。

### 写作整理

- 重新检查操作页面中的旧版本提示框，并将发布历史保留在本页。

## 2026-03-05（v1.7.0 对齐）

### 更新内容

- `Configure Payment Devices`：补充 `Linkly EFTPOS Terminal` 设定流程（配对与保存检查）。
- `Devices`：说明 `Payments` 页签包含 Linkly EFTPOS 终端设定。
- `Checkout and Payments`：说明 `Split By Item` 在还有未送出品项时也可以继续。
- `Payment Errors and Retry`：新增 EFTPOS 终端处理说明（先等待终端／POS 结果，再重试）。
- `Info`：说明日志导出会在可用时包含 Octopus 日志。

### 写作整理

- 移除了旧的版本限定提示（例如 `v1.6.5+`、`v1.6.6+`），并把行为合并到正常基线说明中。

## 2026-02-27（新增数据保留指南）

### 新增

- 新增参考页面：`Data Retention and Storage`，说明本地日志、媒体快取、本地数据库保留，以及支援上传。

### 更新

- `Info`、`Troubleshooting` 与 `Function and Feature Map` 现在都会链接到保留指南，方便快速查询政策。

## 2026-02-27（v1.6.6 对齐）

### 更新内容

- `Sales Flow`：补充桌台页面上的 `Floor Plan` / `Table List` 切换。
- `Info`：更新日志工作流程，符合目前的 `Export`、`Upload` 与 `Remove` 动作。
- `Info`：补充本地导出与云端上传的支援路径说明。

### 截图更新

- 新增桌台视图切换与更新后日志选取／上传画面相关的待补截图。

## 2026-02-22（v1.6.5 对齐）

### 更新内容

- `First-Time Initialization`：说明所选语言会在设置期间立即生效，且设置文字会跟着本地化。
- `Day-end`（`client` 与 `functions`）：说明选定日期处理行为，以及已结日日期的重复日结阻挡。
- `Troubleshooting`：新增 `Day-end has already been processed for the selected day` 的说明。

## 2026-02-21（英文草稿更新）

### 新增

- 新增入门指南：`Quick Start (15 mins)`
- 新增 SOP 页面：`Daily Operations`
- 新增完整功能索引：`Function and Feature Map`
- 新增版本追踪页面
- 初始化流程更新为 7 个步骤，包含语言选择
- 新增首次订单资料同步流程

### 强化

- 故障排查重写为决策式说明
- 退款／作废与日结页面加入 `Do / Don't` 保护说明
- 角色／权限说明重写为收银员与经理的实务边界
- 截图映射与最新提供的画面对齐

### 待补

- 剩余截图列在 `SCREENSHOT_PREP_LIST_EN.md`
- HQ 文档会在 HQ 流程定稿后继续扩充
