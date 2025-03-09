import { Rule } from '@sanity/types';

export default {
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('The tool name is required.'),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule: Rule) => Rule.required().error('A logo is required.'),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule: Rule) => Rule.required().uri({ allowRelative: false }).error('A valid URL is required.'),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      subtitle: 'link',
    },
    prepare({ title, media, subtitle }: { title: string; media: any; subtitle: string }) {
      return {
        title,
        media,
        subtitle,
      };
    },
  },
};
