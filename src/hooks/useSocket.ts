import { useState, useEffect, useCallback } from 'react'
import SockJS from 'sockjs-client'
import { Client, over } from 'stompjs'
const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL ?? 'http://localhost:7000/ws'

export default function useSocket() {
  const [socket, setSocket] = useState<Client | null>(null)

  useEffect(() => {
    return () => {
      if (socket?.ws) socket?.disconnect(() => {})
    }
  }, [socket])

  useEffect(() => {
    const _socket = new SockJS(socketUrl)
    const stompClient = over(_socket)
    setSocket(stompClient)
  }, [])

  const socketRestart = useCallback(function socketRestart() {
    if (socket?.ws) {
      socket?.disconnect(() => {
        console.log('socket disconnected')
      })
    }

    const _socket = new SockJS(socketUrl)
    const stompClient = over(_socket)
    setSocket(stompClient)
  }, [socket])

  return [socket, socketRestart] as [Client, () => void]
}
