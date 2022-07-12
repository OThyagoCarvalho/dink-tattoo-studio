import React from 'react';
import { Container, FieldsContainer, FormTitle } from './style';

export default function Form() {
    return (
        <Container>
            <FormTitle>
                <h3>QUERO SABER MAIS</h3>
            </FormTitle>
            <FieldsContainer>
                <label for="name">Nome</label>
                <input id="name" name="name" type="text" placeholder="Nome" />
                <label for="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                />
                <label for="telephone">Telefone</label>
                <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="Telefone"
                />
                <textarea type="text" name="message" placeholder="Mensagem" />
            </FieldsContainer>
            <button type="submit"> ENVIAR </button>
        </Container>
    );
}
