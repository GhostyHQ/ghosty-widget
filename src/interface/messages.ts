export interface IMessages {
  id: number
  senderId: string
  receiverId: string
  messages: IMessage[]
}

export interface IMessage {
  id: number
  senderId: string
  receiverId: string
  message?: string
  image?: string
}
