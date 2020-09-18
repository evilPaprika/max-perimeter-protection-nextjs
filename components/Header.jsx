import matter from 'gray-matter';
import Link from 'next/link';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';

import headerContent from '../content/header.md';


export default function Header() {
    const { logo, phone_number } = matter(headerContent).data;

    return (
        <header>
            <Row className="justify-content-between ">
                <Col className="btn flex-grow-0">
                    <Link href="/">
                        <Media>
                            <img
                                width={100}
                                height={100}
                                src={logo}
                                alt="site logo"
                            />
                            <Media.Body>
                                <h1 className="title__text text-left ml-3 text-primary">
                                    <div className="title__text_first_word">МАКСИМАЛЬНАЯ</div>
                                    ЗАЩИТА ПЕРИМЕТРА
                                </h1>
                            </Media.Body>
                        </Media>
                    </Link>
                </Col>
                <Col className="flex-grow-0">
                    <a href={`tel:${phone_number}`}>
                        <h1 className="text-right h2 phoneNumber">
                            {phone_number}
                        </h1>
                    </a>
                </Col>
            </Row>
            <style jsx>
                {`
                    .title__text {
                        margin: 8px 0 0 0;
                        font-size: 30px;
                    }
                    .title__text_first_word {
                        font-size: 43px;
                    }
                    .phoneNumber {
                        margin-top: 40px;
                        min-width: 300px;
                    }
                    @media (max-width: 576px) {
                        .title__text {
                            margin: 18px 0 0 0;
                            font-size: 20px;
                        }
                        .title__text_first_word {
                            font-size: 29px;
                        }
                        .phoneNumber {
                            margin-top: 10px;
                            min-width: 300px;
                            font-size: 26px;
                        }
                        .phoneNumber h1 {
                            margin-top: 10px;
                        }
                    }

                    h1 {
                        font-family: IntroBold, sans-serif;
                        font-weight: bold;
                        font-style:normal;
                    }
                `}
            </style>
        </header>
    );
}
