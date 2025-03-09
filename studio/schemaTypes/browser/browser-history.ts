export default {
  name: "browserHistory",
  title: "Browser History",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    },
    {
      name: "visitedAt",
      title: "Visited At",
      type: "datetime",
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "visitedAt",
    },
  },
};
