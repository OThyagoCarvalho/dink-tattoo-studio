import styled from 'styled-components';
import bg from '../../images/heroBg.webp';

export const Container = styled.section`
    height: calc(85vh - 75px);
    width: 100%;
    color: #fff;
    background-color: #eee;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 1024px) {
        max-height: max(50vw, 284px);
        padding: var(--md-padding);
        margin-bottom: 195px;
        color: #000;
    }

    @media (max-width: 768px) {
        padding: var(--sm-padding);
    }
`;

export const ContentContainer = styled.div`
    width: 100%;
    max-width: var(--max-content-px-width);
    height: 100%;
    margin: 0 auto;
    padding: 0 var(--lg-padding);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 999;
    text-align: right;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }
    h1 {
        font-size: 58px;
        font-weight: bold;
        line-height: 0.9;
    }

    span {
        color: var(--primary-color);
    }

    p {
        font-size: 24px;
        font-weight: bold;
    }

    a {
        font-size: 24px;
        width: fit-content;
        height: fit-content;
        font-weight: bold;
        background-color: var(--primary-color);
        border-radius: 5px;
        padding: 10px 20px;
        margin-top: 15px;       
    }

    @media (max-width: 1024px) {
        padding: 0;
        justify-content: flex-start;
        text-align: left;
        position: absolute;
        bottom: calc(-75%);

        > div {
            align-items: flex-start;
        }

        h1 {
            font-size: 32px;
        }

        p {
            font-size: 16px;
            font-weight: 400;
        }

        a {
            font-size: 16px;
            background-color: #111;
            color: #fff;
        }
    }

    @media (max-width: 768px) {
        padding: 0;
        bottom: calc(-88%);
    }
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${bg});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
`;
