import { Container, Navbar } from './style';
import React from 'react';
import logo from '../../images/logo.svg';

export default function Header() {
    return (
        <Container>
            <img style={{ height: 50 }} src={logo} alt="logo" />
            <Navbar>
                <ul>
                    <li>
                        <a href="/"> | HOME </a>
                    </li>
                    <li> | BLOG </li>
                </ul>
            </Navbar>
        </Container>
    );
}
