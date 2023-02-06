import { create } from 'zustand'

export interface IStore {
  isClickCurrentUser: boolean
  setIsClickCurrentUser: (val: boolean) => void
}

const useStore = create<IStore>((set) => ({
  isClickCurrentUser: false,
  setIsClickCurrentUser: (val: boolean) => set(() => ({ isClickCurrentUser: val })),
}))

export default useStore
