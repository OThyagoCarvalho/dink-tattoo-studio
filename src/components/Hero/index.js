import React from 'react';
import { Container, ImageContainer, Overlay, ContentContainer } from './style';

export default function Hero() {
    return (
        <Container>
            <ImageContainer>
                <Overlay></Overlay>
                <ContentContainer>
                    <div>
                        <h1>
                            <span> D'Ink </span> Tattoo Studio
                        </h1>
                        <p> You Cant Fake True Cool.</p>
                        <p>Abrimos de Segunda a Sexta - das 13:00 às 20:00</p>
                        <a
                            target="_blank"
                            href="https://wa.me/message/YO5TFNUHJZV3P1"
                        >
                            {' '}
                            quero um orçamento{' '}
                        </a>
                    </div>
                </ContentContainer>
            </ImageContainer>
        </Container>
    );
}
