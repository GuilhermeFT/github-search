import { useContext } from 'react'

import { SearchBarContext } from '../contexts/SearchBarContext'

export function useSearchBar() {
  return useContext(SearchBarContext)
}
