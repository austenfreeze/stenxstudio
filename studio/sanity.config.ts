import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";  // ✅ Fixed path
import { myStructure } from "./deskStructure"; // ✅ Fixed path & import
import { media } from "sanity-plugin-media";
import { tags } from "sanity-plugin-tags";
import { colorInput } from "@sanity/color-input";
import { iconPicker } from "sanity-plugin-icon-picker";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "exu6nklw",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2024-03-01", // ✅ Replace "vX" with actual API version
  basePath: process.env.SANITY_STUDIO_BASE_PATH || "/studio",

  name: "STENxSTUDIO",
  title: "STENxSTUDIO",

  plugins: [
structureTool({ structure: myStructure }), // ✅ Correct

    visionTool(),
    media({
      creditLine: {
        enabled: true,
        excludeSources: ["unsplash"],
      },
      maximumUploadSize: 10000000,
    }),
    tags(),
    colorInput(),
    iconPicker(),
  ],

  schema: {
    types: schemaTypes,
  },
  structure: myStructure, // ✅ Fixed reference
});
