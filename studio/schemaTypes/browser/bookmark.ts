export default {
  name: "bookmark",
  title: "Bookmark",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
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
      name: "folder",
      title: "Folder",
      type: "string",
      description: "Optional folder to organize bookmarks",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "url",
    },
  },
}

