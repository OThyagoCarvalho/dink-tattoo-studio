import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ccc;
    min-height: 100vh;

    h2 {
        font-size: 3.5rem;
        font-weight: 700;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }
`;
