import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", validation: (Rule) => Rule.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Video Project", value: "video-project" },
          { title: "Music", value: "music" },
          { title: "Art", value: "art" },
        ],
      },
    }),
    defineField({
      name: "projectCoverPhoto",
      title: "Project Cover Photo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alternative Text", type: "string" })],
    }),
    defineField({
      name: "concepts",
      title: "Concepts",
      type: "array",
      of: [{ type: "object", fields: [{ name: "conceptTitle", title: "Concept Title", type: "string" }] }],
    }),
    defineField({
      name: "samples",
      title: "Samples",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Sample Name", type: "string" }),
            defineField({ name: "source", title: "Source", type: "url" }),
          ],
        },
      ],
    }),
    defineField({
      name: "protonLink",
      title: "Proton Link",
      type: "url",
    }),
    defineField({
      name: "youtubeVideo",
      title: "YouTube Video",
      type: "reference",
      to: [{ type: "youtubeVideo" }],
    }),
    defineField({
      name: "audioAssets",
      title: "Audio Assets",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "audioName", title: "Audio File Name", type: "string" }),
            defineField({ name: "audioCover", title: "Audio File Cover", type: "image" }),
            defineField({ name: "asset", title: "Audio File", type: "file" }),
          ],
        },
      ],
    }),
    defineField({
      name: "assetGalleries",
      title: "Asset Galleries",
      type: "array",
      of: [{ type: "reference", to: [{ type: "imageGallery" }] }],
    }),
    defineField({
      name: "soloAssets",
      title: "Solo Assets",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "associatedProjects",
      title: "Associated Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    }),
    defineField({
      name: "refandinspo",
      title: "References & Inspiration",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "referenceName", title: "Reference Name", type: "string" }),
            defineField({ name: "referenceLink", title: "Reference Link", type: "url" }),
            defineField({ name: "photo", title: "Photo", type: "image" }),
          ],
        },
      ],
    }),

    // ✅ Restored: DOCUMENT ASSETS
    defineField({
      name: "documentAssets",
      title: "Document Assets",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Document Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "asset",
              title: "Document File",
              type: "file",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "coverPhoto",
              title: "Cover Photo",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "uploadDate",
              title: "Upload Date",
              type: "datetime",
              options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});