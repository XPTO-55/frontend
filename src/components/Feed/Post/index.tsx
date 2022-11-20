import React from 'react'
import { PrismicText, SliceZone } from '@prismicio/react'
import PrismicDOM from 'prismic-dom'
import { components } from '../../../../slices'
import { Heading } from '../../blog/Heading'
import { PostProps } from './types'
import * as S from './styles'
import Comment from './Comment'
import { InputComment } from './InputComment'

export const Post = ({ post }: PostProps) => {
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
          {post.comments.length > 0
            ? post.comments.map(comment => <Comment key={comment.id} comment={comment} />)
            : null}
        </S.ContainerComments>
        <InputComment />
      </S.listItemStyled>
    </>
  )
}
