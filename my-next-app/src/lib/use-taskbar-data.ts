"use client"

import { useState, useEffect } from "react"
import { getTaskbarData } from "@/lib/sanity/queries"

// Mock data for when Sanity isn't available
const mockTasks = [
  { _id: "task1", name: "File Explorer", icon: "folder", order: 1, isActive: true },
  { _id: "task2", name: "Browser", icon: "globe", order: 2, isActive: false },
  { _id: "task3", name: "Settings", icon: "settings", order: 3, isActive: false },
]

const mockNotifications = [
  {
    _id: "notif1",
    message: "Welcome to your desktop environment",
    date: new Date().toISOString(),
    isRead: false,
  },
  {
    _id: "notif2",
    message: "System update available",
    date: new Date(Date.now() - 3600000).toISOString(),
    isRead: true,
  },
]

export function useTaskbarData() {
  const [data, setData] = useState({
    tasks: mockTasks,
    notifications: mockNotifications,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const taskbarData = await getTaskbarData()
        // Only update state if we got valid data back
        if (taskbarData.tasks.length > 0 || taskbarData.notifications.length > 0) {
          setData(taskbarData)
        }
        setError(null)
      } catch (error) {
        console.error("Error in useTaskbarData hook:", error)
        setError(error)
        // Keep using the mock/existing data
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { ...data, loading, error }
}

