import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './auth'
import { over, Client } from 'stompjs'
import SockJS from 'sockjs-client'
import { useRouter } from 'next/router'

interface ChatContextData {
  stompClient: Client
  sendMessage: (message: string) => void
  // connected: boolean
}

interface ChatProviderProps {
  children: React.ReactNode
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData)

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [stompClient, setStompClient] = useState<Client>()
  const { user, signed } = useAuth()
  const router = useRouter()

  if (!signed) {
    // router.push('/auth').then(console.log).catch(console.error)
  }

  useEffect(() => {
    registerUser()
  }, [])

  const connect = () => {
    const Sock = new SockJS('http://localhost:7000/ws')
    setStompClient(over(Sock))

    stompClient?.connect({}, onConnected, onError)
  }

  const onConnected = () => {
    // setUserData({ ...userData, connected: true })
    stompClient.subscribe('/topic/public', onMessageReceived)
    stompClient.subscribe('/topic/javainuse', onMessageReceived)
    // userJoin()
  }

  const userJoin = () => {
    const chatMessage = {
      // senderName: userData.username,
      status: 'JOIN'
    }
    stompClient.send('/app/message', {}, JSON.stringify(chatMessage))
  }

  const onMessageReceived = (payload) => {
    alert('')
    const payloadData = JSON.parse(payload.body)
    console.log('payloadData', payloadData)
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
    console.log(payload)
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
  }

  const handleMessage = (event) => {
    const { value } = event.target
    // setUserData({ ...userData, message: value })
  }
  const sendMessage = (message) => {
    if (stompClient) {
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
    if (stompClient) {
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
      stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage))
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
    <ChatContext.Provider value={{ sendMessage, stompClient }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  return context
};
