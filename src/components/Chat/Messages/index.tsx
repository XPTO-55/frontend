import React from 'react'
import * as S from './styles'
import { IForum } from '../../../services/types'
import { Header } from './Header'
import MessageList from './MessageList'
import { Footer } from './Footer'

interface MessagesProps {
  forum: IForum
}

function Messages (props: MessagesProps) {
  return (
    <S.Container>
      {props.forum ? <Header data={props.forum} /> : null}
      <MessageList data={props.forum} />
      {props.forum ? <Footer /> : null}
    </S.Container>
  )
}

export default Messages
