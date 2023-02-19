export interface IUser {
  accountId: string
  chatList: IChatList[]
  createdAt: string
  updatedAt: string
}

export interface IUserChatList {
  accountId: string
  accountChatList: string
  alias: string
  lastMessage: ILastMessage[]
  createdAt: string
  updatedAt: string
}

export interface ILastMessage {
  createdAt: string
  message: IMessage
  receiverId: string
  senderId: string
  status: string
  updatedAt: string
}

export interface IMessage {
  text: string
  image: string
}

export interface IChatList {
  accountId: string
  alias: string
}

export interface IAlias {
  accountId: string
  alias: string
}

export interface IActiveUser {
  currentUser: string | null
  socketId: string
}
