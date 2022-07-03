import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background: #c00a00;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;

    h2 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
    }

    > div {
        min-width: min(750px, 100vw);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }
`;
