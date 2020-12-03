import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    background: #F2F2F2;
  }

  body {
    font-family: 'Indie Flower', cursive;
  }

  body.fontLoaded {
    font-family: 'Indie Flower', cursive;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
