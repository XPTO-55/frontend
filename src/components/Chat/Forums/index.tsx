import { getForums, IForum } from '../../../services/forum.service'
import { useQuery } from 'react-query'
import * as S from './styles'
import Card from './Card'
import React, { Dispatch, SetStateAction } from 'react'

interface ForumProps {
  setSelectForum: Dispatch<SetStateAction<IForum>>
}

function Forums({ setSelectForum }: ForumProps) {
  const { data: forums, isLoading } = useQuery<IForum[]>(['forums'], getForums)

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  function handleClickForum(forum: IForum) {
    setSelectForum(forum)
  }

  return (
    <S.Container>
      <S.Title>Chats</S.Title>
      <S.CardContainer>
        {
          forums.map(forum => <Card onClick={() => handleClickForum(forum)} key={forum.id} data={forum} />)
        }
      </S.CardContainer>

    </S.Container>
  )
}

export default Forums
