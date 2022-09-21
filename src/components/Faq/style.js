import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 50px 0;
    background-color: #111;
`;

export const MaxContentContainer = styled.div`
    width: 100%;
    max-width: var(--max-content-px-width);
    padding: 0 var(--lg-padding);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;
