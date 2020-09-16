import React from 'react';
import Container from 'react-bootstrap/Container';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import Navigation from './Navigation';


export default function Layout(props) {
    return (
        <>
            <Container className="mt-4">
                <Meta
                    siteTitle={props.siteTitle}
                    siteDescription={props.siteDescription}
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
