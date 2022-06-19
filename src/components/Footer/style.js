import styled from 'styled-components';

export const Container = styled.footer`
    min-height: 300px;
    width: 100%;
    background-color: #111;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 25px 50px  0px 50px;
    box-sizing: border-box;
    color: #aaa;

    p {
      text-align: center;
      a {
        color: #aaa;
        text-decoration: none;
      }
    }

    hr {
      border: 0;
      border-top: 1px solid #aaa;
      margin-top: 1.25rem;
      width: 100%;      
    }
`;

export const SubContainer = styled.div`
    color: #aaa;
    position: relative;
    display: flex;    
    
    div {
        color: #aaa;
        display: flex;
        justify-content: space-between;        
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    h2, h3 {
      margin: 0;
    }
    a, a::after, a::before {
      text-decoration: none;
      color: #aaa;
    }
    a:hover {
      color: #ccc;
    }
`;

export const RowSubContainer = styled(SubContainer)`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        

`
export const ColSubContainer = styled(SubContainer)`
        flex-direction: column;
        margin: 1rem;  

`