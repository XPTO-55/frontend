import React, { useEffect } from 'react'
import { FeedProps, StaticProps } from './_types'
import { GetStaticProps } from 'next'
import * as S from './_styles'
import { Bounded } from '../../components/blog/Bounded'
import Sidebar from '../../components/Layout/Sidebar'
import { Post } from '../../components/Feed/Post'
import Head from 'next/head'
import { HeaderBase } from '../../components/Layout/HeaderBase'
import { Heading } from '../../components/blog/Heading'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'
import { Post as PostType } from '../../lib/types'
import { fetchAPI } from '../../lib/api'

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
                ? posts.map((post, index) => (
                  <Post key={index} post={post} />
                ))
                : null}
            </S.ListaNaoOrdenada>
          </Bounded>
        </S.Main>
      </S.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const postRes = await fetchAPI<PostType>("/posts", { populate: ["banner", "user"] })

  return {
    props: {
      posts: postRes.data,
    },
    revalidate: 5,
  };
}
