"use client"

import { useState, useEffect } from "react"
import { getBrowserData } from "@/lib/sanity/queries"

// Fallback data
const fallbackData = {
  bookmarks: [{ _id: "bm1", title: "Example Bookmark", url: "https://example.com", icon: "link", order: 1 }],
  history: [
    { _id: "hist1", title: "Example History", url: "https://example.com", visitedAt: new Date().toISOString() },
  ],
  headlines: [{ _id: "hl1", title: "Example Headline", url: "https://example.com", order: 1 }],
}

export function useBrowserData() {
  const [data, setData] = useState(fallbackData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const browserData = await getBrowserData()
        // Only update state if we got valid data back
        if (browserData.bookmarks.length > 0 || browserData.history.length > 0 || browserData.headlines.length > 0) {
          setData(browserData)
        }
        setError(null)
      } catch (error) {
        console.error("Error in useBrowserData hook:", error)
        setError(error)
        // Keep using the fallback data
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { ...data, loading, error }
}

