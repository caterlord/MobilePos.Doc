---
sidebar_position: 6
---

# 通路對應

![通路對應](/img/hq/online-ordering/oo_channel_mapping_page.png)

**通路對應** 模組是數位菜單的路由引擎。它會將 [網上菜單](./menus-and-combinations.md) 明確對應到特定的顧客端入口。

## 什麼是訂單通路？

**訂單通路** 代表顧客下單的數位來源。常見通路包括：
- `WEB`（原生 BYOD 網頁應用程式）
- `FOODPANDA`（聚合平台 API 整合）
- `DELIVEROO`（聚合平台 API 整合）
- `APP`（白牌行動應用程式）

## 對應邏輯

這個工具可讓您依照顧客使用的應用程式，提供完全不同的菜單。

例如，您可以建立一個專門的 `Deliveroo Exclusive Menu`，只放高毛利項目來抵銷佣金，再把它專門對應到 `DELIVEROO` 通路；同時把完整的 `Standard Menu` 對應到原生 `WEB` 通路。

## 子通路設定

像 Foodpanda 這類平台，您有時也需要更細的子通路對應。如果 Foodpanda 整合要求 `Pickup Mode` 與 `Delivery Mode` 分別使用不同的對應識別，您就會直接在表格中設定 **Mapping Identity Code**。
