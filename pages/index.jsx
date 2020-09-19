import matter from 'gray-matter';
import React from 'react';

import Cards from '../components/Cards';
import HeroCarousel from '../components/HeroCarousel';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import landingPageContent from '../content/landing-page.md';


const Index = () => {
    const { content } = matter(landingPageContent);

    return (
        <Layout pathname="/">
            <section>
                <HeroCarousel />
                <Cards />
                <MarkdownContent markdownBody={content} />
            </section>
        </Layout>
    );
};

export default Index;
