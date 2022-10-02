import { createGlobalStyle } from 'styled-components'
import { styleReset } from 'react95'

export default createGlobalStyle`
  ${styleReset}

  html, body, #root {
    height: 100%;
  }

  #root {
    background-color: rgb(0, 128, 128);
  }
`
