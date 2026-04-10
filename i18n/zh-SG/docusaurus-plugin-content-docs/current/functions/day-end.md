---
sidebar_position: 6
title: 日结
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger[经理专用]
日结不可逆，且只能由经理角色执行。
:::

## 开始前

- 所有进行中的订单都已经处理完
- 没有付款卡在不确定状态
- `Settings` -> `Report` 已设定门市需要的日结区块

## 步骤

1. 打开 `More Tools`。
2. 点按 `Day-end`。

<Tabs>
  <TabItem value="current-day" label="当前日期日结">
1. 点按 `Day-end current`。
2. 确认警告提示。
3. 等待完成。
  </TabItem>
  <TabItem value="selected-day" label="指定日期日结">
1. 选择目标日期。
2. 点按 `Day-end selected day`。
3. 确认警告提示。
4. 等待完成。
  </TabItem>
</Tabs>

:::tip[指定日期的行为]
报表现在会依你选择的营业日期正确结算。  
如果该日期已经日结过，系统会阻止重复处理。
:::

:::note[列印报表内容]
日结列印内容会跟随 `Settings` -> `Report` -> `Daily Report Sections`。
如果某个区块没有列印出来，请先检查该设定，再在下一营业日使用修正后的配置。
:::

## 你应该会看到

![Day-end dialog](/img/manual/en/client/cl-24-day-end-dialog.png)
![Day-end irreversible warning](/img/manual/en/client/cl-25-day-end-warning.png)

## 如果出现问题

:::warning[无法继续]
重新检查营业日期与未处理交易，然后再重试一次。
:::

:::warning[`Day-end has already been processed for the selected day`]
选择其他日期，或查看该日期的既有日结报表。
:::

:::warning[列印报表缺少区块]
检查 `Settings` -> `Report`，尤其是 `Daily Report Sections` 与 `Show advanced sections`，然后用修正后的设定执行下一次日结。
:::

## 什么时候要找管理员

- 营业日期看起来不正确
- 经理检查后日结仍然被阻挡
- 指定日期的营业额或报表结果不一致
