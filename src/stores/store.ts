import { create } from 'zustand'
import { IMessages, ITypingMessage } from '../interface/messages'
import { IActiveUser, IAlias } from '../interface/users'

export interface IStore {
  currentUser: string | null
  setCurrentUser: (val: string) => void
  authToken: Promise<string> | null
  setAuthToken: (val: Promise<string>) => void
  initialized: boolean
  setInitialized: (val: boolean) => void
  userProfile: object
  setUserProfile: (val: object) => void
  chatList: object
  setChatList: (val: object) => void
  isAddUser: boolean
  setIsAddUser: (val: boolean) => void
  isSetting: boolean
  setIsSetting: (val: boolean) => void
  isUserDetail: boolean
  setIsUserDetail: (val: boolean) => void
  isClickCurrentUser: boolean
  setIsClickCurrentUser: (val: boolean) => void
  isSetNickname: boolean
  setIsSetNickname: (val: boolean) => void
  alias: IAlias | null
  setAlias: (val: IAlias) => void
  // socket
  activeUser: IActiveUser[] | null
  setActiveUser: (val: IActiveUser[]) => void
  typingMessage: ITypingMessage | null
  setTypingMessage: (val: ITypingMessage) => void
  messages: IMessages | null
  setMessages: (val: IMessages) => void
  delivered: IMessages | null
  setDelivered: (val: IMessages) => void
}

const useStore = create<IStore>((set) => ({
  currentUser: null,
  setCurrentUser: (val: string) => set(() => ({ currentUser: val })),
  authToken: null,
  setAuthToken: (val: Promise<string>) => set(() => ({ authToken: val })),
  initialized: false,
  setInitialized: (val: boolean) => set(() => ({ initialized: val })),
  userProfile: {},
  setUserProfile: (val: object) => set(() => ({ userProfile: val })),
  chatList: {},
  setChatList: (val: object) => set(() => ({ userProfile: val })),
  isAddUser: false,
  setIsAddUser: (val: boolean) => set(() => ({ isAddUser: val })),
  isSetting: false,
  setIsSetting: (val: boolean) => set(() => ({ isSetting: val })),
  isUserDetail: false,
  setIsUserDetail: (val: boolean) => set(() => ({ isUserDetail: val })),
  isClickCurrentUser: false,
  setIsClickCurrentUser: (val: boolean) => set(() => ({ isClickCurrentUser: val })),
  isSetNickname: false,
  setIsSetNickname: (val: boolean) => set(() => ({ isSetNickname: val })),
  alias: null,
  setAlias: (val: IAlias) => set(() => ({ alias: val })),
  // socket
  activeUser: null,
  setActiveUser: (val: IActiveUser[]) => set(() => ({ activeUser: val })),
  typingMessage: null,
  setTypingMessage: (val: ITypingMessage) => set(() => ({ typingMessage: val })),
  messages: null,
  setMessages: (val: IMessages) => set(() => ({ messages: val })),
  delivered: null,
  setDelivered: (val: IMessages) => set(() => ({ delivered: val })),
}))

export default useStore
