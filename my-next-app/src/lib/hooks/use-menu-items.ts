"use client"

import { useState, useEffect } from "react"
import { getMenuItems } from "@/lib/sanity/queries"

// Mock data for when Sanity isn't available
const mockMenuItems = [
  { _id: "menu1", name: "Programs", icon: "grid", order: 1, action: "open-programs" },
  { _id: "menu2", name: "Documents", icon: "file-text", order: 2, action: "open-documents" },
  { _id: "menu3", name: "Settings", icon: "settings", order: 3, action: "open-settings" },
  { _id: "menu4", name: "Power", icon: "power", order: 4, action: "power-options" },
]

export function useMenuItems() {
  const [menuItems, setMenuItems] = useState(mockMenuItems)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const items = await getMenuItems()
        // Only update state if we got valid data back
        if (items.length > 0) {
          setMenuItems(items)
        }
        setError(null)
      } catch (error) {
        console.error("Error in useMenuItems hook:", error)
        setError(error)
        // Keep using the mock/existing data
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return menuItems
}

