import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'

import { App } from './App'
import GlobalStyle from './GlobalStyle'

const rootNode = document.getElementById('root')

render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={original}>
      <App />
    </ThemeProvider>
  </>,
  rootNode
)
