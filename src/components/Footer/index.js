import React from 'react';
import {
    Container,
    RowSubContainer,
    ColSubContainer
} from './style';

export default function Footer() {
    const styles = {
        column: { display: 'flex', flexDirection: 'column' },
        row: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    };
    return (
        <Container>
            <RowSubContainer>
                <h2> d'ink </h2>
                <a href="#top"> Voltar ao Topo ⬆</a>
            </RowSubContainer>
            <hr></hr>
            <RowSubContainer>
                <ColSubContainer>
                    <h3>SOCIAL</h3>
                    <ul>
                        <li>
                            <a href="#">instagram</a>
                        </li>
                        <li>
                            <a href="#">whatsapp</a>
                        </li>
                        <li>
                            <a href="tel:+5521999999999"> telefone </a>
                        </li>
                    </ul>
                </ColSubContainer>
                <ColSubContainer>
                    <h3>CUIDADOS</h3>
                    <ul>
                        <li>
                            <a href="#">link social</a>
                        </li>
                        <li>
                            <a href="#">link social</a>
                        </li>
                        <li>
                            <a href="#">link social</a>
                        </li>
                    </ul>
                </ColSubContainer>
                <ColSubContainer>
                    <h3>FAQ</h3>
                    <ul>
                        <li>
                            <a href="#">Cuidados</a>
                        </li>
                        <li>
                            <a href="#">link social</a>
                        </li>
                        <li>
                            <a href="#">link social</a>
                        </li>
                    </ul>
                </ColSubContainer>
            </RowSubContainer>
            <hr></hr>
            <p> D'Ink Tattoo Studio ₢ - Todos os Direitos Reservados - 2022. CNPJ: 00.000.000/0000-00</p>
            <p> Criado com ❤ por <a target="_blank" href='https://github.com/othyagocarvalho'> Thyago </a></p>
        </Container>
    );
}
