import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useAuth } from '../../../../context/auth'
import { useChat } from '../../../../context/chat'
import { getMessages } from '../../../../services/messages.service'
import { IForum, IMessage } from '../../../../services/types'
import { LoaderAllPage } from '../../../Layout/LoaderAllPage'
import { MessageCard } from './MessageCard'
import * as S from './styles'
interface InfoProps {
  data: IForum
}

export default function MessageList({ data }: InfoProps) {
  const { user, loading } = useAuth()
  const { notification } = useChat()
  const [messages, setMessages] = useState<IMessage[]>([])
  const { isLoading } = useQuery<IMessage[]>(['messages', data?.id], async () => await getMessages(data?.id), {
    onSuccess(data) {
      setMessages(data)
    }
  })

  useEffect(() => {
    if (notification) {
      setMessages(prev => [...prev, notification])
    }
  }, [notification])

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
