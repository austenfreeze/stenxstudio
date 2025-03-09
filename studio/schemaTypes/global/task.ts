export default {
  name: "task",
  title: "Task",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
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
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "windowContent",
      title: "Window Content",
      type: "text",
      description: "Content to display when this task is opened",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "isActive",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? "Active" : "Inactive",
      }
    },
  },
}

