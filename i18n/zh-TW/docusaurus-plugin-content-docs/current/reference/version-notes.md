---
sidebar_position: 4
title: 版本說明
---

本頁記錄手冊變更，依照 release／更新批次整理。

## 2026-04-02 (v1.7.7 Alignment)

### Updated

- `Settings`：新增 `Printing` -> `Setting` -> `Auto Print Receipt` 的說明。
- `Settings`：新增 `Report` -> `Daily Report Sections`、`Show advanced sections`，以及相關的日結報表內容控制。
- `Day-end`（`client` 與 `functions`）：說明列印的日結內容會依照 `Report` 設定。
- `Function and Feature Map`：更新 `Settings` 範圍，涵蓋收據自動列印與可設定的日結報表區塊。

### Screenshot updates

- 新增收據自動列印切換與 `Report` 日結區塊設定的待處理截圖。

### Reviewed

- 依照目前手冊內容檢查新增的價格 `±` 按鈕與數字輸入對話框。因為現有操作頁已涵蓋該對話框，所以這次 release 不需要新增獨立頁面。

### 寫作清理

- 重新檢查操作頁面是否還有過時的版本限定提示，並保留 release 歷史只放在本頁。

## 2026-03-25 (Issue #82 設定 Mode Guidance)

### Updated

- `Settings`：新增在 `Restaurant` 與 `Quick Order` 終端機模式之間切換的操作說明，也包含控制桌台優先與直接下單流程的相關 `General` 設定。
- `Function and Feature Map`：更新 `Settings` 範圍，納入終端機模式與快速訂單相關的一般切換項目。

### Screenshot updates

- 新增 `Operation` -> `Terminal` 模式選擇與相關 `General` 訂單模式切換的待處理截圖。

### 寫作清理

- 重新檢查設定指南與目前 UI 標籤是否一致，並將新的模式說明保留在設定畫面指南中，不分散到其他版本提示。

## 2026-03-24 (v1.7.6 Alignment)

### Updated

- `Sales Flow`：新增外賣 `Order Contact` 的可用性說明，並釐清已儲存的聯絡資料會顯示在外賣訂單標題下方。
- 新增功能指南：`Order Contact`，用來在外賣訂單上儲存客戶 `Name` 與 `Phone`。
- `Settings`：新增 `Printing` -> `Setting` 切換項目，包含 `Show Order Contact On Receipt` 與 `Show Order Contact On Kitchen Output`，以及收據範本字型設定中的 `Customer Contact` 列。
- `Function and Feature Map`：更新訂單與設定範圍，納入外賣聯絡人擷取與列印控制。

### Screenshot updates

- 新增外賣訂單聯絡人輸入／結果，以及列印訂單聯絡人切換的待處理截圖。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本限定提示，並把 release 歷史只保留在本頁。

## 2026-03-15 (v1.7.5 檢查)

### Reviewed

- 檢查 `v1.7.5` release notes 與原始碼差異，確認是否有使用者可見的變更。
- 重新檢查依賴彈出視窗標題、輸入提示、選擇清單、日期／時間選擇器、載入對話框，以及分頁式 `Select Function` 對話框的流程。

### Outcome

- 這次 release 不需要調整操作說明。
- UI 標籤、按鈕名稱與使用者步驟都沒有脫離 `v1.7.4` 基線。
- 現有截圖與待處理截圖需求仍然有效，足以作為文件用途。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本限定提示，並把 release 歷史只保留在本頁。

## 2026-03-13 (v1.7.4 Alignment)

### Updated

- `Sales Flow`：記錄分頁式 `Select Function` 行為，新增 `Order Remark`，並說明已儲存的訂單備註在哪裡可以編輯。
- `Checkout and Payments`：記錄從 `More` 開啟分頁式 `Payment Methods` 的選擇流程，以及目前 `Payment Remark`／`Deposit Remark` 的輸入入口。
- 功能選單指南（`Apply Discount`、`Apply Service Charge`、`Member Login`、`Split or Merge Transaction`、`To Dine-In or To Takeaway`、`Void vs Return`、`Refunds and Voids`）：更新進入步驟，使其符合分頁式 `Select Function` 對話框。
- `Change Table`：記錄選擇器對話框可在 `Table List` 與 `Floor Plan` 之間切換，以及 `Show Split`／`Hide Split` 的行為。
- `Function and Feature Map`：更新訂單與結帳範圍，涵蓋選擇器分頁與備註流程。

### Screenshot updates

- 新增功能選擇器分頁、訂單備註顯示／編輯、結帳付款備註編輯按鈕，以及變更桌台對話框檢視切換的待處理截圖。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本限定提示，並把 release 歷史只保留在本頁。

## 2026-03-10 (v1.7.3 Alignment)

### Updated

- `Settings`：擴充為目前的區塊版面（`General`、`Operation`、`System`、`Printing`、`Third Party Platform`、`ODO`、`Report`），包含從備份還原流程、`Printing` -> `Template` 的列印語言覆寫，以及已對應／已啟用的篩選行為。
- `Function and Feature Map`：更新 `Settings` 範圍，納入還原動作、列印語言覆寫、僅列出已啟用的整合項目，以及僅列出已對應的 ODO 渠道清單。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本限定提示，並把 release 歷史只保留在本頁。

## 2026-03-06 (v1.7.2 Alignment)

### Updated

- `Settings`：新增 `System` -> `Number` 的說明，涵蓋 `Rounding Method`、`Decimal Places` 與 `Round For Cash Only`。
- `Checkout and Payments`：釐清僅現金四捨五入的行為，以及在結帳過程中 `Rounding` 總額會即時更新。
- `Payment Errors and Retry`：釐清離開結帳頁面（透過返回或導覽）時的桌台解鎖行為，並補充僅現金四捨五入的規則背景。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本資訊框；這次 release 不需要再轉換其他舊版本提示。

## 2026-03-05 (v1.7.1 Alignment)

### Updated

- `Settings`：記錄重新設計的語言設定版面與操作流程。
- `Access and Navigation` + `Sign In`：新增登入時快速切換語言的說明。
- `Sales Flow`：釐清品項名稱會依照選擇的語言，以及品項對應（`Main`／`Alt`）顯示。
- `Function and Feature Map` + `Terminology`：新增語言／品項對應／快速切換的參考。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本提示框，並只在本頁保留 release 歷史。

## 2026-03-05 (v1.7.0 Alignment)

### Updated

- `Configure Payment Devices`：新增 `Linkly EFTPOS Terminal` 設定流程（配對與儲存清單）。
- `Devices`：釐清 `Payments` 分頁包含 Linkly EFTPOS 終端機設定。
- `Checkout and Payments`：釐清即使有未送出的品項，`Split By Item` 仍可繼續進行。
- `Payment Errors and Retry`：新增 EFTPOS 終端機處理備註（在重試前先等待終端機／POS 結果）。
- `Info`：釐清日誌匯出在八達通日誌可用時也會包含相關內容。

### 寫作清理

- 已從操作提示／標題移除較舊的版本限定標籤（例如 `v1.6.5+`、`v1.6.6+`），並將行為合併到一般基線說明中。

## 2026-02-27 (資料 Retention 指南 Added)

### Added

- 新增參考頁面：`Data Retention and Storage`，提供本機日誌、媒體快取、本機資料庫保留，以及支援上傳的使用者說明。

### Updated

- `Info`、`Troubleshooting` 與 `Function and Feature Map` 現在都連結到保留指南，方便更快查找政策。

## 2026-02-27 (v1.6.6 Alignment)

### Updated

- `Sales Flow`：新增桌台畫面上的 `Floor Plan`／`Table List` 切換行為。
- `Info`：更新日誌流程以符合目前應用程式動作：`Export`、`Upload` 與 `Remove` 所選日誌檔。
- `Info`：釐清本機匯出與雲端上傳的支援路徑預期。

### Screenshot updates

- 新增桌台檢視切換與更新後的日誌選擇器／上傳 UI 狀態的待處理截圖。

## 2026-02-22 (v1.6.5 Alignment)

### Updated

- `First-Time Initialization`：釐清在設定期間選擇的語言會立即套用，而且整個設定文字都會本地化。
- `Day-end`（`client` 與 `functions`）：釐清所選日期的處理行為，以及已關閉日期的重複日結阻擋。
- `Troubleshooting`：新增 `Day-end has already been processed for the selected day` 的對應說明。

## 2026-02-21 (英文草稿整理)

### Added

- 新增 getting-started 指南：`Quick Start (15 mins)`
- 新增 SOP 頁面：`Daily Operations`
- 新增完整功能索引：`Function and Feature Map`
- 新增版本追蹤頁面
- 初始化流程更新為 7 個步驟，含語言選擇
- 新增初始化後的訂單資料同步流程

### Enhanced

- 疑難排解已改寫為決策式指引
- 退回／作廢與日結頁面現在包含 `Do / Don't` 原則
- 角色／權限說明已改寫為實用的收銀員與經理邊界
- 截圖對應已與最新提供的畫面對齊

### 待處理

- 剩餘截圖請見 `SCREENSHOT_PREP_LIST_EN.md`
- HQ 文件擴充完成後，HQ 流程會定稿
