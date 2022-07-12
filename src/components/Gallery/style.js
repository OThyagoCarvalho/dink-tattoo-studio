import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;
    background: var(--light-bg);
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`;

export const ContentContainer = styled.div`
    width: 100%;
    max-width: var(--max-content-px-width);
    height: 100%;
    margin: 0 auto;
    padding: 0 var(--lg-padding);
    display: flex;
    flex-wrap: wrap;
    text-align: left;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    @media (max-width: 1024px) {
        padding: 0 var(--md-padding);

        > div {
            width: 100%;
        }

        h2 {
            font-size: 1.625rem;
        }
    }

    @media (max-width: 768px) {
        padding: 0 var(--sm-padding);
    }
`;

export const CardContainer = styled.div`
    // workaround to style the entire carousel
    > div {
        border-radius: 0 0 5px 5px;
        background-color: var(--dark-bg);
        color: #fff;
        margin-top: 15px;
        width: 650px;
        height: auto;

        @media (max-width: 1024px) {
            width: 100%;
            p {
                padding-left: 24px;
            }
        }
        p {
            padding: 5px 16px;
            text-align: right;
        }
    }
    img {
        width: 100%;
        height: 100%;

        object-position: top;

        @media (max-width: 1024px) {
            width: 100%;
            height: auto;
        }
    }
`;

export const TextContainer = styled.div`
    padding-left: 5%;

    h2 {
        margin-bottom: 26px;
        font-size: 42px;
    }

    p {
        font-size: 1.38rem;
        max-width: 450px;
        word-wrap: break-word;
        color: var(--greyed-out);
    }

    a {
        font-size: 24px;
        width: fit-content;
        height: fit-content;
        font-weight: bold;
        color: #fff;
        background-color: var(--dark-bg);
        border-radius: 5px;
        margin-top: 25px;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: #222;
        }
        svg {
            margin-right: 10px;
        }
    }

    @media (max-width: 1024px) {
        padding: 25px 0 0 0;

        h2 {
            margin-bottom: 16px;
            font-size: 26px;
        }

        a {
            font-size: 16px;
            background-color: #111;
            color: #fff;
        }
    }
`;
