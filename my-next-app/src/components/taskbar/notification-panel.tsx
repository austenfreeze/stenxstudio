"use client"

import { useEffect, useRef } from "react"
import { format } from "date-fns"

export default function NotificationPanel({ notifications = [], onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  return (
    <div
      ref={panelRef}
      className="absolute bottom-12 right-0 w-80 bg-slate-100 dark:bg-slate-800 rounded-t-md shadow-lg border border-slate-300 dark:border-slate-700 overflow-hidden"
    >
      <div className="p-4 border-b border-slate-300 dark:border-slate-700 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Notifications</h3>
        {notifications.length > 0 && (
          <button
            className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            onClick={() => console.log("Clear all notifications")}
          >
            Clear all
          </button>
        )}
      </div>

      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-slate-500">No notifications</div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification._id}
              className="p-3 border-b border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              <div className="text-sm text-slate-700 dark:text-slate-300">{notification.message}</div>
              <div className="text-xs text-slate-500 mt-1">
                {format(new Date(notification.date), "MMM d, yyyy h:mm a")}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

