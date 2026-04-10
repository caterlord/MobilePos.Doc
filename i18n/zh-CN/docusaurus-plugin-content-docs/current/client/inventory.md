---
title: 库存
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
负责售罄和限量项目管理的经理和授权员工。
:::

## 开始前

- 你已经登录
- 你可以从左侧菜单进入 `库存`
- 门店制度允许在 POS 端覆盖库存状态

## 这个页面的用途

使用 `库存` 在营业期间管理临时可售状态。

## 主要视图

<Tabs>
  <TabItem value="sold-out" label="售罄">
管理完全不可用的项目。
  </TabItem>
  <TabItem value="limited-item" label="限量商品">
管理带有配额/剩余数量控制的项目。
  </TabItem>
</Tabs>

## 步骤

1. 点击 `库存`。
2. 选择 `售罄` 或 `限量商品`。
3. 使用分类或搜索找到目标项目。
4. 执行需要的操作（`取消`、`编辑`、`重设` 或批量操作）。
5. 确认列表中的项目状态已更新。

## 你应该会看到

- 项目列表中有 `名称`、`配额` 和 `剩余` 等列
- 批量操作可用时会出现 `全部取消` / `全部重设`

:::note[Screenshot pending]
Needed files: `client/cl-30-inventory-sold-out-tab.png`, `client/cl-31-inventory-limited-item-tab.png`
:::

## 出现问题时

:::warning[项目状态看起来没有变化]
刷新列表，并确认你修改的是正确的项目/分类。
:::

## 何时找经理/管理员

- 项目可售状态与厨房/库存记录冲突
- 批量重设/取消会影响很多现有订单
