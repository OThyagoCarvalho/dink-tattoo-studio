import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ccc;
    min-height: 100%;
    padding: 50px 0;

    h2 {
        font-size: 32px;
        font-weight: 400;
        width: 100%;
        text-align: left;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }
`;
