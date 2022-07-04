import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyle from '../../styles/globalStyles';

export default function Layout({ children }) {
    return (
        <>
            <Header id="top" />
            <GlobalStyle />
            {children}
            <Footer />
        </>
    );
}
