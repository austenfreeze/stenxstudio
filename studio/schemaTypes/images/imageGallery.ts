import { defineType, defineField } from "sanity";
import { MdPhotoLibrary } from "react-icons/md";

export default defineType({
  name: "imageGallery",
  title: "Image Gallery",
  type: "document",
  icon: MdPhotoLibrary,
  fields: [
    defineField({
      name: "galleryCover",
      title: "Gallery Cover Photo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Give your image gallery a descriptive title.",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              description: "Name of the image.",
              validation: (Rule) => Rule.required().min(3).max(50),
            }),
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
              description: "Describe the image for accessibility & SEO.",
              initialValue: ({ parent }) => parent?.name || "",
              validation: (Rule) => Rule.required().max(150),
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "slug",
              description: "Unique slug for the image.",
              options: { source: "name", slugify: (input) => input.toLowerCase().replace(/\s+/g, "-") },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
              description: "Short caption displayed with the image.",
            }),
            defineField({
              name: "dateAdded",
              title: "Date Added",
              type: "datetime",
              description: "Tracks when this image was added.",
              options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
            }),
          ],
        },
      ],
      options: {
        layout: "grid", // Displays images in a grid
        sortable: true, // Enables drag-and-drop sorting
      },
      validation: (Rule) => Rule.required().min(1).warning("Add at least one image."),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "galleryCover",
    },
    prepare({ title, media }) {
      return {
        title: title || "Untitled Gallery",
        media: media || undefined,
      };
    },
  },
});
