import { HeaderContainer, Container } from './style';
import React from 'react';
import logo from '../../images/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <HeaderContainer>
            <Container>
                <img id="top" style={{ height: 32}} src={logo} alt="logo" />
                <MenuIcon style={{ height: 48}} />
            </Container>
        </HeaderContainer>
    );
}
