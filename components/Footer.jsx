import matter from 'gray-matter';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';

import footerContent from '../content/footer.md';


export default function Footer() {
    const { physical_address, phone_number, email } = matter(footerContent).data;

    return (
        <>
            <div className="backgroundImage" />
            <footer className="footer mb-5">
                <Container>
                    <Row>
                        <Col className="justify-content-between text-light d-md-flex align-items-center d-none">
                            <img
                                width={100}
                                height={100}
                                src="/static/logo-white.svg"
                                alt="site logo"
                            />
                            <Media.Body className="text-white">
                                <h1 className="footer__title text-left ml-3">
                                    <div className="footer__title_first_word">МАКСИМАЛЬНАЯ</div>
                                    ЗАЩИТА ПЕРИМЕТРА
                                </h1>
                            </Media.Body>
                        </Col>
                        <Col className="justify-content-between text-light">
                            <Row className="info_row">
                                <span className="info__label">Адрес: </span>
                                <span className="info__data">{physical_address}</span>
                            </Row>
                            <Row className="info_row">
                                <span className="info__label">Телефон: </span>
                                <a className="info__data" href={`tel:${phone_number}`}>
                                    {phone_number}
                                </a>
                            </Row>
                            <Row className="info_row">
                                <span className="info__label">E-Mail: </span>
                                <a
                                    href={`mailto:${email}`}
                                    className="info__data"
                                    rel="noreferrer"
                                    target="_blank"
                                >{email}
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <style jsx>
                {`
                    @media (max-width: 576px) {
                        :global(.footer__logo) {
                            display: none;
                        }
                    }

                    .footer__title {
                        font-size: 25px;
                    }
                    .footer__title_first_word {
                        font-size: 30px;
                    }
                    :global(.info_row) {
                        align-items: baseline;
                        flex-wrap: nowrap;
                    }
                    .info__label {
                      margin-left: 10px;
                      font-size: 18px;
                      font-weight: bold;
                      margin-right: 5px;
                    }
                    .info__data {
                        color: #fff;
                        font-size: 16px;
                    }
                    .footer {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                    }
                    .backgroundImage {
                        background: #FFF url("/static/Factory_Silhouette_Skyline.svg") no-repeat bottom;
                        z-index: -1;
                        height: 600px;
                        max-width: 100%;
                        width: 100vw;
                    }
                `}
            </style>
        </>
    );
}
