import '@fontsource/epilogue/500.css'
import '@fontsource/epilogue/700.css'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
${normalize}
:root {
  --white: hsl(0, 0%, 98%);
  --grey: hsl(0, 0%, 41%);
  --black: hsl(0, 0%, 8%);
  --margin-sm: .5em;
  --margin: 1em;
}
  body { 
    font-family: "Epilogue", sans-serif;
    color: var(--grey);
  }

  p {
    line-height: 1.5;
    font-size: .977em;
  }

  h2 {
    font-size: 2em;
    color: var(--black);
    font-weight: 700;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`

export default GlobalStyle
