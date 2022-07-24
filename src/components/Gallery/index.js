import React from 'react';
import Example from './Carousel';
import {
    Container,
    ContentContainer,
    CardContainer,
    TextContainer
} from './style';
import { Instagram, WhatsApp } from '@mui/icons-material';

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
                    <div>
                        <a
                            href="https://www.instagram.com/dinktattoostudio/"
                            target="_blank"
                        >
                            <Instagram />
                        </a>
                        <a
                            href="https://wa.me/message/YO5TFNUHJZV3P1"
                            target="_blank"
                        >
                            <WhatsApp /> <p> Orçamento </p> 
                        </a>
                    </div>
                </TextContainer>
            </ContentContainer>
        </Container>
    );
}
