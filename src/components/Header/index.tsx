import { FaGithub } from 'react-icons/fa'

import { HeaderContainer } from './styles'

import { useSearchBar } from '../../hooks/useSearchBar'
import { SearchBar } from '../SearchBar'

export function Header() {
  const { changeView } = useSearchBar()

  return (
    <HeaderContainer hiddenBar={changeView}>
      <div>
        <FaGithub />
        <SearchBar compact={!changeView} />
      </div>
      <div>
        <FaGithub />
        <SearchBar compact={!changeView} />
      </div>
    </HeaderContainer>
  )
}
