import { getForums } from '../../../services/forum.service'
import { useQuery } from 'react-query'
import * as S from './styles'
import Card from './Card'
import React, { Dispatch, SetStateAction } from 'react'
import { IForum } from '../../../services/types'
import { Loader } from '../../../@shared/Loader'

interface ForumProps {
  setSelectForum: Dispatch<SetStateAction<IForum>>
}

function Forums({ setSelectForum }: ForumProps) {
  const { data: forums, isLoading } = useQuery<IForum[]>(['forums'], getForums)

  if (isLoading) {
    return <Loader width={32} />
  }

  function handleClickForum(forum: IForum) {
    setSelectForum(forum)
  }

  return (
    <S.Container>
      <S.Title>Chats</S.Title>
      <S.CardContainer>
        {
          forums ? forums.map(forum => <Card onClick={() => handleClickForum(forum)} key={forum.id} data={forum} />) : null
        }
      </S.CardContainer>

    </S.Container>
  )
}

export default Forums
