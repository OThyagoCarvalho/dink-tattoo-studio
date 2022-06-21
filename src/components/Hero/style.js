import styled from 'styled-components';
import bg from '../../images/heroBg.jpg';

export const Container = styled.section`
    height: 100vh;
    width: 100%;
    background-color: #fff;
    background-image: url(${bg});
    background-size: cover;
    color: #fff;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    align-items: center;
    color: #fff;

    button {
        position: absolute;
        bottom: 15vh;
        height: 50px;
        width: 150px;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
        background: #c00a00;
    }
`;

export const HeroText = styled.div`
    position: absolute;
    top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin: 0px;
        font-size: 4rem;
        line-height: 90%;
        margin-bottom: 10px;
        letter-spacing: 1px;
        span {
            color: #c00a00;
        }
    }

    p {
        margin: 0px;
    }
`;
