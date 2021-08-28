import { FaGithub } from 'react-icons/fa'

import { HeaderContainer } from './styles'

import { SearchBar } from '../SearchBar'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <FaGithub />
        <SearchBar />
      </div>
    </HeaderContainer>
  )
}
