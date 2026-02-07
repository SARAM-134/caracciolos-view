import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titolo',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'language',
            title: 'Lingua',
            type: 'string',
            options: {
                list: [
                    { title: 'Italiano', value: 'it' },
                    { title: 'English', value: 'en' }
                ],
                layout: 'radio'
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug URL',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'excerpt',
            title: 'Estratto',
            type: 'text'
        }),
        defineField({
            name: 'coverImage',
            title: 'Immagine di copertina',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'content',
            title: 'Contenuto',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data pubblicazione',
            type: 'datetime'
        })
    ]
})
