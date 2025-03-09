export default {
  name: "desktopItem",
  title: "Desktop Item",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Folder", value: "folder" },
          { title: "File", value: "file" },
          { title: "Widget", value: "widget" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Icon name from Lucide icons",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "desktopItem" }],
        },
      ],
      hidden: ({ document }) => document?.type !== "folder",
    },
    {
      name: "fileContent",
      title: "File Content",
      type: "text",
      hidden: ({ document }) => document?.type !== "file",
    },
    {
      name: "widgetType",
      title: "Widget Type",
      type: "string",
      options: {
        list: [
          { title: "Clock", value: "clock" },
          { title: "Weather", value: "weather" },
          { title: "Notes", value: "notes" },
          { title: "Calendar", value: "calendar" },
        ],
      },
      hidden: ({ document }) => document?.type !== "widget",
    },
    {
      name: "widgetSettings",
      title: "Widget Settings",
      type: "object",
      fields: [
        {
          name: "size",
          title: "Size",
          type: "string",
          options: {
            list: [
              { title: "Small", value: "small" },
              { title: "Medium", value: "medium" },
              { title: "Large", value: "large" },
            ],
          },
        },
        {
          name: "refreshInterval",
          title: "Refresh Interval (seconds)",
          type: "number",
        },
      ],
      hidden: ({ document }) => document?.type !== "widget",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "type",
    },
  },
}

