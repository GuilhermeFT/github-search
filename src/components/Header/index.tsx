import { FaGithub } from 'react-icons/fa'
import { useSearchBar } from 'src/hooks/useSearchBar'

import { HeaderContainer } from './styles'

import { SearchBar } from '../SearchBar'

export function Header() {
  const { inputText } = useSearchBar()

  return (
    <HeaderContainer hiddenBar={inputText !== ''}>
      <div>
        <FaGithub />
        <SearchBar compact={inputText === ''} />
      </div>
      <div>
        <FaGithub />
        <SearchBar compact={inputText === ''} />
      </div>
    </HeaderContainer>
  )
}
