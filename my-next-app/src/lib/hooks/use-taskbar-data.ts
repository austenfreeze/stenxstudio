"use client";

import { useState, useEffect } from "react";
import { getTaskbarData } from "@/lib/sanity/queries";

// Mock data for when Sanity isn't available
const mockTasks = [
  { _id: "task1", name: "File Explorer", icon: "folder", order: 1, isActive: true },
  { _id: "task2", name: "Browser", icon: "globe", order: 2, isActive: false },
  { _id: "task3", name: "Settings", icon: "settings", order: 3, isActive: false },
];

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
];

export function useTaskbarData() {
  const [data, setData] = useState({
    tasks: mockTasks,
    notifications: mockNotifications,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Define error as a string or null

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); // Set loading to true before starting the fetch request
        const taskbarData = await getTaskbarData();
        
        // Only update state if we got valid data back
        if (taskbarData.tasks.length > 0 || taskbarData.notifications.length > 0) {
          setData(taskbarData);
        } else {
          console.warn("No task or notification data available.");
        }

        setError(null); // Reset any existing error
      } catch (error: any) {
        console.error("Error in useTaskbarData hook:", error);
        setError("Failed to fetch taskbar data. Using mock data instead.");
        
        // Keep using the mock/existing data
        setData({ tasks: mockTasks, notifications: mockNotifications });
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    }

    fetchData();
  }, []);

  return { ...data, loading, error };
}
