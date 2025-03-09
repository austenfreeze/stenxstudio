"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import BrowserContent from "../browser/browser-content"
import { useBranding } from "@/lib/hooks/use-branding"

interface BrowserWindowProps {
  onClose: () => void
}

export default function BrowserWindow({ onClose }: BrowserWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const { browserName, browserLogo } = useBranding()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const handleMouseDown = (e: React.MouseEvent) => {
    const startX = e.pageX - position.x
    const startY = e.pageY - position.y

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.pageX - startX,
        y: e.pageY - startY,
      })
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  if (isMinimized) return null

  return (
    <div
      className="absolute bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden resize"
      style={{
        width: "80%",
        height: "80%",
        maxWidth: "1200px",
        maxHeight: "800px",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className="bg-gray-200 dark:bg-gray-700 p-2 flex items-center justify-between cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2">
          {browserLogo && <img src={browserLogo || "/placeholder.svg"} alt="Browser Logo" className="w-6 h-6" />}
          <span className="font-semibold">{browserName || "Web Browser"}</span>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded">
            _
          </button>
          <button onClick={onClose} className="p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded">
            <X size={18} />
          </button>
        </div>
      </div>
      <div className="h-full overflow-hidden">
        <BrowserContent />
      </div>
    </div>
  )
}

