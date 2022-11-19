import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'
import { Loader } from '../../@shared/Loader'
import { FeedProps, PostProps, StaticProps } from './types'
import { GetStaticProps } from 'next'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import * as S from './styles'
import { createClient } from '../../../prismicio'
import { Bounded } from '../../components/blog/Bounded'
import Sidebar from '../../components/Layout/Sidebar'
import { ProfileBar } from '../../components/Layout/ProfileBar'
import { Heading } from '../../components/blog/Heading'

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

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === 'image')

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image
  }
}

const Post = ({ post }: PostProps) => {
  const featuredImage = findFirstImage(post.data.slices)
  // const date = prismicH.asDate(
  //   post.data.publishDate || post.first_publication_date
  // )
  const excerpt = getExcerpt(post.data.slices)

  return (
    <>
      <S.listItemStyled>
        <S.UserContainer>
          <S.ProfileImageContainer>
            <S.ProfileImage src="https://github.com/milenafazolim.png" alt="" />
          </S.ProfileImageContainer>
          <S.TextContainer>
            <S.TextContainer>Jaqueline Oliveira</S.TextContainer>
            <S.Especiality>Psiquiatria</S.Especiality>
          </S.TextContainer>
        </S.UserContainer>
        <S.Div1>
          {/* <Heading asChild>
            <h4>
              <PrismicText field={post.data.title} />
            </h4>
          </Heading> */}

          {/* <S.Paragrafo>
            {formatDate.format(date)}
          </S.Paragrafo> */}
          {excerpt && (
            <S.Paragrafo2>
              {excerpt}
            </S.Paragrafo2>
          )}
        </S.Div1>
        <S.Div2>
          {prismicH.isFilled.image(featuredImage) && (
            <S.Image
              field={featuredImage}
              layout={'fill'}
            />
          )}
        </S.Div2>
        <Heading size='xl'>
          Comentários
        </Heading>
      </S.listItemStyled>
    </>
  )
}

export default function Feed({ posts }: FeedProps) {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!(user) && !loading) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [user, loading])

  if (loading || router.isFallback) {
    return <Loader width={34} />
  }
  return (
    <>
      <ProfileBar />
      <S.Container>
        <Sidebar />
        <S.Main>
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

  //   const posts = await client.graphQLFetch(`

  //     posts {
  //       comments_link {
  //         ...on coomments {
  //           comment
  //         }
  //       }
  //     }

  // `)

  const posts = await client.getAllByType('post', {
    orderings: [
      { field: 'my.post.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' }
    ],
    fetchLinks: 'comments',
    pageSize: 5
  })

  // const postsComments = await client().query([
  //   Prismic.Predicates.at('document.type', 'product'),
  //   Prismic.Predicates.at('my.product.category', category.id)
  // ])

  console.log('posts', posts)

  return {
    props: {
      posts
    },
    revalidate: 5
  }
}
