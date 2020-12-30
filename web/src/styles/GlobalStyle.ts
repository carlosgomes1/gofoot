import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;

    background: #eaeaea;
    color: #312e38;
    -webkit-font-smoothing: antialiased !important;

    font-size: 60%;
  }

  #root {
    display: flex;
  }

  body, input, button {
    font-family: 'Roboto Slab', sans-serif;
    font-weight: normal;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
