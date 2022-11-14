import { PrismicLink, PrismicProvider } from '@prismicio/react'
import Link from 'next/link'
import React from 'react'
import { linkResolver } from '../../prismicio'
import GlobalStyles from '../../styles/GlobalStyles'
import '../../styles/styles.css'
import { Heading } from '../components/blog/Heading'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function MyApp ({ Component, pageProps }) {
  const NextLinkShim = ({ href, children, locale, ...props }) => {
    return (
      <Link href={href} locale={locale}>
        <a {...props}>{children}</a>
      </Link>
    )
  }

  const richTextComponents = {
    heading1: ({ children }) => (
      <Heading as="h2" size="3xl" className="mb-7 mt-12 first:mt-0 last:mb-0">
        {children}
      </Heading>
    ),
    heading2: ({ children }) => (
      <Heading as="h3" size="2xl" className="mb-7 last:mb-0">
        {children}
      </Heading>
    ),
    heading3: ({ children }) => (
      <Heading as="h4" size="xl" className="mb-7 last:mb-0">
        {children}
      </Heading>
    ),
    paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
    oList: ({ children }) => (
      <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
    ),
    oListItem: ({ children }) => (
      <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
    ),
    list: ({ children }) => (
      <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
    ),
    listItem: ({ children }) => (
      <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
    ),
    preformatted: ({ children }) => (
      <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
        <code>{children}</code>
      </pre>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicLink
        field={node.data}
        className="underline decoration-1 underline-offset-2"
      >
        {children}
      </PrismicLink>
    )
  }
  return (
    <QueryClientProvider client={queryClient}>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={NextLinkShim}
        richTextComponents={richTextComponents}>
        <GlobalStyles />
        <Component {...pageProps} />
      </PrismicProvider>
    </QueryClientProvider>
  )
}

export default MyApp
