import matter from 'gray-matter';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import landingPageContent from '../content/landing-page.md';


export default function HeroCarousel() {
    const pictures = matter(landingPageContent).data['hero-carousel'];

    return (
        <div>
            <Carousel>
                {pictures.map(({ picture, caption }) => {
                    return (
                        <Carousel.Item key={picture}>
                            <img
                                className="d-block w-100"
                                src={picture}
                                alt={caption}
                            />
                            <Carousel.Caption className="carousel-caption d-none d-md-block">
                                <p>{caption}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <style jsx>
                {`

                `}
            </style>
        </div>
    );
}
