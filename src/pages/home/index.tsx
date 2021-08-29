import { useEffect, useState } from 'react'
import { Header } from 'src/components/Header'
import { List } from 'src/components/List'
import { useSearchBar } from 'src/hooks/useSearchBar'

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
