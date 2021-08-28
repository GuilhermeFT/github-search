import { createContext, ReactNode, useState } from 'react'

interface SearchBarProviderProps {
  children: ReactNode
}

interface SearchBarContextData {
  inputText: string
  setInputText: (value: string) => void
}

export const SearchBarContext = createContext({} as SearchBarContextData)

export function SearchBarProvider({ children }: SearchBarProviderProps) {
  const [inputText, setInputText] = useState('')

  const data = {
    inputText,
    setInputText
  }

  return (
    <SearchBarContext.Provider value={data}>
      {children}
    </SearchBarContext.Provider>
  )
}
