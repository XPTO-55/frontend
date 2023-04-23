import { AppProps } from 'next/app'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import '../styles/styles.css'
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
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps?.dehydratedState}> */}
      <AuthProvider>
        <Toast.Provider>
          <ChatProvider>
              <Component {...pageProps} />
              <GlobalStyles />
          </ChatProvider>
        </Toast.Provider>
      </AuthProvider>
      {/* </Hydrate> */}
    </QueryClientProvider>
  )
}

export default MyApp
