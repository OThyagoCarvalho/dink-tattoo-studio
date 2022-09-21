import * as React from 'react';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/700.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Galery from '../components/Gallery';
import Layout from '../components/Layout';
import Faq from '../components/Faq';

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <Galery />
            <About />
            <Faq />
        </Layout>
    );
};

export default IndexPage;
