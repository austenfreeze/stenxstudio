"\"use client"

import { useState } from "react"
import BrowserHomepage from "./browser-homepage"
import BrowserHistory from "./browser-history"
import BrowserBookmarks from "./browser-bookmarks"
import BrowserLoading from "./browser-loading"
import { useBrowserData } from "@/lib/hooks/use-browser-data"

export default function BrowserContent() {
  const [currentView, setCurrentView] = useState("home")
  const { bookmarks, history, headlines, loading, error } = useBrowserData()

  const handleViewChange = (view: string) => {
    setCurrentView(view)
  }

  if (loading) {
    return <BrowserLoading />
  }

  if (error) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-red-500">
          <p>Error loading browser data.</p>
          <p>Please check your network connection and try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Bookmarks bar */}
      <div className="h-8 bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-700 flex items-center px-2 space-x-2 overflow-x-auto">
        <button
          className={`px-2 py-1 text-xs rounded-md ${currentView === "home" ? "bg-slate-200 dark:bg-slate-800" : "hover:bg-slate-200 dark:hover:bg-slate-800"}`}
          onClick={() => handleViewChange("home")}
        >
          Home
        </button>
        <button
          className={`px-2 py-1 text-xs rounded-md flex items-center ${currentView === "bookmarks" ? "bg-slate-200 dark:bg-slate-800" : "hover:bg-slate-200 dark:hover:bg-slate-800"}`}
          onClick={() => handleViewChange("bookmarks")}
        >
          Bookmarks
        </button>
        <button
          className={`px-2 py-1 text-xs rounded-md flex items-center ${currentView === "history" ? "bg-slate-200 dark:bg-slate-800" : "hover:bg-slate-200 dark:hover:bg-slate-800"}`}
          onClick={() => handleViewChange("history")}
        >
          History
        </button>
      </div>

      {/* Browser content */}
      <div className="flex-1 overflow-y-auto p-2">
        {currentView === "home" && <BrowserHomepage headlines={headlines} />}
        {currentView === "history" && <BrowserHistory history={history} />}
        {currentView === "bookmarks" && <BrowserBookmarks bookmarks={bookmarks} />}
      </div>
    </div>
  )
}

