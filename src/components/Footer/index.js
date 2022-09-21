import React from 'react';
import {
    Container,
    RowSubContainer,
    ColSubContainer,
    TitleRowSubContainer
} from './style';

export default function Footer() {
    return (
        <Container>
            <TitleRowSubContainer>
                <h3> d'ink </h3>
                <a href="#top">Topo ⬆</a>
            </TitleRowSubContainer>
            <hr></hr>
            <RowSubContainer>
                <ColSubContainer>
                    <h3>SOCIAL</h3>
                    <ul>
                        <li>
                            <a
                                href="https://www.instagram.com/dinktattoostudio/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/message/YO5TFNUHJZV3P1"
                                target="_blank"
                                rel="noreferrer"

                            >
                                whatsapp
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                            
                            >
                                {' '}
                                link{' '}
                            </a>
                        </li>
                    </ul>
                </ColSubContainer>
                <ColSubContainer>
                    <h3>SOBRE NÓS</h3>
                    <ul>
                        <li>
                            <a href="/">link</a>
                        </li>
                        <li>
                            <a href="/">link</a>
                        </li>
                        <li>
                            <a href="/">link</a>
                        </li>
                    </ul>
                </ColSubContainer>
                <ColSubContainer>
                    <h3>FAQ</h3>
                    <ul>
                        <li>
                            <a href="/">link</a>
                        </li>
                        <li>
                            <a href="/">link</a>
                        </li>
                        <li>
                            <a href="#">link</a>
                        </li>
                    </ul>
                </ColSubContainer>
            </RowSubContainer>
            <hr></hr>
            <p>
                {' '}
                D'Ink Tattoo Studio ₢ - Todos os Direitos Reservados - 2022.
                CNPJ: 00.000.000/0000-00
            </p>
            <p>
                {' '}
                Criado com ❤ por{' '}
                <a
                    target="_blank"
                    href="https://github.com/othyagocarvalho"
                    rel="noreferrer"
                >
                    {' '}
                    Thyago{' '}
                </a>
            </p>
        </Container>
    );
}
