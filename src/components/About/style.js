import styled from 'styled-components';

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

`;

export const MaxContentContainer = styled.div`
    width: 100%;
    max-width: var(--max-content-px-width);
    padding: 0 var(--lg-padding);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 1024px) {
        padding: var(--md-padding);
    }

    @media (max-width: 768px) {
        padding: var(--sm-padding);
    }
`;
