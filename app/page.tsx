import { sanityClient } from '@/lib/sanity.client'
import { pageBySlugQuery } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '../lib/portableText'

export default async function Home() {
  const data = await sanityClient.fetch(pageBySlugQuery, { slug: 'home' })

  return (
    <main>
      <section className="px-6 py-20 text-center bg-neutral-50">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Appartamento Napoli Centro Storico<br />Caracciolo’s View
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600">
          Vivi Napoli dal cuore autentico della città, tra storia,
          comfort e panorama.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://wa.me/393662558819"
            className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium"
          >
            Scrivici su WhatsApp
          </a>

          <a
            href="/contattaci"
            className="px-6 py-3 border border-neutral-300 rounded-md text-sm font-medium"
          >
            Verifica disponibilità
          </a>
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
        {data?.contentIt && (
          <div className="prose prose-neutral mx-auto">
            {/* contenuto IT verrà renderizzato nel prossimo step */}
          </div>
        )}
      </section>
    </main>
  )
  
}
