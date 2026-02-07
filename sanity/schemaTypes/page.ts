import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo (interno)',
      type: 'string',
      description: 'Solo per riconoscere la pagina nello Studio (es. Home, Servizi, Contatti).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),

    defineField({ name: 'seoTitleIt', title: 'SEO Title (IT)', type: 'string' }),
    defineField({ name: 'seoDescriptionIt', title: 'SEO Description (IT)', type: 'text' }),
    defineField({ name: 'seoTitleEn', title: 'SEO Title (EN)', type: 'string' }),
    defineField({ name: 'seoDescriptionEn', title: 'SEO Description (EN)', type: 'text' }),

    defineField({
      name: 'contentIt',
      title: 'Contenuto (IT)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'contentEn',
      title: 'Contenuto (EN)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
