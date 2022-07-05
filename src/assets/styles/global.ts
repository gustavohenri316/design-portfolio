import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --papper-light: #FFFFFF;
  --papper-dark: #424242;
  --primary-main: #651FFF;
  --primary-light: #D1C4E9;
  --primary-dark: #311B92;
  --text-primary: rgba(0, 0, 0, 0.87);
  --text-secundary: rgba(0, 0, 0, 0.54);
  --text-secundary-dark: rgba(255,255,255,0.7);
  --default-light: #FAFAFA;
  --default-dark: #303030;
  --secundary-main: #9C27B0;
  --secundary-light: #E1BEE7;
  --secundary-dark: #4A148C;
  --text-disabled: rgba(0, 0, 0, 0.38);
  --text-field: rgba(0, 0, 0, 0.42);



}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  body, input, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  body{
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

