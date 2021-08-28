import { FaArrowRight } from 'react-icons/fa'

import { SearchContainer } from './styles'

export function SearchBar() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Github username" />
      <button>
        <FaArrowRight />
      </button>
    </SearchContainer>
  )
}
