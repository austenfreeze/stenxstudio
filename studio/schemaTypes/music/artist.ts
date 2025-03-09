import { defineType, defineField } from "sanity";
import { User } from "lucide-react";

export default defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  icon: User,
  fields: [
    defineField({
      name: "name",
      title: "Artist Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 100 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "albums",
      title: "Albums",
      type: "array",
      of: [{ type: "reference", to: [{ type: "album" }] }],
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
      title: "name",
      media: "profileImage",
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
});
