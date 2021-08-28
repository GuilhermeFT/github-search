import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import darkTheme from './styles/themes/darkTheme'

import { SearchBarProvider } from './contexts/SearchBarContext'
import { Routes } from './routes'

ReactDOM.render(
  <React.StrictMode>
    <SearchBarProvider>
      <ThemeProvider theme={darkTheme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </SearchBarProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
