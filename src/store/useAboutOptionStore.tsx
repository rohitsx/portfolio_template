import { create } from 'zustand'

export type SetAboutProps = 'Intro' | 'Resume' | 'Career' | 'Education'

type Store = {
  aboutOption: SetAboutProps;
  setAboutOption: (v: SetAboutProps) => void;
}

export const useAboutOption = create<Store>()((set) => ({
  aboutOption: "Intro",
  setAboutOption: (v: SetAboutProps) => set(state => (
    { aboutOption: v }
  ))
}))

