import { getClient } from "./client"

export async function updateBrandingData(data: {
  browserName: string
  browserLogo: string
  desktopBackground: string
}) {
  const client = getClient(true) // Use the preview client for mutations
  try {
    await client.createOrReplace({
      _type: "branding",
      _id: "branding",
      ...data,
    })
  } catch (error) {
    console.error("Error updating branding data:", error)
    throw error
  }
}

