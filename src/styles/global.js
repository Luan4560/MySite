import { createGlobalStyle } from 'styled-components';

const GlobaStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    font-family: 'Roboto', sans-serif;
  }

`;

export default GlobaStyle;