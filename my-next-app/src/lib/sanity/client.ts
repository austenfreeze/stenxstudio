import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-03";
const token = process.env.SANITY_API_TOKEN;

if (!projectId.match(/^[a-z0-9-]+$/)) {
  throw new Error(
    `❌ Invalid Sanity projectId: "${projectId}". It should only contain lowercase letters, numbers, and dashes.`
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  token,
});

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

export const getClient = (usePreview = false) => (usePreview ? previewClient : client);
