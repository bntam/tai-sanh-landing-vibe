import type { NotificationConfig } from "@/components/NotificationPopup";

// Configuration for the notification popup
// This will be overridden by Decap CMS content when available
export const notificationConfig: NotificationConfig = {
  // Enable or disable the popup
  enabled: true,

  // Popup title
  title: "Thông báo",

  // Popup message (supports multiple lines)
  message: `Phòng khám nghỉ lễ từ ngày 01/01/2025 đến 03/01/2025.

Chúng tôi sẽ hoạt động trở lại vào ngày 04/01/2025.

Kính chúc quý khách năm mới an khang thịnh vượng!`,

  // Delay before showing popup (in milliseconds)
  displayDelay: 2000,

  // Display mode: "always" or "dismissible"
  // - "always": Popup shows on every page visit
  // - "dismissible": User can dismiss popup, and it will be hidden for the configured duration
  displayMode: "dismissible",

  // Duration in hours to hide popup after user clicks "Tắt thông báo"
  // Only applies when displayMode is "dismissible"
  // Examples: 24 (1 day), 168 (7 days), 720 (30 days), 2160 (90 days)
  dismissDuration: 168, // 7 days
};
