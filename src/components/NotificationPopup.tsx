import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface NotificationConfig {
  enabled: boolean;
  title: string;
  message: string;
  displayDelay?: number; // in milliseconds
  displayMode?: "always" | "dismissible"; // Controls popup behavior
  dismissDuration?: number; // Duration in hours to hide popup after dismissal
}

interface NotificationPopupProps {
  config: NotificationConfig;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const STORAGE_KEY_DISMISS_TIMESTAMP = "notification-popup-dismiss-timestamp";

  useEffect(() => {
    if (!config.enabled) return;

    const displayMode = config.displayMode || "always";

    // Check if in "dismissible" mode and user has dismissed
    if (displayMode === "dismissible") {
      const dismissTimestamp = localStorage.getItem(STORAGE_KEY_DISMISS_TIMESTAMP);
      
      if (dismissTimestamp) {
        const dismissTime = parseInt(dismissTimestamp, 10);
        const currentTime = Date.now();
        const dismissDurationMs = (config.dismissDuration || 24) * 60 * 60 * 1000; // Convert hours to milliseconds

        if (currentTime - dismissTime < dismissDurationMs) {
          // Still within dismiss duration, don't show popup
          return;
        } else {
          // Dismiss duration expired, clear the timestamp and show popup
          localStorage.removeItem(STORAGE_KEY_DISMISS_TIMESTAMP);
        }
      }
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, config.displayDelay || 1000);

    return () => clearTimeout(timer);
  }, [config]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDismiss = () => {
    setIsOpen(false);
    const displayMode = config.displayMode || "always";

    // Only store timestamp for dismissible mode
    if (displayMode === "dismissible") {
      localStorage.setItem(STORAGE_KEY_DISMISS_TIMESTAMP, Date.now().toString());
    }
  };

  if (!config.enabled) return null;

  const displayMode = config.displayMode || "always";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-2 border-taisan/20 bg-gradient-to-br from-white to-taisan-cream">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-serif text-taisan mb-2 flex items-center gap-2">
                {/* <span className="text-taisan-gold text-3xl">✦</span> */}
                {config.title}
              </DialogTitle>
              <DialogDescription className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {config.message}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="mt-4 flex gap-3 justify-center flex-wrap">
          <button
            onClick={handleClose}
            className="bg-white hover:bg-gray-50 text-taisan border-2 border-taisan font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Đã hiểu
          </button>
          {displayMode === "dismissible" && (
            <button
              onClick={handleDismiss}
              className="bg-taisan hover:bg-taisan-light text-white font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Tắt thông báo
            </button>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-taisan/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-taisan-gold/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationPopup;
