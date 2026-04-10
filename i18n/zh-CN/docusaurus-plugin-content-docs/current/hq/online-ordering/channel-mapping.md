---
sidebar_position: 6
---

# 渠道对映

![Channel Mapping](/img/hq/online-ordering/oo_channel_mapping_page.png)

**渠道对映** 模组是您数码目录的路由引擎。它会明确把您的 [Online Menus](./menus-and-combinations.md) 对映到特定顾客端入口。

## 什么是订单渠道？

**订单渠道** 代表顾客下单的数码来源。标准渠道包括：
- `WEB`（原生 BYOD 网页应用）
- `FOODPANDA`（聚合平台 API 整合）
- `DELIVEROO`（聚合平台 API 整合）
- `APP`（白牌手机应用）

## 对映逻辑

这个工具让您可以依据顾客使用的应用，提供完全不同的菜单。

例如，您可以建立一个只包含高毛利商品的 `Deliveroo Exclusive Menu`，用来抵销佣金费用，并把它专门对映到 `DELIVEROO` 渠道；同时把完整的 `Standard Menu` 对映到原生 `WEB` 渠道。

## 子渠道设置

像 Foodpanda 这类平台，可能还需要更细的子渠道对映。如果 Foodpanda 整合需要区分 "Pickup Mode" 和 "Delivery Mode"，您就会在网格里直接设置 **Mapping Identity Code**。
