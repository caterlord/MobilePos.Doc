---
sidebar_position: 6
---

# 通路对映

![Channel Mapping](/img/hq/online-ordering/oo_channel_mapping_page.png)

**通路对映** 模组是您数码目录的路由引擎。它会明确把您的 [Online Menus](./menus-and-combinations.md) 对映到特定顾客端入口。

## 什么是订单通路？

**订单通路** 代表顾客下单的数码来源。标准通路包括：
- `WEB`（原生 BYOD 网页应用）
- `FOODPANDA`（聚合平台 API 整合）
- `DELIVEROO`（聚合平台 API 整合）
- `APP`（白牌手机应用）

## 对映逻辑

这个工具让您可以依据顾客使用的应用，提供完全不同的菜单。

例如，您可以建立一个只包含高毛利商品的 `Deliveroo Exclusive Menu`，用来抵销佣金费用，并把它专门对映到 `DELIVEROO` 通路；同时把完整的 `Standard Menu` 对映到原生 `WEB` 通路。

## 子通路设定

像 Foodpanda 这类平台，可能还需要更细的子通路对映。如果 Foodpanda 整合需要区分 "Pickup Mode" 和 "Delivery Mode"，您就会在网格里直接设定 **Mapping Identity Code**。
