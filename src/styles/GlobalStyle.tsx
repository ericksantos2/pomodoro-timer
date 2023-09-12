import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    align-items: center;
    background-color: #b2faff;
    display: flex;
    font-family: var(--font-family);
    justify-content: center;
    min-height: 100vh;
  }

  :root {
    --font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyle;