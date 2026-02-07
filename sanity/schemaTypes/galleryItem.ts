import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'galleryItem',
    title: 'Gallery Item',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titolo',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Immagine',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'category',
            title: 'Categoria',
            type: 'string',
            options: {
                list: [
                    { title: 'Interni', value: 'interni' },
                    { title: 'Esterni', value: 'esterni' },
                    { title: 'Dettagli', value: 'dettagli' }
                ]
            }
        }),
        defineField({
            name: 'order',
            title: 'Ordine',
            type: 'number'
        })
    ]
})
