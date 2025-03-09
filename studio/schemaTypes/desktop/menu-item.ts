export default {
  name: "menuItem",
  title: "Menu Item",
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
      name: "action",
      title: "Action",
      type: "string",
      description: "Action to perform when clicked",
    },
    {
      name: "parent",
      title: "Parent Menu Item",
      type: "reference",
      to: [{ type: "menuItem" }],
      description: "Optional parent menu item for nested menus",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "action",
    },
  },
}

