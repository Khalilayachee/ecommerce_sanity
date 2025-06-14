import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'price',
        type: 'number',
        initialValue: 10,
        validation: (rule) => rule.required(),
      }),
    defineField({
      name: 'image',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }],
    }),
    defineField({
      name: 'stripe',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})