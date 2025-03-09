"use client"

import { useEffect, useRef } from "react"
import { useMenuItems } from "@/lib/hooks/use-menu-items"

export default function TaskMenu({ onClose }) {
  const menuRef = useRef(null)
  const menuItems = useMenuItems()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
      ref={menuRef}
      className="absolute bottom-12 left-0 w-64 bg-slate-100 dark:bg-slate-800 rounded-t-md shadow-lg border border-slate-300 dark:border-slate-700 overflow-hidden"
    >
      <div className="p-4 border-b border-slate-300 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Menu</h3>
      </div>

      <div className="p-2">
        {menuItems.map((item) => (
          <button
            key={item._id}
            className="w-full text-left p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

