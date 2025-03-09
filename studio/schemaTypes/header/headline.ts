export default {
  name: "headline",
  title: "Headline",
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "News", value: "news" },
          { title: "Technology", value: "technology" },
          { title: "Sports", value: "sports" },
          { title: "Entertainment", value: "entertainment" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
}

