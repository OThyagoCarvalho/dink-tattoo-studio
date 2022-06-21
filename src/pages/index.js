import * as React from 'react';
import GlobalStyle from '../styles/globalStyles';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/700.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About';

const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <Header id="top"/>
            <Hero />
            <About />
            <Footer />            
        </>
    );
};

export default IndexPage;
