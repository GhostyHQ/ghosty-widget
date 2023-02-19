import React from 'react'
import io from 'socket.io-client'
import { SOCKET_URL } from '../utils/baseUrl'

export const socketio = io(SOCKET_URL, { transports: ['websocket'] })
export const SocketContext = React.createContext(socketio)
