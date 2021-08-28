import { useContext } from 'react'
import { SearchBarContext } from 'src/contexts/SearchBarContext'

export function useSearchBar() {
  return useContext(SearchBarContext)
}
