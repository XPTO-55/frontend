import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useAuth } from '../../../../context/auth'
import { useChat } from '../../../../context/chat'
import { getMessages } from '../../../../services/messages.service'
import { IForum, IMessage } from '../../../../services/types'
import { LoaderAllPage } from '../../../Layout/LoaderAllPage'
import { MessageCard } from './MessageCard'
import * as S from './styles'
import { AxiosError } from 'axios'
interface InfoProps {
  data: IForum | null
}

export default function MessageList({ data }: InfoProps) {
  const { user, loading } = useAuth()
  const { notification } = useChat()
  const [messages, setMessages] = useState<IMessage[]>([])
  const { isLoading } = useQuery<unknown, AxiosError, IMessage[]>(
    ['messages', data?.id],
    async () => {
      if (!data) return
      return await getMessages(data?.id)
    },
    {
      onSuccess(apiResponse) {
        setMessages(apiResponse)
      }
    }
  )

  useEffect(() => {
    if (notification) {
      const message: IMessage = {
        id: notification?.id,
        message: notification?.message,
        senderName: notification?.senderName,
        senderId: notification?.senderId,
        forum: notification?.forum,
        replyes: notification?.replyes,
        createdAt: notification?.createdAt,
        updatedAt: notification?.updatedAt
      }
      setMessages((prev = []) => [...prev, message])
    }
  }, [notification])

  if (!data?.id) {
    return <S.Container></S.Container>
  }

  if (isLoading || loading) {
    return <LoaderAllPage />
  }
  return (
    <S.Container>
      {messages.length
        ? messages.map((message) => (
          <MessageCard
            className={
              String(message?.senderId) === String(user?.id)
                ? 'my-message'
                : undefined
            }
            key={message.id}
            message={message}
          />
        ))
        : null}
    </S.Container>
  )
}
