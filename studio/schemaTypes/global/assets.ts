import { defineType, defineField } from "sanity";
import { FileText } from "lucide-react";

export default defineType({
  name: "asset",
  title: "Asset",
  type: "document",
  icon: FileText,
  fields: [
    defineField({
      name: "title",
      title: "Asset Title",
      type: "string",
  validation: (Rule: import("sanity").Rule) => Rule.required(),    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
  validation: (Rule: import("sanity").Rule) => Rule.required(),    }),
    defineField({
      name: "assetFile",
      title: "Asset File",
      type: "file",
      options: {
        accept: ".pdf,.mp3,.mp4,.png,.jpg,.jpeg,.svg,.ai,.psd,.eps,.indd,.xd,.zip",
      },
  validation: (Rule: import("sanity").Rule) => Rule.required(),    }),
    defineField({
      name: "coverPhoto",
      title: "Cover Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Asset Category",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Vector", value: "vector" },
          { title: "Adobe CC", value: "adobe" },
          { title: "Audio", value: "audio" },
          { title: "Video", value: "video" },
          { title: "Document", value: "document" },
          { title: "Other", value: "other" },
        ],
      },
  validation: (Rule: import("sanity").Rule) => Rule.required(),    }),
    defineField({
      name: "uploadDate",
      title: "Upload Date",
      type: "datetime",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
  validation: (Rule: import("sanity").Rule) => Rule.required(),    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverPhoto",
    },
    prepare({ title, media }) {
      return {
        title: title || "Untitled Asset",
        media: media || undefined,
      };
    },
  },
});
