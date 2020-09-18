import matter from 'gray-matter';
import React from 'react';

import HeroCarousel from '../components/HeroCarousel';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import landingPageContent from '../content/landing-page.md';
import siteMetadata from '../content/site-metadata.md';


const Index = () => {
    const { content } = matter(landingPageContent);

    return (
        <Layout
            pathname="/"
        >
            <section>
                <HeroCarousel />
                <MarkdownContent markdownBody={content} />
            </section>
        </Layout>
    );
};

export default Index;
