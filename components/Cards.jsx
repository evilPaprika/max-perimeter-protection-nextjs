import matter from 'gray-matter';
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import landingPageContent from '../content/landing-page.md';


export default function Cards() {
    const { cards } = matter(landingPageContent).data;

    return (
        <section className="mt-5">
            <CardGroup
                style={{
                    display: 'flex',
                    'flex-flow': 'row wrap',
                }}
                className="justify-content-around"
            >
                {cards.map(({ picture, title, caption, link_slug }) => {
                    return (
                        <Card
                            key={link_slug}
                            border="primary"
                            className="rounded shadow mb-4 border-left"
                            style={{ width: '18rem', flex: 'initial' }}
                        >
                            <a href={`/templated-page/${link_slug}`}>
                                <Card.Img className="cardImage" variant="top" src={picture} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        {caption}
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    );
                })}
                <div style={{ width: '18rem', flex: 'initial' }} />
                <div style={{ width: '18rem', flex: 'initial' }} />
                <div style={{ width: '18rem', flex: 'initial' }} />
            </CardGroup>
            <style global jsx>
                {`
                    .cardImage {
                        width: 100%;
                        height: 15vw;
                        object-fit: cover;
                    }
                    .cardImage__last {
                        margin-right:auto;
                    }
                `}
            </style>
        </section>
    );
}
