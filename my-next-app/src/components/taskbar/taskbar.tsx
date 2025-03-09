"use client"

import { useState } from "react"
import { Menu, Search, Settings, Bell } from "lucide-react"
import { format } from "date-fns"
import TaskMenu from "./task-menu"
import TaskItem from "./task-item"
import NotificationPanel from "./notification-panel"
import { useTaskbarData } from "@/lib/hooks/use-taskbar-data"
import { useBranding } from "@/lib/hooks/use-branding"

interface TaskbarProps {
  onOpenBrowser: () => void
  onOpenSettings: () => void
}

export default function Taskbar({ onOpenBrowser, onOpenSettings }: TaskbarProps) {
  const [showMenu, setShowMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const { tasks, notifications, loading, error } = useTaskbarData()
  const { browserName } = useBranding()

  const handleOpenMenu = () => setShowMenu(true)
  const handleCloseMenu = () => setShowMenu(false)

  return (
    <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 border-t border-slate-300 dark:border-slate-700 fixed bottom-0 left-0 right-0 flex items-center justify-between px-4">
      {/* Left section: Menu and Search */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700" onClick={handleOpenMenu}>
          <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
        </button>

        <div className="relative">
          <Search className="h-4 w-4 absolute left-2 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 pl-8 pr-4 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
          />
        </div>

        {showMenu && (
          <TaskMenu
            onClose={handleCloseMenu}
            menuItems={[
              { name: browserName || "Web Browser", action: onOpenBrowser },
              { name: "Settings", action: onOpenSettings },
            ]}
          />
        )}
      </div>

      {/* Middle section: Tasks */}
      <div className="flex items-center space-x-1 overflow-x-auto max-w-[50%] scrollbar-hide">
        {loading ? (
          // Loading state for tasks
          <>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-8 w-24 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse mx-1"></div>
            ))}
          </>
        ) : (
          // Render actual tasks
          tasks.map((task) => <TaskItem key={task._id} task={task} />)
        )}
      </div>

      {/* Right section: Settings, Date, Notifications */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700" onClick={onOpenSettings}>
          <Settings className="h-5 w-5 text-slate-700 dark:text-slate-300" />
        </button>

        <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {format(new Date(), "MMM d, yyyy")}
        </div>

        <div className="relative">
          <button
            className="p-2 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            {notifications.length > 0 && (
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            )}
          </button>

          {showNotifications && (
            <NotificationPanel notifications={notifications} onClose={() => setShowNotifications(false)} />
          )}
        </div>
      </div>
    </div>
  )
}

