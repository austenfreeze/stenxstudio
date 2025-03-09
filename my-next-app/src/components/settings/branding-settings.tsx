"use client"

import type React from "react"

import { useState } from "react"
import { useBranding } from "@/lib/hooks/use-branding"
import { updateBrandingData } from "@/lib/sanity/mutations"

export default function BrandingSettings() {
  const branding = useBranding()
  const [formData, setFormData] = useState(branding)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateBrandingData(formData)
      alert("Branding updated successfully!")
    } catch (error) {
      console.error("Error updating branding:", error)
      alert("Failed to update branding. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="browserName" className="block text-sm font-medium text-gray-700">
          Browser Name
        </label>
        <input
          type="text"
          id="browserName"
          name="browserName"
          value={formData.browserName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="browserLogo" className="block text-sm font-medium text-gray-700">
          Browser Logo URL
        </label>
        <input
          type="text"
          id="browserLogo"
          name="browserLogo"
          value={formData.browserLogo}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="desktopBackground" className="block text-sm font-medium text-gray-700">
          Desktop Background URL
        </label>
        <input
          type="text"
          id="desktopBackground"
          name="desktopBackground"
          value={formData.desktopBackground}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update Branding
      </button>
    </form>
  )
}

