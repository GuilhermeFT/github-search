import { FaGithub } from 'react-icons/fa'
import { useSearchBar } from 'src/hooks/useSearchBar'

import { HeaderContainer } from './styles'

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
