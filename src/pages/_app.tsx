import { PrismicLink, PrismicProvider } from '@prismicio/react'
import Link from 'next/link'
import React from 'react'
import { linkResolver } from '../../prismicio'
import GlobalStyles from '../../styles/GlobalStyles'
import '../../styles/styles.css'
import { Heading } from '../components/blog/Heading'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as Toast from '@radix-ui/react-toast'
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
      <Heading size="3xl">
        <h2>
          {children}
        </h2>
      </Heading>
    ),
    heading2: ({ children }) => (
      <Heading size="2xl">
        <h3>
          {children}
        </h3>
      </Heading>
    ),
    heading3: ({ children }) => (
      <Heading size="xl">
        <h4>
          {children}
        </h4>
      </Heading>
    ),
    paragraph: ({ children }) => <p>{children}</p>,
    oList: ({ children }) => (
      <ol >{children}</ol>
    ),
    oListItem: ({ children }) => (
      <li >{children}</li>
    ),
    list: ({ children }) => (
      <ul >{children}</ul>
    ),
    listItem: ({ children }) => (
      <li >{children}</li>
    ),
    preformatted: ({ children }) => (
      <pre >
        <code>{children}</code>
      </pre>
    ),
    strong: ({ children }) => (
      <strong>{children}</strong>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicLink
        field={node.data}
      >
        {children}
      </PrismicLink>
    )
  }
  return (
    <Toast.Provider>
      <QueryClientProvider client={queryClient}>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={NextLinkShim}
          richTextComponents={richTextComponents}>
          <GlobalStyles />
          <Component {...pageProps} />
        </PrismicProvider>
      </QueryClientProvider>
    </Toast.Provider>
  )
}

export default MyApp
