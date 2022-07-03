import styled from 'styled-components';

export const Container = styled.div`
    img {
        filter: saturate(0%);
    }

    img:hover {
        filter: saturate(110%) contrast(110%);
        transition: filter 0.5s;
        animation: ease-in-out;
    }
`;
