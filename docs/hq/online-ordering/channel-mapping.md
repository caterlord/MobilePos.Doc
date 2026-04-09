---
sidebar_position: 6
---

# Channel Mapping

![Channel Mapping](/img/hq/online-ordering/oo_channel_mapping_page.png)

The **Channel Mapping** module is the routing engine for your digital catalog. It explicitly maps your [Online Menus](./menus-and-combinations.md) to specific consumer endpoints.

## What is an Order Channel?
An **Order Channel** represents the digital source from where a customer placed the order. Standard channels include:
- `WEB` (Native BYOD Web-App)
- `FOODPANDA` (Aggregator API Integration)
- `DELIVEROO` (Aggregator API Integration)
- `APP` (White-label Mobile Application)

## Mapping Logic
This tool allows you to serve completely different menus depending on what app the customer is using. 

For example, you can create a specialized `Deliveroo Exclusive Menu` containing only high-margin items to offset commission fees, and map it specifically to the `DELIVEROO` channel, while mapping your full exhaustive `Standard Menu` to your native `WEB` channel.

## Sub-Channel Configurations
For platforms like Foodpanda, you might also require granular sub-channel mappings. If Foodpanda integration requires separate mapping identities for "Pickup Mode" versus "Delivery Mode", you will configure the **Mapping Identity Code** directly in the grid.
