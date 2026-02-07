import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Impostazioni sito',
    type: 'document',
    fields: [
        defineField({
            name: 'whatsapp',
            title: 'Numero WhatsApp',
            type: 'string'
        }),
        defineField({
            name: 'address',
            title: 'Indirizzo',
            type: 'string'
        }),
        defineField({
            name: 'checkin',
            title: 'Check-in',
            type: 'string'
        }),
        defineField({
            name: 'checkout',
            title: 'Check-out',
            type: 'string'
        }),
        defineField({
            name: 'rules',
            title: 'Regole',
            type: 'text'
        }),
        defineField({
            name: 'matterportUrl',
            title: 'URL Matterport',
            type: 'url'
        }),
        defineField({
            name: 'newsletterText',
            title: 'Testo Newsletter',
            type: 'text'
        })
    ]
})
