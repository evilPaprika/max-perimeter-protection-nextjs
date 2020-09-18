import matter from 'gray-matter';
import Link from 'next/link';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';

import heroCarouselContent from '../content/header.md';


export default function HeroCarousel() {
    const { logo, phone_number } = matter(headerContent).data;

    return (
        <header>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="..." alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <style jsx>
                {`

                `}
            </style>
        </header>
    );
}
