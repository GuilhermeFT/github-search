import { FaArrowRight } from 'react-icons/fa'
import { useSearchBar } from 'src/hooks/useSearchBar'

import { SearchContainer } from './styles'

interface SearchBarProps {
  compact: boolean
}

export function SearchBar({ compact }: SearchBarProps) {
  const { inputText, setInputText } = useSearchBar()
  return (
    <SearchContainer compact={compact}>
      <input
        type="text"
        value={inputText}
        placeholder="Github username"
        onChange={event => setInputText(event.target.value)}
      />
      <button>
        <FaArrowRight />
      </button>
    </SearchContainer>
  )
}
