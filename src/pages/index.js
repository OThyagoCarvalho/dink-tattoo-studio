import * as React from 'react';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/700.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Galery from '../components/GalleryAndForm';
import Layout from '../components/Layout';

const IndexPage = () => {
    return (
        <Layout>            
            <Hero />
            <About />
            <Galery />
        </Layout>
    );
};

export default IndexPage;
