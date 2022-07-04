import React from 'react';
import { Container } from './style';
import QuiltedImageList from './ImageGrid';
import Form from './Form/index';

export default function Galery() {
  
    return (
        <Container>
            <h2>NOSSOS TRABALHOS</h2>
            <div>
                <QuiltedImageList />
                <Form />
            </div>
        </Container>
    );
}
