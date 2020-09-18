import matter from 'gray-matter';
import Link from 'next/link';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';

import landingPageContent from '../content/landing-page.md';


export default function Cards() {
    const { cards } = matter(landingPageContent).data;
    console.log('cards:', cards);

    return (
        <div>

            <style jsx>
                {`

                `}
            </style>
        </div>
    );
}
