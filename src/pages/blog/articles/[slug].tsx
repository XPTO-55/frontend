import React from 'react'
import Head from 'next/head'
import * as S from './_styles'
import { Bounded } from '../../../components/blog/Bounded'
import { Heading } from '../../../components/blog/Heading'
import { HorizontalDivider } from '../../../components/blog/HorizontalDivider'
import { Header } from '../../../components/Layout/Header'
import { fetchAPI } from '../../../lib/api'
import { Article, Category } from '../../../lib/types'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

type LatestArticleProps = {
  article: Article
}

const LatestArticle = ({ article }: LatestArticleProps) => {
  return (
    <li>
      <S.LinkStyled href={`/blog/articles/${article.slug}`}>
        <S.ArticleTitle>
          {article.title}
        </S.ArticleTitle>
      </S.LinkStyled>
      <S.Paragrafo>
        {article.publishedAt ? dateFormatter.format(new Date(article.publishedAt)) : null}
      </S.Paragrafo>
    </li>
  )
}

type ArticleProps = {
  article: Article
}

const Article = ({ article }: ArticleProps) => {
  console.log('article', article)
  return (
    <>
      <Head>
        <title> Blog | CPA </title>
      </Head>
      <Header />
      <Head>
        <title>
          {article.title}
        </title>
      </Head>
      <Bounded asChild>
        <S.Backlink>
          <S.LinkStyled href="/blog">
            &larr; Back to articles
          </S.LinkStyled>
        </S.Backlink>
      </Bounded>
      <article>
        <Bounded asChild style={{ paddingBottom: 0 }}>
          <S.ArticleTitle>
           {article.title}
          </S.ArticleTitle>
          <S.Paragrafo>
            {article.publishedAt ? dateFormatter.format(new Date(article.publishedAt)) : null}
          </S.Paragrafo>
        </Bounded>
        <div>
           
        <Bounded asChild>
          <S.Paragrafo>
            {article.content}
          </S.Paragrafo>
        </Bounded>
        </div>
        {/* <SliceZone slices={article.data.slices} components={components} /> */}
      </article>
      {/* {latestArticles.length > 0 && (
        <Bounded asChild>
          <S.Conteiner>
            <HorizontalDivider />
            <S.DivConteinerImg>
              <Heading size="2xl" style={{ marginBottom: '5rem' }} >
                Latest articles
              </Heading>
              <S.ListaNaoOrdenada>
                {latestArticles.map((article) => (
                  <LatestArticle key={article.id} article={article} />
                ))}
              </S.ListaNaoOrdenada>
            </S.DivConteinerImg>
          </S.Conteiner>

        </Bounded>
      )} */}
    </>
  )
}

export default Article

export async function getStaticPaths() {
  const articlesRes = await fetchAPI<Article>("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const articlesRes = await fetchAPI<Article>("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["banner", "categories"]
  });

  const categoriesRes = await fetchAPI<Category>("/categories");

  return {
    props: { article: articlesRes.data[0].attributes, categories: categoriesRes },
    revalidate: 1,
  };
}