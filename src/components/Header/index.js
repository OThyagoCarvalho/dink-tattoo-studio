import { Container } from './style';
import React from 'react';
import logo from '../../images/logo.svg';


export default function Header() {
    return (
        <Container>
            <img id="top" style={{ height: 50 }} src={logo} alt="logo" />            
        </Container>
    );
}
