import { useEffect, useState } from 'react'

import { Header } from '../../components/Header'
import { List } from '../../components/List'
import { useSearchBar } from '../../hooks/useSearchBar'

export function Home() {
  const { changeView } = useSearchBar()
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    if (changeView) {
      const timer = setTimeout(() => {
        setShowList(changeView)

        return () => {
          clearTimeout(timer)
        }
      }, 500)
    } else {
      setShowList(changeView)
    }
  }, [changeView])

  return (
    <>
      <Header />
      {showList && <List />}
    </>
  )
}
