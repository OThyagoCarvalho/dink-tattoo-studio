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
    display: flex;
    justify-content: center;
    
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 25px 0 10px 0;
  }  
    

    @media (max-width: 768px) {
      h2 {
        font-size: 95%;
      }

      h3 {
        font-size: 87.5%;
      }
      
    }
    

    @media (max-width: 480px) {
      h2 {
        font-size: 92.5%;
      }

      h3 {
        font-size: 85%;
      }
    }
`;

export default GlobalStyle;
