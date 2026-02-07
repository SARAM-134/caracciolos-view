import { groq } from 'next-sanity'

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    seoTitleIt,
    seoDescriptionIt,
    seoTitleEn,
    seoDescriptionEn,
    contentIt,
    contentEn
  }
`
