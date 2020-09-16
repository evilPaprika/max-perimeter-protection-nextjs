import matter from 'gray-matter';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Footer() {
    return (
        <>
            <div className="backgroundImage" />
            <footer className="footer">
                <Container>
                    <Row className="justify-content-between ">
                        <Col className="">
                            footer
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
                        height: 60px;
                        line-height: 60px;
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
