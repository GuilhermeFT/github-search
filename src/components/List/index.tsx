import { useEffect, useState } from 'react'
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
  const [user, setUser] = useState<UserData | null>()
  const [repositories, setRepositories] = useState<RepositoryData[] | null>([])
  const [error, setError] = useState('')

  useEffect(() => {
    if (search) {
      setUser(null)

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

      api
        .get(`users/${inputText}/repos`)
        .then(response => {
          console.log(response.headers)

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
          setRepositories(repositoriesData)
        })
        .catch(_err => {
          setError('Repository error')
        })

      setSearch(false)
    }
  }, [search])
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

            <div>
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
            </div>
          </>
        ) : (
          <h1>{error}</h1>
        )}
      </ContentBox>
    </ListContainer>
  )
}
