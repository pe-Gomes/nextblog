import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.COLORS.base_background};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li  {
    list-style: none;
  }

`
