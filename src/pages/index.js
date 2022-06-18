import * as React from 'react';
import GlobalStyle from '../styles/globalStyles';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/700.css';
import Header from '../components/Header';
import Hero from '../components/Hero';

const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Hero />

            {/* 
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"> 
    */}
        </>
    );
};

export default IndexPage;
