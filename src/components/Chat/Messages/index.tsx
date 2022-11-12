import React from 'react'
import * as S from './styles'
import CardInfo from './Header/CardInfo'
import { IForum } from '../../../services/forum.service'
import { Header } from './Header'
import MessageList from './MessageList'


interface MessagesProps {
  forum: IForum
}

function Messages(props: MessagesProps) {
  return (
    <S.Container>
      <Header data={props.forum} />
      <MessageList />
      <Header data={props.forum} />
    </S.Container>
  )
}

export default Messages