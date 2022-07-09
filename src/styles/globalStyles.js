import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #c00a00;
    --dark-bg: #111;
    --light-bg: #ddd;
    --sm-padding: 16px;
    --md-padding: 32px;
    --lg-padding: 40px;
    --max-content-px-width: 1680px;
  }

  html {
    text-rendering: optimizeLegibility;
  }

  * {
    margin: 0;
    padding: 0;
    font: 16px 'DM Sans', sans-serif;
    box-sizing: border-box;
  }

  body {
    background: no-repeat center top;
    -webkit-font-smoothing: antialiased;
    background-color: #eee;
       
  }
  
  button {
    cursor: pointer;
  }

  span {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  h1 {
    font-size: 5.5rem;
  }

  h2 {
    font-size: 2.625rem;
    font-weight: bold;    
    margin: 25px 0;
    display: flex;
    justify-content: center;
    
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 25px 0 10px 0;
  }  

  a, a::before, a::after { 
    text-decoration: none;
    color: inherit;
  }

    @media (max-width: 1024px) {


    }
    

    @media (max-width: 768px) {
      
    }
    

    @media (max-width: 480px) {
     
      }
    
`;

export default GlobalStyle;
