import React, { useEffect } from 'react'
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
import { HeaderBase } from '../../components/Layout/HeaderBase'
import { Heading } from '../../components/blog/Heading'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'

export default function Feed({ posts }: FeedProps) {
  const { signed, loading } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!(signed) && !loading) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [signed, loading, router])

  if (loading || router.isFallback) {
    return <LoaderAllPage />
  }
  return (
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
