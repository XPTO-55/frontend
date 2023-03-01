import React, { useState } from 'react'
import { PrismicText, SliceZone } from '@prismicio/react'
import PrismicDOM from 'prismic-dom'
import { components } from '../../../../prismic/slices'
import { Heading } from '../../blog/Heading'
import { PostProps } from './types'
import * as S from './styles'
import { useQuery } from 'react-query'
import { ICommentsResponse } from '../../../services/types'
import { getComments } from '../../../services/comments.service'
import Comment from './Comment'
import { InputComment } from './InputComment'
import { Loader } from '../../../@shared/Loader'

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState<ICommentsResponse[]>([])
  const { isLoading } = useQuery<ICommentsResponse[]>(['messages', post?.id], async () => await getComments(post?.id), {
    onSuccess: (data) => {
      setComments(data)
    }
  })

  return (
    <>
      <S.listItemStyled>
        <S.UserContainer>
          <S.ProfileImageContainer>
            <S.ProfileImage src={PrismicDOM.Link.url(post.data.profileurl) || '/assets/img/user-avatar.png'} alt="" />
          </S.ProfileImageContainer>
          <S.TextContainer>
            <S.TextContainer>{post.data.username}</S.TextContainer>
            <S.Especiality>{post.data.email}</S.Especiality>
            <S.Especiality>{post.data.speciality}</S.Especiality>
          </S.TextContainer>
        </S.UserContainer>
        <S.Div1>
          <Heading asChild size='xl'>
            <h6>
              <PrismicText field={post.data.title} />
            </h6>
          </Heading>
        </S.Div1>
        <S.Div2>
          <SliceZone slices={post.data.slices} components={components} />
        </S.Div2>
        <Heading size='xl'>
          Comentários
        </Heading>
        <S.ContainerComments>
          {isLoading
            ? <Loader width={36} />
            : (
              comments.length > 0
                ? comments.map(comment => <Comment key={comment.id} comment={comment} />)
                : null
            )}

        </S.ContainerComments>
        <InputComment postId={post?.id} setComments={setComments} />
      </S.listItemStyled>
    </>
  )
}
