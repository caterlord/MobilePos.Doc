---
sidebar_position: 7
---

# UI 翻译（i18n）

![UI Translations](/img/hq/online-ordering/oo_translations_page.png)

**UI 翻译** 功能让 HQ 管理员可以直接控制顾客端网页应用里显示的实际文字字串。

与其送支援单去改按钮文案，不如直接在这里覆写应用字典。

## 运作方式

顾客网页应用是用标准化的 `keys` 建立的，例如 `checkout.button.confirm`。
预设情况下，应用会从全域资料库载入英文值（`Confirm Order`）。

这个页面让您可以针对特定语言，或特定订单渠道，注入 **Override Value**。

### 逐步覆写

1. **选择语言**：挑选您要编辑的语系，例如 `Traditional Chinese (HK)`。
2. **选择订单渠道**：选择哪个店面要套用覆写，例如 `WEB`。
3. **搜寻 Key**：用搜寻栏找您要更改的文字，例如搜寻 `"Dine-In"`。
4. **输入覆写值**：在文字框里输入新的品牌文案，例如把 `"Dine-In"` 改成 `"Eat Here Today!"`。
5. 点选 **Save**。

顾客网页应用会立刻反映新的文字，不需要部署代码或更新应用。

:::warning[覆写清理]
如果您想把内容恢复成空白，请不要只留下半空的覆写栏位。若您想删除覆写并还原系统预设，请在保存前把文字框完全清空。
:::
