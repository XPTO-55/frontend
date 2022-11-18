import React from 'react'
import { useQuery } from 'react-query'
import { Loader } from '../../../../@shared/Loader'
import { getForumMessages } from '../../../../services/forum.service'
import { IForum, IForumMessages } from '../../../../services/types'
import { MessageCard } from './MessageCard'
import * as S from './styles'

interface InfoProps {
  data: IForum
}

export default function MessageList({ data }: InfoProps) {
  if (!data?.id) {
    return (
      <S.Container>

      </S.Container>
    )
  }

  const { data: forumsMessages, isLoading } = useQuery<IForumMessages>(['forums', data.id], getForumMessages)

  if (isLoading) {
    return <Loader width={32} />
  }

  return (
    <S.Container>
      {
        forumsMessages
          ? forumsMessages.messages.map(message => <MessageCard key={message.id} data={message} />)
          : null}
    </S.Container>
  )
}
