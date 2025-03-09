"use client"

import { useState, useEffect } from "react"
import { getBrandingData } from "@/lib/sanity/queries"

interface BrandingData {
  browserName: string
  browserLogo: string
  desktopBackground: string
}

const defaultBranding: BrandingData = {
  browserName: "Web Browser",
  browserLogo: "/icons/globe.svg",
  desktopBackground: "/backgrounds/default.jpg",
}

export function useBranding() {
  const [branding, setBranding] = useState<BrandingData>(defaultBranding)

  useEffect(() => {
    async function fetchBrandingData() {
      try {
        const data = await getBrandingData()
        setBranding((prev) => ({ ...prev, ...data }))
      } catch (error) {
        console.error("Error fetching branding data:", error)
      }
    }
    fetchBrandingData()
  }, [])

  return branding
}

