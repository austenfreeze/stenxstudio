import { defineField, defineType } from "sanity";

export default defineType({
  name: "customColor",
  title: "Color",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Color Name",
      type: "string",
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    }),
    defineField({
      name: "hex",
      title: "Hex Code",
      type: "color", // Uses @sanity/color-input
      options: { disableAlpha: true },
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Custom Color Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(), // ✅ Makes image field mandatory
    }),
    defineField({
      name: "palette",
      title: "Part of a Palette?",
      type: "reference",
      to: [{ type: "colorPalette" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image", // ✅ Sets the preview media to the uploaded image
    },
    prepare({ title, media }) {
      return {
        title,
        media, // ✅ Uses the image as the preview
      };
    },
  },
});
