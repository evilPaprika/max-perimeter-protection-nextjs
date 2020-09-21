import matter from 'gray-matter';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';

import footerContent from '../content/footer.md';
import MarkdownContent from './MarkdownContent';


export default function Footer() {
    const { physical_address, phone_number, email, telegram_username } = matter(footerContent).data;

    return (
        <>
            <div className="backgroundImage" />
            <footer className="footer mb-4">
                <Container>
                    <Row>
                        <Col className="footer__column justify-content-between text-light d-xl-flex align-items-center d-none">
                            <img
                                width={70}
                                height={70}
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
                        <Col className="footer__column">
                            <span className="info__label">АДРЕС </span>
                            <span className="info__data"><MarkdownContent markdownBody={physical_address} /></span>
                        </Col>
                        <Col className="footer__column">
                            <span className="info__label">ТЕЛЕФОН </span>
                            <a className="info__data" href={`tel:${phone_number}`}>
                                {phone_number}
                            </a>
                        </Col>
                        <Col className="footer__column">
                            <span className="info__label">E-MAIL </span>
                            <a
                                href={`mailto:${email}`}
                                className="info__data"
                                rel="noreferrer"
                                target="_blank"
                            >{email}
                            </a>
                        </Col>
                        <Col className="footer__column">
                            <span className="info__label">TELEGRAM </span>
                            <a
                                href={`https://t.me/${telegram_username}`}
                                className="info__data"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img
                                    width={25}
                                    height={25}
                                    src="/static/telegram.svg"
                                    alt="site logo"
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <style jsx>
                {`
                    .info__label {
                      font-size: 18px;
                      font-weight: bold;
                      margin-right: 5px;
                      color: #fff;
                    }
                    .info__data {
                        display: block;
                        color: #fff;
                        font-size: 16px;
                    }
                    .info__data :global(*) {
                        color: #fff;
                    }
                    @media (max-width: 776px) {
                        :global(.footer__column) {
                            flex-basis: 50%;
                        }
                    }
                    @media (max-width: 576px) {
                        :global(.footer__column) {
                            flex-basis: 50%;
                        }
                        .info__label {
                            font-size: 14px;
                        }
                        .info__data {
                            font-size: 12px;
                        }
                    }
                    .footer__title {
                        margin-bottom: 0;
                        font-size: 24px;
                    }
                    .footer__title_first_word {
                        font-size: 29px;
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
                        position: absolute;
                        bottom: 0;
                    }
                `}
            </style>
        </>
    );
}
