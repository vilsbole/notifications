import { createGlobalStyle } from 'styled-components'
import { styleReset } from 'react95'

import ms_sans_serif from 'url:react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'url:react95/dist/fonts/ms_sans_serif_bold.woff2'

export default createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'ms_sans_serif';
  }

  #root {
    background-color: rgb(0, 128, 128);
  }
`
