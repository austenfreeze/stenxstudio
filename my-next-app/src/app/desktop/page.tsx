"use client"

import { useState } from "react"
import Desktop from "@/components/desktop/desktop"
import Taskbar from "@/components/taskbar/taskbar"
import BrowserWindow from "@/components/windows/browser-window"
import BrandingSettings from "@/components/settings/branding-settings"

export default function DesktopEnvironment() {
  const [isBrowserOpen, setIsBrowserOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const handleOpenBrowser = () => setIsBrowserOpen(true)
  const handleCloseBrowser = () => setIsBrowserOpen(false)
  const handleOpenSettings = () => setIsSettingsOpen(true)
  const handleCloseSettings = () => setIsSettingsOpen(false)

  return (
    <main className="h-screen w-screen overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
      <Desktop onOpenBrowser={handleOpenBrowser} />
      <Taskbar onOpenBrowser={handleOpenBrowser} onOpenSettings={handleOpenSettings} />

      {isBrowserOpen && <BrowserWindow onClose={handleCloseBrowser} />}

      {isSettingsOpen && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <BrandingSettings />
          <button
            onClick={handleCloseSettings}
            className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      )}
    </main>
  )
}

