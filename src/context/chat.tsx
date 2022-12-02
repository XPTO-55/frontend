import { createContext, useContext, useState } from 'react'
import { IMessage } from '../services/types'
import { useAuth } from './auth'

interface ChatContextData {
  messages: IMessage[]
}

interface ChatProviderProps {
  children: React.ReactNode
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData)

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [status, setStatus] = useState<number>()
  const { user, signed } = useAuth()
  if (signed) {
    setStatus(user?.id)
  }
  // buscar chats daquele user
  // se subreescrever nos chats daquele user
  // quando chegar uma mensagem, mostrar o toast na tela
  return (
    <ChatContext.Provider value={{ messages: [] }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  return context
};
