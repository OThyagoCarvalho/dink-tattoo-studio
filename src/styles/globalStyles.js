import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font: 16px 'DM Sans', sans-serif;
    box-sizing: border-box;    
  }
  body {
    background: no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }
  
  button {
    cursor: pointer;
  }

  
`;


export default GlobalStyle;