import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from './Header';
import Meta from './Meta';


export default function Layout(props) {
    return (
        <Container className="mt-4">
            <Meta
                siteTitle={props.siteTitle}
                siteDescription={props.siteDescription}
            />
            <Header siteTitle={props.siteTitle} />
            <div className="content">{props.children}</div>
            <style jsx>
                {`
  
        `}
            </style>
        </Container>
    );
}
