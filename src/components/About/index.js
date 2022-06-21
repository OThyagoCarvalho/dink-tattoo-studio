import React from 'react';
import Card from './Card/index';
import { Container } from './style';

export default function About() {
    return (
        <Container>
            <div>
                <Card />
                <Card />
                <Card />
            </div>
        </Container>
    );
}
