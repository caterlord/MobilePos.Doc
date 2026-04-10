---
sidebar_position: 4
title: 版本说明
---

本页按发布/更新批次记录手册变更。

## 2026-04-02（v1.7.7 对齐）

### 更新内容

- `Settings`：补充 `Printing` -> `Setting` -> `Auto Print Receipt`。
- `Settings`：补充 `Report` -> `Daily Report Sections`、`Show advanced sections`，以及相关的日结报表内容控制。
- `Day-end`（`client` 和 `functions`）：说明打印的日结内容遵循 `Report` 设置。
- `Function and Feature Map`：更新 `Settings` 范围，纳入收据自动打印和可配置的日结报表区块。

### 截图更新

- 为新的收据自动打印开关和 `Report` 日结区块设置添加待补截图。

### 已复查

- 对照当前手册内容检查了数字输入对话框中的新手动价格 `±` 按钮。现有操作页面尚未涵盖该对话框，因此本批次没有新增独立页面。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-25（Issue #82 设置模式指引）

### 更新内容

- `Settings`：补充在 `Restaurant` 与 `Quick Order` 终端模式之间切换的操作说明，并包含控制“先选桌”与“直接点单”流程的相关 `General` 设置。
- `Function and Feature Map`：更新 `Settings` 范围，纳入终端模式与快速点餐相关的通用开关。

### 截图更新

- 为 `Operation` -> `Terminal` 模式选择和相关 `General` 点餐模式开关添加待补截图。

### 写作整理

- 重新对照当前 UI 标签检查了设置指南，并把新的模式说明保留在设置页面指南中，没有分散到其他位置。

## 2026-03-24（v1.7.6 对齐）

### 更新内容

- `Sales Flow`：在功能菜单中补充外卖 `Order Contact` 的可用性，并说明已保存的联系人信息会显示在外卖订单标题下。
- 新功能页：`Order Contact`，用于在外卖订单中保存客户 `Name` 和 `Phone`。
- `Settings`：补充 `Printing` -> `Setting` 中 `Show Order Contact On Receipt` 与 `Show Order Contact On Kitchen Output` 的开关，以及收据模板字体设置中的 `Customer Contact` 行。
- `Function and Feature Map`：更新点餐与设置范围，纳入外卖联系人采集与打印控制。

### 截图更新

- 为外卖订单联系人录入/结果，以及打印联系人开关添加待补截图。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-15（v1.7.5 复查）

### 已复查

- 检查 `v1.7.5` 发布说明和源代码差异中的用户可见变更。
- 重新检查依赖弹窗标题、输入提示、选择列表、日期/时间选择器、加载对话框，以及分页式 `Select Function` 对话框的流程。

### 结论

- 本次发布不需要调整操作说明。
- 相较 `v1.7.4` 基线，没有 UI 标签、按钮名称或用户步骤变化。
- 现有截图与待补截图请求仍可继续用于文档。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-13（v1.7.4 对齐）

### 更新内容

- `Sales Flow`：记录分页式 `Select Function` 行为，新增 `Order Remark`，并说明已保存的订单备注在哪里可以编辑。
- `Checkout and Payments`：记录从 `More` 打开分页式 `Payment Methods` 的选择流程，以及当前 `Payment Remark` / `Deposit Remark` 的输入入口。
- 功能菜单指南（`Apply Discount`、`Apply Service Charge`、`Member Login`、`Split or Merge Transaction`、`To Dine-In or To Takeaway`、`Void vs Return`、`Refunds and Voids`）：更新进入步骤，使其符合分页式 `Select Function` 对话框。
- `Change Table`：记录选择器对话框在 `Table List` 和 `Floor Plan` 之间的切换，以及 `Show Split` / `Hide Split` 行为。
- `Function and Feature Map`：更新点餐与结账范围，涵盖选择器分页与备注流程。

### 截图更新

- 为功能选择器分页、订单备注显示/编辑、结账付款备注编辑按钮，以及改桌对话框视图切换添加待补截图。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-10（v1.7.3 对齐）

### 更新内容

- `Settings`：扩展以覆盖当前区块布局（`General`、`Operation`、`System`、`Printing`、`Third Party Platform`、`ODO`、`Report`）、从备份还原流程、`Printing` -> `Template` 中的打印语言覆盖，以及已映射/已启用的筛选行为。
- `Function and Feature Map`：更新 `Settings` 范围，纳入还原操作、打印语言覆盖、仅显示已启用的集成列表，以及仅显示已映射的 ODO 通路映射列表。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-06（v1.7.2 对齐）

### 更新内容

- `Settings`：补充 `System` -> `Number` 中 `Rounding Method`、`Decimal Places` 和 `Round For Cash Only` 的说明。
- `Checkout and Payments`：说明仅现金四舍五入的行为，以及结账变更过程中 `Rounding` 总额应实时更新。
- `Payment Errors and Retry`：说明通过返回或导航离开结账时桌台的预期解锁行为，并补充仅现金四舍五入规则的背景。

### 写作整理

- 重新检查操作页面中的旧版本提示框；本批次没有其他旧版本提示需要转换。

## 2026-03-05（v1.7.1 对齐）

### 更新内容

- `Settings`：记录重新设计的语言配置布局和任务流程。
- `Access and Navigation` + `Sign In`：补充登录时快速切换语言的说明。
- `Sales Flow`：说明品项名称会跟随所选语言，以及品项映射（`Main` / `Alt`）。
- `Function and Feature Map` + `Terminology`：补充语言/品项映射/快速切换参考。

### 写作整理

- 重新检查操作页面中的旧版本提示框，并将发布历史仅保留在本页。

## 2026-03-05（v1.7.0 对齐）

### 更新内容

- `Configure Payment Devices`：新增 `Linkly EFTPOS Terminal` 设置流程（配对与保存检查清单）。
- `Devices`：说明 `Payments` 标签页包含 Linkly EFTPOS 终端设置。
- `Checkout and Payments`：说明即使有未送出的行，`Split By Item` 也可以继续。
- `Payment Errors and Retry`：新增 EFTPOS 终端处理说明（重试前先等待终端/POS 结果）。
- `Info`：说明日志导出在可用时包含 Octopus 日志。

### 写作整理

- 移除了操作提示/标题中的旧版版本标签（例如 `v1.6.5+`、`v1.6.6+`），并将相关行为合并到普通基线说明中。

## 2026-02-27（新增数据保留指南）

### 新增

- 新增参考页面：`Data Retention and Storage`，说明本地日志、媒体缓存、本地数据库保留以及支持上传。

### 更新

- `Info`、`Troubleshooting` 和 `Function and Feature Map` 现在都会链接到保留指南，方便快速查找政策。

## 2026-02-27（v1.6.6 对齐）

### 更新内容

- `Sales Flow`：补充桌台页面上的 `Floor Plan`/`Table List` 切换行为。
- `Info`：更新日志流程，以匹配当前应用的 `Export`、`Upload` 和 `Remove` 已选日志文件操作。
- `Info`：说明本地导出与云端上传的支持路径预期。

### 截图更新

- 为桌台视图切换和更新后的日志选择/上传 UI 状态添加新的待补截图。

## 2026-02-22（v1.6.5 对齐）

### 更新内容

- `First-Time Initialization`：说明在设置过程中选择的语言会立即生效，且设置文字会本地化。
- `Day-end`（`client` 和 `functions`）：说明所选日期的处理行为，以及已结账日期会被阻止重复日结。
- `Troubleshooting`：新增 `Day-end has already been processed for the selected day` 的说明。

## 2026-02-21（英文草稿刷新）

### 新增

- 新增入门指南：`Quick Start (15 mins)`
- 新增 SOP 页面：`Daily Operations`
- 新增完整功能索引：`Function and Feature Map`
- 新增版本跟踪页面
- 初始化流程更新为 7 步，并加入语言选择
- 初始化后的订单数据同步流程

### 增强

- 故障排查改写为决策式指引
- 退货/作废和日结页面现在包含 `Do / Don't` 规则
- 角色/权限指引改写为更贴近操作的收银员 vs 经理边界
- 截图映射已与最新提供的截图对齐

### 待办

- 剩余截图列在 `SCREENSHOT_PREP_LIST_EN.md`
- HQ 工作流程定稿后再扩展 HQ 文档
