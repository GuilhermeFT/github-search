import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import darkTheme from './styles/themes/darkTheme'

import { SearchBarProvider } from './contexts/SearchBarContext'
import { Home } from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <SearchBarProvider>
      <ThemeProvider theme={darkTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </SearchBarProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
