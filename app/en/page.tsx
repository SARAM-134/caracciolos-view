import { sanityClient } from '../../lib/sanity.client'
import { pageBySlugQuery } from '../../lib/sanity.queries'

export default async function HomeEn() {
  const data = await sanityClient.fetch(pageBySlugQuery, { slug: 'home' })

  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-20 text-center bg-neutral-50">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Apartment in Naples Historic Center<br />Caracciolo’s View
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600">
          Experience Naples from its authentic heart,
          with comfort, history and a unique view.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://wa.me/393662558819"
            className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium"
          >
            Contact us on WhatsApp
          </a>

          <a
            href="/contattaci"
            className="px-6 py-3 border border-neutral-300 rounded-md text-sm font-medium"
          >
            Check availability
          </a>
        </div>
      </section>

      {/* CONTENT EN */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        {data?.contentEn && (
          <div className="prose prose-neutral mx-auto">
            {/* Nel prossimo step renderizziamo il Portable Text */}
          </div>
        )}
      </section>
    </main>
  )
}

