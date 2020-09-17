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
                    <Row className="justify-content-between text-light h4">
                        <Col className="">
                            Адрес
                            <div className="lead">{physical_address}</div>
                        </Col>
                        <Col className="">
                            Телефон
                            <div className="lead">{phone_number}</div>
                        </Col>
                        <Col className="">
                            E-Mail
                            <div className="lead">{email}</div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <style jsx>
                {`
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
