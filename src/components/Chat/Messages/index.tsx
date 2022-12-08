import React, { useEffect } from 'react'
import * as S from './styles'
import { IForum } from '../../../services/types'
import { Header } from './Header'
import MessageList from './MessageList'
import { Footer } from './Footer'
import useSocket from '../../../hooks/useSocket'
import { useChat } from '../../../context/chat'

interface MessagesProps {
  forum: IForum
}

function Messages (props: MessagesProps) {
  // const [socket] = useSocket()
  // const { connected } = useChat()

  // useEffect(() => {
  //   if (socket?.connected) {
  //     socket.subscribe('/chatroom/public', (message) => {
  //       console.log('messageee', JSON.parse('message'))
  //     })
  //   }
  //   return () => {
  //     socket?.unsubscribe('/chatroom/public')
  //   }
  // }, [socket])
  return (
    <S.Container>
      {props.forum ? <Header data={props.forum} /> : null}
      <MessageList data={props.forum} />
      {props.forum ? <Footer forumId={props?.forum?.id} /> : null}
    </S.Container>
  )
}

export default Messages
