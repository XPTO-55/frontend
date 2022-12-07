import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './auth'
import { Frame } from 'stompjs'
import useSocket from '../hooks/useSocket'
import { IMessage } from '../services/types'
import { Toast } from '../@shared/Toast'
interface ChatContextData {
  sendMessage: (message: string) => void
  connected: boolean
  notifications: IMessageNotification[]
}

interface IMessageNotification extends IMessage {
  read: boolean
}

interface ChatProviderProps {
  children: React.ReactNode
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData)

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [socket] = useSocket()
  const { user, signed } = useAuth()
  const [connected, setConnected] = useState(false)
  const [notifications, setNotifications] = useState<IMessageNotification[]>()
  const [notification, setNotification] = useState<IMessageNotification>({} as IMessageNotification)

  useEffect(() => {
    if (signed) {
      if (socket) {
        registerUser()
      }
    }
  }, [socket])

  const connect = () => {
    socket.connect({}, onConnected, onError)
  }

  const onConnected = (ev: Frame) => {
    console.log('connected', ev.toString())
    setConnected(true)
    // setUserData({ ...userData, connected: true })

    socket.subscribe('/chatroom/public', onMessageReceived)
    // socket.subscribe('/topic/public', onMessageReceived)
    // socket.subscribe('/topic/javainuse', onMessageReceived)

    // userJoin()
  }

  const userJoin = () => {
    const chatMessage = {
      // senderName: userData.username,
      status: 'JOIN'
    }
    socket.send('/app/message', {}, JSON.stringify(chatMessage))
  }

  const onMessageReceived = (payload) => {
    const payloadData = JSON.parse(payload.body)
    setNotifications(prev => ([{ ...prev }, {
      ...payloadData,
      read: false
    }]))
    setNotification({
      ...payloadData,
      read: false
    })

    setTimeout(() => {
      setNotification({} as IMessageNotification)
    }, 1000)
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

  const onPrivateMessage = (payload) => {
    console.log('private message', payload)
    const payloadData = JSON.parse(payload.body)
    // if (privateChats.get(payloadData.senderName)) {
    //   privateChats.get(payloadData.senderName).push(payloadData)
    //   setPrivateChats(new Map(privateChats))
    // } else {
    //   const list = []
    //   list.push(payloadData)
    //   privateChats.set(payloadData.senderName, list)
    //   setPrivateChats(new Map(privateChats))
    // }
  }

  const onError = (err) => {
    setConnected(false)
    console.error('chat context err', err)
  }

  const handleMessage = (event) => {
    const { value } = event.target
    // setUserData({ ...userData, message: value })
  }
  const sendMessage = (message) => {
    if (socket) {
      const chatMessage = {
        senderName: user?.username,
        message,
        status: 'MESSAGE',
        forum: 'public'
      }
      // console.log(chatMessage)
      // stompClient.send('/chat.sendMessage', {}, JSON.stringify(chatMessage))
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

  const handleUsername = (event) => {
    const { value } = event.target
    // setUserData({ ...userData, username: value })
  }

  const registerUser = () => {
    connect()
  }
  // buscar chats daquele user
  // se subreescrever nos chats daquele user
  // quando chegar uma mensagem, mostrar o toast na tela
  return (
    <ChatContext.Provider value={{ sendMessage, connected, notifications }}>
      {children}
      {Object.keys(notification).length > 0
        ? (
          <Toast
            type={'info'}
            title={`Nova mensagem de ${notification?.senderName}`}
            description={notification?.message}
          />
        )
        : null}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  return context
};
