import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
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

  h2 {
    font-size: 3.5rem;
    font-weight: 700;    
    margin: 25px 0;
    
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 25px 0 10px 0;
  }
`;

export default GlobalStyle;
