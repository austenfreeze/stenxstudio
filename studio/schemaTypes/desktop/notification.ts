export default {
  name: "notification",
  title: "Notification",
  type: "document",
  fields: [
    {
      name: "message",
      title: "Message",
      type: "string",
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule: import("sanity").Rule) => Rule.required(),
    },
    {
      name: "isRead",
      title: "Is Read",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Info", value: "info" },
          { title: "Warning", value: "warning" },
          { title: "Error", value: "error" },
          { title: "Success", value: "success" },
        ],
      },
      initialValue: "info",
    },
  ],
  preview: {
    select: {
      title: "message",
      subtitle: "date",
    },
  },
};
