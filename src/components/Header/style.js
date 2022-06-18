import styled from 'styled-components';

export const Container = styled.header`
    background-color: #000;
    height: 75px;
    box-shadow: 0px 5px 10px 0px #000;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
`;

export const Navbar = styled.nav`
  color: #fff;   
  ul {
    list-style-type: none;
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
  }

  li + li {
    margin-left: 1rem;
  }
  a, a:active, a::after, a::before {
    text-decoration: none;
    color: #fff;    
  }

  a:hover {
    color: #ddd
  }
`
