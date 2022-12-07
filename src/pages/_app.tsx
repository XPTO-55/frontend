import { AppProps } from 'next/app'
import { PrismicLink, PrismicProvider } from '@prismicio/react'
import Link from 'next/link'
import React from 'react'
import { linkResolver } from '../../prismicio'
import GlobalStyles from '../../styles/GlobalStyles'
import '../../styles/styles.css'
import { Heading } from '../components/blog/Heading'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as Toast from '@radix-ui/react-toast'
import { AuthProvider } from '../context/auth'
import { ChatProvider } from '../context/chat'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: false
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
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
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps?.dehydratedState}> */}
      <AuthProvider>
        <Toast.Provider>
          <ChatProvider>
            <PrismicProvider
              // @ts-expect-error
              linkResolver={linkResolver}
              internalLinkComponent={NextLinkShim}
              richTextComponents={richTextComponents}>
              <Component {...pageProps} />
              <GlobalStyles />
            </PrismicProvider>
          </ChatProvider>
        </Toast.Provider>
      </AuthProvider>
      {/* </Hydrate> */}
    </QueryClientProvider>
  )
}

export default MyApp
