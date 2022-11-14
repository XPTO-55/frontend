import Document, { Html, Head } from 'next/document'
import React from 'react'
class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang="pt-br">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="author" content="CPA" />
          <meta
            name="description"
            content="Comunidade para aprender sobre autistas e apoiá-los"
          />
          <meta
            name="keywords"
            content="autismo"
          />
          <link rel="shortcut" href="/assets/img/logoSemTexto.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" type="image/x-icon" href="/assets/img/logoSemTexto.png" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"
            integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY="
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap" rel="stylesheet" />
        </Head>
        <body></body>
      </Html>
    )
  }
}

export default MyDocument
