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
            <div className="topBox">
                <Container className="mt-4">
                    <Meta
                        siteTitle={title}
                        siteDescription={description}
                    />
                    <Header />
                    <Navigation />
                </Container>
            </div>
            <Container className="mt-4">
                <div className="content">{props.children}</div>
            </Container>

            <Footer />
            <style jsx>
                {`
                      .content {
                          padding-bottom: 600px;
                      }
                      .topBox {
                         position: relative;
                      }
                      .topBox::before {
                          content: '';
                          height: calc(100% + 400px);
                          //height: 230px;
                          background: #e7e7e7;
                          position: absolute;
                          width: 100%;
                          top: -100px;
                          z-index: -1;
                        }
                    `}
            </style>
        </>
    );
}
