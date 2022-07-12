import React from 'react';
import Example from './Carousel';
import { Container, ContentContainer, CardContainer, TextContainer } from './style';
import { Instagram } from '@mui/icons-material';

export default function Galery() {
    return (
        <Container>
            <ContentContainer>
                <CardContainer>
                    <Example />
                </CardContainer>
                <TextContainer>
                    <h2>Inspire-se</h2>
                    <p> Conferindo mais pelas redes sociais </p>
                    <a href='https://www.instagram.com/dinktattoostudio/' target="_blank"> <Instagram/> Instagram </a>
                </TextContainer>
            </ContentContainer>
        </Container>
    );
}
