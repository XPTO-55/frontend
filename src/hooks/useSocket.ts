import { useState, useEffect } from 'react'
import SockJS from 'sockjs-client'
import { Client, over } from 'stompjs'
const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL ?? 'http://localhost:7000/ws'

export default function useSocket() {
  const [socket, setSocket] = useState<Client>()

  useEffect(() => {
    return () => {
      if (socket?.ws) socket.disconnect(null)
    }
  }, [socket])

  useEffect(() => {
    const _socket = new SockJS(socketUrl)
    const stompClient = over(_socket)
    setSocket(stompClient)
  }, [])

  function socketRestart() {
    if (socket?.ws) {
      socket.disconnect(() => {
        console.log('socket disconnected')
      })
    }

    const _socket = new SockJS(socketUrl)
    const stompClient = over(_socket)
    stompClient.connect(null, (frame) => {
      console.log('socket connected:', frame.toString())
    })

    setSocket(stompClient)
  }

  return [socket, socketRestart] as [Client, () => void]
}
