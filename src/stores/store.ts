import { create } from 'zustand'

export interface IStore {
  currentUser: string | null
  setCurrentUser: (val: string) => void
  initialized: boolean
  setInitialized: (val: boolean) => void
  userProfile: object
  setUserProfile: (val: object) => void
  isSetting: boolean
  setIsSetting: (val: boolean) => void
  isClickCurrentUser: boolean
  setIsClickCurrentUser: (val: boolean) => void
}

const useStore = create<IStore>((set) => ({
  currentUser: null,
  setCurrentUser: (val: string) => set(() => ({ currentUser: val })),
  initialized: false,
  setInitialized: (val: boolean) => set(() => ({ initialized: val })),
  userProfile: {},
  setUserProfile: (val: object) => set(() => ({ userProfile: val })),
  isClickCurrentUser: false,
  setIsClickCurrentUser: (val: boolean) => set(() => ({ isClickCurrentUser: val })),
  isSetting: false,
  setIsSetting: (val: boolean) => set(() => ({ isSetting: val })),
}))

export default useStore
