import React from 'react';
import { Container, HeroText, Overlay } from './style';

export default function Hero() {
    return (
        <Container>
            <Overlay>
                <HeroText>
                    <h1> <span> D'Ink </span> Tattoo Studio </h1>
                    <p> You Cant Fake True Cool. 📍 ZO - Rio de Janeiro - RJ. </p>
                </HeroText>

                <button> O ESTÚDIO </button>
            </Overlay>
        </Container>
    );
}
