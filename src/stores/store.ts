import { create } from 'zustand'

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
  isSetting: boolean
  setIsSetting: (val: boolean) => void
  isUserDetail: boolean
  setIsUserDetail: (val: boolean) => void
  isClickCurrentUser: boolean
  setIsClickCurrentUser: (val: boolean) => void
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
  isSetting: false,
  setIsSetting: (val: boolean) => set(() => ({ isSetting: val })),
  isUserDetail: false,
  setIsUserDetail: (val: boolean) => set(() => ({ isUserDetail: val })),
  isClickCurrentUser: false,
  setIsClickCurrentUser: (val: boolean) => set(() => ({ isClickCurrentUser: val })),
}))

export default useStore
