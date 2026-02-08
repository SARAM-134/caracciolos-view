import type { PortableTextComponents } from '@portabletext/react'

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-semibold mt-10">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6">{children}</h3>,
    normal: ({ children }) => <p className="mt-4 leading-7 text-neutral-700">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc pl-6 text-neutral-700">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 list-decimal pl-6 text-neutral-700">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href as string | undefined
      const isExternal = href?.startsWith('http')
      return (
        <a
          href={href}
          className="underline underline-offset-4"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
        >
          {children}
        </a>
      )
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  },
}

