export interface IMessages {
  message: IMessage
  senderId: string
  receiverId: string
  status: string
  createdAt: string
  updatedAt: string
}

export interface IMessage {
  text: string
  image: string
}
