import { Rule } from '@sanity/types';

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'tool' }],
      validation: (Rule: Rule) => Rule.required().min(1).error('Please add at least one tool.'),
    },
  ],
  preview: {
    select: {
      tools: 'tools',
    },
    prepare({ tools }: { tools: any[] }) {
      return {
        title: 'Footer',
        subtitle: `${tools.length} tool(s)`,
      };
    },
  },
};
