import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useAuth } from './auth'
import { client, Client, Frame } from 'stompjs'
import useSocket from '../hooks/useSocket'
import { ICreateMessageRequest, IMessage } from '../services/types'
import { Toast } from '../@shared/Toast'
interface ChatContextData {
  sendMessage: (forumId: string, message: ICreateMessageRequest) => void
  connected: boolean
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
  const [connected, setConnected] = useState(false)
  const [notifications, setNotifications] = useState<IMessageNotification[]>([])
  const [notification, setNotification] = useState<IMessageNotification | null>(null)

  // socket.subscribe('/topic/public', onMessageReceived)
  //   socket.subscribe('/queue/test', onMessageReceived)
  //   socket.subscribe(`/topic/user/${user.id}`, onMessageReceived)
  //   socket.subscribe('/topic/javainuse', onMessageReceived)
  //   socket.subscribe('/topic/forum/63ffd999375ffe5c2f7d73b3', onMessageReceived)
  //   console.log('url', socket.ws.url)

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

  const forumId = '63ffd999375ffe5c2f7d73b3'

  const onConnect = useCallback(() => {
    if (user) {
      socket.subscribe('/topic/public', onMessageReceived)
      socket.subscribe(`/user/${forumId}/queue/messages`, onMessageReceived)
      socket.subscribe(`/user/${user?.id}/queue/messages`, onMessageReceived)
    }
  }, [user, socket])

  const onError = useCallback((frame: string | Frame) => {
    console.error(frame)
  }, [])

  useEffect(() => {
    if (signed) {
      if (socket) {
        socket.connect({}, onConnect, onError)
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

  // const handleUsername = (event) => {
  //   const { value } = event.target
  //   // setUserData({ ...userData, username: value })
  // }

  // buscar chats daquele user
  // se subreescrever nos chats daquele user
  // quando chegar uma mensagem, mostrar o toast na tela
  return (
    <ChatContext.Provider value={{ sendMessage, connected, notifications, readNotification, notification }}>
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
