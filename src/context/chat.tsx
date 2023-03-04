import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useAuth } from './auth'
import { Frame } from 'stompjs'
import useSocket from '../hooks/useSocket'
import { ICreateMessageRequest, IMessage } from '../services/types'
import { Toast } from '../@shared/Toast'
interface ChatContextData {
  sendMessage: (forumId: string, message: ICreateMessageRequest) => void
  notification: IMessageNotification | null
  notifications: IMessageNotification[]
  readNotification: (notificationId: number) => void
}

interface IMessageNotification extends IMessage {
  read: boolean
}

interface ChatProviderProps {
  children: React.ReactNode
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData)

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [socket, socketRestart] = useSocket()
  const { signed, user } = useAuth()
  const [notifications, setNotifications] = useState<IMessageNotification[]>([])
  const [notification, setNotification] = useState<IMessageNotification | null>(null)

  const readNotification = (notificationId: number) => {
    setNotifications(prev => (
      prev
        ? prev.map(notif => {
          if (notif.id === notificationId) {
            notif.read = true
            return notif
          }
          return notif
        })
        : prev
    ))
  }

  const onConnect = useCallback(() => {
    if (user) {
      socket.subscribe('/topic/public', onMessageReceived)
      socket.subscribe('/queue/chat.v1.messages.user_messages', onMessageReceived)
      socket.subscribe('/queue/chat.v1.messages.forum_messages', onMessageReceived)
      socket.subscribe(`/user/${user?.id}/queue/messages`)
    }
  }, [user, socket])

  const onError = useCallback((frame: string | Frame) => {
    console.log('Connection error', frame)
    setTimeout(() => socketRestart(), 2500)
  }, [socketRestart])

  useEffect(() => {
    if (signed) {
      if (socket) {
        socket.connect({
          userId: user?.id
        }, onConnect, onError)
      }
    }
  }, [socket, signed, onConnect, onError])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onMessageReceived = (payload: any) => {
    const payloadData = JSON.parse(payload.body)
    if (!payloadData) return
    const newNotification = {
      ...payloadData,
      read: false
    }
    console.log('message received', payloadData)
    setNotifications(prev => ([...prev, newNotification]))
    setNotification(newNotification)
    switch (payloadData.status) {
      case 'JOIN':
        // if (!privateChats.get(payloadData.senderName)) {
        //   privateChats.set(payloadData.senderName, [])
        //   setPrivateChats(new Map(privateChats))
        // }
        break
      case 'MESSAGE':
        // publicChats.push(payloadData)
        // setPublicChats([...publicChats])
        break
      default:
        break
    }
  }

  // const onPrivateMessage = (payload) => {
  //   const payloadData = JSON.parse(payload.body)
  //   // if (privateChats.get(payloadData.senderName)) {
  //   //   privateChats.get(payloadData.senderName).push(payloadData)
  //   //   setPrivateChats(new Map(privateChats))
  //   // } else {
  //   //   const list = []
  //   //   list.push(payloadData)
  //   //   privateChats.set(payloadData.senderName, list)
  //   //   setPrivateChats(new Map(privateChats))
  //   // }
  // }

  const sendMessage = (forumId: string, message: ICreateMessageRequest) => {
    console.log('message before socket', message)
    if (socket) {
      console.log('message', message)
      socket.send(`/app/message/${forumId}`, {}, JSON.stringify(message))
    }
  }

  const sendPrivateValue = () => {
    if (socket) {
      const chatMessage = {
        // senderName: userData.username,
        // receiverName: tab,
        // message: userData.message,
        status: 'MESSAGE'
        // forum: tab
      }

      // if (userData.username !== tab) {
      //   privateChats.get(tab).push(chatMessage)
      //   setPrivateChats(new Map(privateChats))
      // }
      socket.send('/app/private-message', {}, JSON.stringify(chatMessage))
      // setUserData({ ...userData, message: '' })
    }
  }

  // buscar chats daquele user
  // se subreescrever nos chats daquele user
  // quando chegar uma mensagem, mostrar o toast na tela
  return (
    <ChatContext.Provider value={{ sendMessage, notifications, readNotification, notification }}>
      {children}
      {notification
        ? Object.keys(notification).length > 0
          ? (
            <Toast
              type={'info'}
              title={`Nova mensagem de ${notification?.senderName}`}
              description={notification?.message}
            />
          )
          : null
        : null}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  return context
};
