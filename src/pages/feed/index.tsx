import React from 'react'
import { FeedProps, StaticProps } from './types'
import { GetStaticProps } from 'next'
import * as prismicNext from '@prismicio/next'
import Prismic from 'prismic-javascript'
import * as S from './styles'
import { createClient } from '../../../prismicio'
import { Bounded } from '../../components/blog/Bounded'
import Sidebar from '../../components/Layout/Sidebar'
import { Post } from '../../components/Feed/Post'
import Head from 'next/head'
import { ProtectedLayout } from '../../components/ProtectedLayout'
import { HeaderBase } from '../../components/Layout/HeaderBase'
import { Heading } from '../../components/blog/Heading'

export default function Feed({ posts }: FeedProps) {
  return (
    <ProtectedLayout>
      <>
        <Head>
          <title> Feed | CPA </title>
        </Head>
        <HeaderBase />
      <S.Container>
        <Sidebar />
          <S.Main>
            <Bounded asChild size='wide'>
              <Heading asChild size='2xl'>
                <h2>
                  Feed
                </h2>
              </Heading>
            </Bounded>
            <Bounded asChild size="wide">

            <S.ListaNaoOrdenada>
              {posts.length > 0
                ? posts.map(post => (
                  <Post key={post.id} post={post} />
                ))
                : null}
            </S.ListaNaoOrdenada>
          </Bounded>
        </S.Main>
      </S.Container>
    </>
    </ProtectedLayout>
  )
}

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

  const posts = await client.getAllByType('post', {
    orderings: [
      { field: 'my.post.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' }
    ],
    fetchLinks: 'comments',
    pageSize: 5
  })

  const postsComments = await Promise.all(posts.map(async (post) => {
    const comments = await client.query(
      Prismic.Predicates.at('my.comments.post', post.id)
    )

    // @ts-expect-error
    post.comments = comments.results

    return post
  }))

  return {
    props: {
      posts: postsComments
    },
    revalidate: 5
  }
}
