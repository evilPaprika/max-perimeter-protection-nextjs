import matter from 'gray-matter';
import React from 'react';
import Container from 'react-bootstrap/Container';

import siteMetadataContent from '../content/site-metadata.md';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import Navigation from './Navigation';


export default function Layout(props) {
    const { title, description } = matter(siteMetadataContent).data;

    return (
        <>
            <Container className="mt-4">
                <Meta
                    siteTitle={title}
                    siteDescription={description}
                />
                <Header />
                <Navigation />
                <div className="content">{props.children}</div>
                <style jsx>
                    {`
  
                `}
                </style>
            </Container>
            <Footer />
        </>
    );
}
