import { defineType, defineField } from "sanity";
import { ListMusic } from "lucide-react";

export default defineType({
  name: "playlist",
  title: "Playlist",
  type: "document",
  icon: ListMusic,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 100 },
  validation: (Rule: import("sanity").Rule) => Rule.required(),    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "songs",
      title: "Songs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "song" }] }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
});
