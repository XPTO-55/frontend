import { getForums } from '../../../services/forum.service'
import { useQuery } from 'react-query'
import * as S from './styles'
import Card from './Card'
import React, { Dispatch, SetStateAction } from 'react'
import { IForum } from '../../../services/types'
import Skeleton from 'react-loading-skeleton'

interface ForumProps {
  setSelectForum: Dispatch<SetStateAction<IForum | null>>
}

function Forums({ setSelectForum }: ForumProps) {
  const { data: forums = [], isLoading } = useQuery<IForum[]>(['forums'], getForums)

  function handleClickForum(forum: IForum) {
    setSelectForum(forum)
  }

  return (
    <S.Container>
      <S.Title>Chats</S.Title>
      <S.CardContainer>
        {
          forums?.length > 0 ? forums.map(forum => <Card onClick={() => handleClickForum(forum)} key={forum.id} data={forum} />) : null
        }
        {isLoading ? <Skeleton height={60} count={3} /> : null}
      </S.CardContainer>

    </S.Container>
  )
}

export default Forums
