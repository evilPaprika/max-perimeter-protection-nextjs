import Link from "next/link";
import headerContent from '../content/header.md'
import matter from 'gray-matter'
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container'
import Media from 'react-bootstrap/Media'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Header(props) {
  const {logo, site_name, phone_number} = matter(headerContent).data;
  return (
    <div>
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
                    <div className="title__text_first_word">Максимальная</div>
                    Защита Периметра</h1>
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
      <Navigation/>
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
        `}
      </style>
    </div>
  );
}

