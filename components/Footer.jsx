import matter from 'gray-matter';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
                        <Col className="justify-content-between text-light">
                            <img
                                width={100}
                                height={100}
                                src="/static/logo-white.svg"
                                alt="site logo"
                            />
                        </Col>
                        <Col className="justify-content-between text-light">
                            <Row>
                                <span className="info__label">Адрес: </span>
                                <span className="info__data">{physical_address}</span>
                            </Row>
                            <Row>
                                <span className="info__label">Телефон: </span>
                                <a className="info__data" href={`tel:${phone_number}`}>
                                    {phone_number}
                                </a>
                            </Row>
                            <Row>
                                <span className="info__label">E-Mail: </span>
                                <a href={`mailto:${email}`} className="info__data">{email}</a>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <style jsx>
                {`
                    .info__label {
                      margin-left: 10px;
                      font-size: 18px;
                      font-weight: bold;
                      line-height: 1.5;

                    }
                    .info__data {
                        color: #fff;
                        font-size: 16px;
                        line-height: 1.5;
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
