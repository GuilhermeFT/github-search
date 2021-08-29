import { createContext, FormEvent, ReactNode, useEffect, useState } from 'react'

interface SearchBarProviderProps {
  children: ReactNode
}

interface SearchBarContextData {
  search: boolean
  inputText: string
  changeView: boolean
  setSearch: (value: boolean) => void
  setInputText: (value: string) => void
  setChangeView: (value: boolean) => void
  handleFormSubmit: (e: FormEvent) => void
}

export const SearchBarContext = createContext({} as SearchBarContextData)

export function SearchBarProvider({ children }: SearchBarProviderProps) {
  const [inputText, setInputText] = useState('')
  const [changeView, setChangeView] = useState(false)
  const [search, setSearch] = useState(false)

  useEffect(() => {
    if (inputText === '') {
      setChangeView(false)
    }
  }, [inputText])

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    if (inputText !== '') {
      setChangeView(true)

      setTimeout(() => {
        setSearch(true)
      }, 500)
    }
  }

  const data = {
    inputText,
    setInputText,
    handleFormSubmit,
    changeView,
    setChangeView,
    search,
    setSearch
  }

  return (
    <SearchBarContext.Provider value={data}>
      {children}
    </SearchBarContext.Provider>
  )
}
