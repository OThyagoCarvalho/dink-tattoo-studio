import React from 'react';
import Card from './Card/index';
import { Container } from './style';

export default function About() {
    return (
        <Container>
            <h2> O NOSSO TIME </h2>
            <div>
                <Card />
                <Card />
                <Card />
            </div>
        </Container>
    );
}
