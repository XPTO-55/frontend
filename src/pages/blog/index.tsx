import React from 'react'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import * as S from './_styles'
import { createClient } from '../../../prismicio'
import { Bounded } from '../../components/blog/Bounded'
import { Heading } from '../../components/blog/Heading'
import { Header } from '../../components/Layout/Header'
import { ArticleProps, BlogProps, StaticProps } from './_types'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { getSearch } from '../../services/blog.service'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import Link from 'next/link'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === 'image')

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image
  }
}

const getExcerpt = (slices) => {
  const text: string = slices
    .filter((slice) => slice.slice_type === 'text')
    .map((slice) => prismicH.asText(slice.primary.text))
    .join(' ')

  const excerpt = text.substring(0, 300)

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(' ')) + '…'
  } else {
    return excerpt
  }
}

const Article = ({ article }: ArticleProps) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices)

  const date = prismicH.asDate(
    // @ts-expect-error
    article.data.publishDate || article.first_publication_date
  )
  const excerpt = getExcerpt(article.data.slices)

  return (
    <>
      <S.listItemStyled>
        <PrismicLink document={article} tabIndex={-1}>
          <S.Div2>
            {prismicH.isFilled.image(featuredImage) && (
              <PrismicNextImage
                field={featuredImage}
                layout="fill"
                className="object-cover"
              />
            )}
          </S.Div2>
        </PrismicLink>
        <S.Div1>
          <Heading asChild>
            <h2>
              <S.PrismicLinkStyled document={article}>
                <PrismicText field={article.data.title} />
              </S.PrismicLinkStyled>
            </h2>
          </Heading>

          <S.Paragrafo>{dateFormatter.format(date)}</S.Paragrafo>
          {excerpt && <S.Paragrafo2>{excerpt}</S.Paragrafo2>}
        </S.Div1>
      </S.listItemStyled>
    </>
  )
}

export default function Index({ articles }: BlogProps) {
  const router = useRouter()
  const { data: search } = useQuery<string>(['search'], getSearch)

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Head>
        <title> Blog | CPA </title>
      </Head>
      <Header />
      <S.Header>
        <S.ContainerHeader>
          <h1>Conheça nosso blog CPA</h1>
          <h2>
            Fique ligado em diversos assuntos relacionado ao mundo TEA.
            Diariamente as postagens são atualizadas para que você também fique
            atualizado! Para assuntos específicos, acesse nossa FAQ.
          </h2>
          <Link href={'/faq'}>
            <ButtonPrimary className="laranja">FAQ</ButtonPrimary>
          </Link>
        </S.ContainerHeader>
      </S.Header>
      <Bounded asChild size="widest">
        <S.ArticleContainer>
          <S.ListaNaoOrdenada>
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </S.ListaNaoOrdenada>
          {/* <span>
            <h1>Últimos itens pesquisados</h1>
            {search}
          </span> */}
        </S.ArticleContainer>

      </Bounded>
    </>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true
//   }
// }

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig) => {
  const client = createClient({
    previewData,
    req,
    ...config
  })

  const articles = await client.getAllByType('article', {
    orderings: [
      { field: 'my.article.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' }
    ]
  })

  return {
    props: {
      articles
    }
  }
}
