import React from 'react'
import * as S from './_styles'
import { Header } from '../../components/Layout/Header'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import Link from 'next/link'
import { Bounded } from '../../components/blog/Bounded'
import { Heading } from '../../components/blog/Heading'
import { fetchAPI } from '../../lib/api'
import { Article, Category, ResponseData, StrapiData } from '../../lib/types'
import BlogImage from '../../components/blog/Image'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

type ArticleProps = {
  article: Article
}

const Article = ({ article }: ArticleProps) => {

  return (
    <>
      <S.listItemStyled>
        <S.Div2>
          {article?.banner ? (
            <Link href={`/blog/articles/${article.slug}`}>
              <BlogImage 
                attributes={article?.banner?.data.attributes}
                />
              </Link>
          ): (
            <span>&nbsp;</span>
          )}
        </S.Div2>
        <S.Div1>
          <Heading asChild>
            <h2>
              <S.LinkStyled href={`/blog/articles/${article.slug}`}>
                {article.title}
              </S.LinkStyled>
            </h2>
          </Heading>

          <S.Paragrafo>
            {article?.publishedAt ? dateFormatter.format(new Date(article.publishedAt)) : null}
          </S.Paragrafo>
          <S.Paragrafo2>{article?.description}</S.Paragrafo2>
        </S.Div1>
      </S.listItemStyled>
    </>
  )
}

type BlogProps = {
  articles: StrapiData<Article>[]
}

export default function Index({ articles }: BlogProps) {
  const router = useRouter()

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
              <Article key={article.id} article={article.attributes} />
            ))}
          </S.ListaNaoOrdenada>
        </S.ArticleContainer>
      </Bounded>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes] = await Promise.all([
    fetchAPI<Article>("/articles", { populate: ["banner", "categories"] }),
    fetchAPI<Category>("/categories", { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
    },
    revalidate: 1,
  };
}