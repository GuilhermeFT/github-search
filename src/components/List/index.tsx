import { useEffect, useRef, useState } from 'react'
import { useSearchBar } from 'src/hooks/useSearchBar'
import { api } from 'src/services/api'

import { ContentBox, ListContainer } from './styles'

import { Card } from '../Card'

type UserData = {
  id: string
  name: string
  username: string
  avatar: string
  link: string
}

type RepositoryData = {
  id: string
  link: string
  name: string
  description: string
  openIssues: number
  forksCount: number
  stargazersCount: number
}

export function List() {
  const { search, inputText, setSearch } = useSearchBar()

  const [error, setError] = useState('')
  const [currentPage, setcurrentPage] = useState(0)
  const [infitiny, setInfitiny] = useState(true)
  const [user, setUser] = useState<UserData | null>()
  const [repositories, setRepositories] = useState<RepositoryData[]>([])
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (search) {
      setInfitiny(true)
      setUser(null)
      setRepositories([])
      fetchGithubData(1)
    }
  }, [search])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else if (infitiny) {
      fetchGithubData(currentPage)
    }
  }, [currentPage])

  function fetchGithubData(page: number) {
    api
      .get(`users/${inputText}`)
      .then(response => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          username: response.data.login,
          avatar: response.data.avatar_url,
          link: response.data.html_url
        })
      })
      .catch(_err => {
        setError('User not found!')
      })

    api.get(`users/${inputText}/repos`, { params: { page } }).then(response => {
      const repositoriesData: RepositoryData[] = response.data.map(
        (repository: any) => {
          return {
            id: repository.id,
            name: repository.name,
            description: repository.description,
            openIssues: repository.open_issues_count,
            forksCount: repository.forks_count,
            stargazersCount: repository.stargazers_count,
            link: repository.html_url
          }
        }
      )

      repositoriesData.reverse()

      if (repositoriesData.length === 0) {
        setInfitiny(false)
      } else if (page !== 1) {
        setRepositories([...repositories, ...repositoriesData])
      } else {
        setRepositories(repositoriesData)
      }
    })

    setSearch(false)
  }

  return (
    <ListContainer>
      <ContentBox>
        {!error ? (
          <>
            <aside className={`${!user ? 'loader' : null}`}>
              <a target="_blank" href={user?.link} rel="noreferrer">
                <img src={user?.avatar} alt="" />
              </a>
              <h1>
                <span>{user?.name}</span>
                <span>{user?.username}</span>
              </h1>
            </aside>

            <div className={`${!user ? 'loader' : null}`}>
              {repositories?.map(repository => (
                <Card key={repository.id}>
                  <h2>{repository.name}</h2>
                  <p>{repository.description || 'Sem descrição'}</p>
                  <hr />
                  <ul>
                    <li>
                      <strong>{repository.stargazersCount}</strong>
                      <span>Stars</span>
                    </li>
                    <li>
                      <strong>{repository.forksCount}</strong>
                      <span>Forks</span>
                    </li>
                    <li>
                      <strong>{repository.openIssues}</strong>
                      <span>Issues</span>
                    </li>
                  </ul>
                  <a target="_blank" href={repository.link} rel="noreferrer">
                    Acessar
                  </a>
                </Card>
              ))}

              {infitiny && (
                <button
                  onClick={() => {
                    if (infitiny) {
                      setcurrentPage(old => old + 1)
                    }
                  }}
                >
                  Carregar mais
                </button>
              )}
            </div>
          </>
        ) : (
          <h1>{error}</h1>
        )}
      </ContentBox>
    </ListContainer>
  )
}
