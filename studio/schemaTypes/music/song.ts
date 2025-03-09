import { defineType, defineField } from "sanity";
import { Music } from "lucide-react";

export default defineType({
  name: "song",
  title: "Song",
  type: "document",
  icon: Music,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(150),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 100 },
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    }),
    defineField({
      name: "artist",
      title: "Artist",
      type: "reference",
      to: [{ type: "artist" }],
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    }),
    defineField({
      name: "album",
      title: "Album",
      type: "reference",
      to: [{ type: "album" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "audioFile",
      title: "Audio File",
      type: "file",
      options: { accept: "audio/*" },
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Format: mm:ss",
      validation: (Rule) =>
        Rule.required().regex(/^\d{1,2}:\d{2}$/, {
          name: "time",
          invert: false,
          message: "Must be in mm:ss format",
        }),
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
