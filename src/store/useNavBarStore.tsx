import { create } from 'zustand'


type Store = {
  isOpen: boolean
  toggelIsOpen: () => void
}

export const useNavBarStore = create<Store>()((set) => ({
  isOpen: false,
  toggelIsOpen: () => set(state => ({isOpen: !state.isOpen}))
}))
