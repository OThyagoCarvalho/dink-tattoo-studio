import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 56px;
    position: relative;
    top: 0;
    left: 0;
    background-color: white;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: var(--max-content-px-width);
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--lg-padding);
    color: black;

    @media (max-width: 1024px) {
        padding: 0 var(--md-padding);
    }

    @media (max-width: 768px) {
        padding: 0 var(--sm-padding);
    }
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
    a,
    a:active,
    a::after,
    a::before {
        text-decoration: none;
        color: #fff;
    }

    a:hover {
        color: #ddd;
    }
`;
