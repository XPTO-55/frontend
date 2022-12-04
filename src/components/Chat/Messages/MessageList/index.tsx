import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useAuth } from '../../../../context/auth'
import { getMessages } from '../../../../services/messages.service'
import { IForum, IMessage } from '../../../../services/types'
import { LoaderAllPage } from '../../../Layout/LoaderAllPage'
import { MessageCard } from './MessageCard'
import * as S from './styles'
import { over, Client } from 'stompjs'
import SockJS from 'sockjs-client'
interface InfoProps {
  data: IForum
}

export default function MessageList({ data }: InfoProps) {
  const [stompClient, setStompClient] = useState<Client>()
  const { user, loading } = useAuth()
  const { data: messages = [], isLoading } = useQuery<IMessage[]>(['messages', data?.id], async () => await getMessages(data?.id))

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
    stompClient?.subscribe('/topic/public', onMessageReceived)
    // stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage)
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
    const payloadData = JSON.parse(payload.body)
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
    console.log(err)
  }

  const handleMessage = (event) => {
    const { value } = event.target
    // setUserData({ ...userData, message: value })
  }
  const sendValue = () => {
    if (stompClient) {
      const chatMessage = {
        // senderName: userData.username,
        // message: userData.message,
        status: 'MESSAGE',
        forum: 'public'
      }
      console.log(chatMessage)
      stompClient.send('/app/message', {}, JSON.stringify(chatMessage))
      // setUserData({ ...userData, message: '' })
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
