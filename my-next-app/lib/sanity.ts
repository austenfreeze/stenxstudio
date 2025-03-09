import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { sanityFetch } from "@/lib/sanity/live";

// Sanity project configuration from environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "exu6nklw";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-02-27"; // Default to a fallback version

if (!projectId || !dataset) {
  throw new Error("Missing required environment variables for Sanity client");
}

// Create a Sanity client instance
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN, // Token is optional and used only server-side
  ignoreBrowserTokenWarning: true,
});

// Image URL builder
const builder = imageUrlBuilder(client);

// Function to build image URLs
export function urlFor(source: { _type: string, asset: { _ref: string } }): string {
  return builder.image(source).url(); // `.url()` generates the URL for the image
}

// Get Projects from Sanity
export async function getProjects() {
  const query = `*[_type == "project"]{ _id, title }`;
  
  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects from Sanity");
  }
}
