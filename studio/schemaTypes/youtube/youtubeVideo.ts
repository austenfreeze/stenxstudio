import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'youtubeVideo',
  title: 'Youtube Video',
  type: 'document',
  fields: [
	defineField({
	name: 'coverPhoto',
	title: 'Youtube Cover Photo',
	type: 'image',
}),
	defineField({
	name: 'youtubeTitle',
	title: 'Youtube Title',
	type: 'string',
}),	
	defineField({
	name: 'youtubeLink',
	title: 'Youtube Link',
	type: 'url',
}),
	defineField({
	name: 'mediaLink',
	title: 'Media Link',
	type: 'url',
}),
	defineField({
	name: 'protonLink',
	title: 'Proton Link',
	type: 'url',
}),
	defineField({
	name: 'description',
	title: 'description',
	type: 'text',
}),
	defineField({
	name: 'date',
	title: 'date',
	type: 'date',
}),
	defineField({
	name: 'youtubeVideo',
	title: 'Youtube Video',
	type: 'file',
}),
],
})
