import { defineField, defineType } from "sanity";

const colorPalette = defineType({
  name: "colorPalette",
  title: "Color Palette",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Palette Name",
      type: "string",
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    }),
    defineField({
      name: "colors",
      title: "Colors in Palette",
      type: "array",
      of: [{ type: "reference", to: [{ type: "customColor" }] }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      colors: "colors",
    },
    prepare({ title, colors }) {
      const count = colors?.length || 0;
      return {
        title,
        subtitle: `${count} colors`,
      };
    },
  },
});

export default colorPalette; // ✅ Default export
