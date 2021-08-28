import { createGlobalStyle, css } from 'styled-components'

const Css = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem Arial, sans-serif;
  }

  body {
    background: ${props => props.theme.colors.darkBlue};
  }

  #root {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
    padding: 12px;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`
const GlobalStyle = createGlobalStyle`${Css}`

export default GlobalStyle
