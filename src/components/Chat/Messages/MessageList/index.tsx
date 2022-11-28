import React from 'react'
import { useQuery } from 'react-query'
import { useAuth } from '../../../../context/auth'
import { getForumMessages } from '../../../../services/forum.service'
import { IForum, IMessage } from '../../../../services/types'
import { LoaderAllPage } from '../../../Layout/LoaderAllPage'
import { MessageCard } from './MessageCard'
import * as S from './styles'

interface InfoProps {
  data: IForum
}

export default function MessageList({ data }: InfoProps) {
  const { user, loading } = useAuth()
  const { data: messages = [], isLoading } = useQuery<IMessage[]>(['messages', data?.id], async () => await getForumMessages(data?.id))

  if (!data?.id) {
    return (
      <S.Container>

      </S.Container>
    )
  }

  if (isLoading || loading) {
    return <LoaderAllPage />
  }
  return (
    <S.Container>
      {
        messages.length
          ? messages.map(message => <MessageCard className={String(message?.userId) === String(user?.id) ? 'my-message' : null} key={message.id} message={message} />)
          : null}
    </S.Container>
  )
}
