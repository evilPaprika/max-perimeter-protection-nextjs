import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Navigation(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="sm" className="mt-4 mb-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">О компании</Nav.Link>
            <Nav.Link href="#link">Наши решения</Nav.Link>
            <NavDropdown title="Работы" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Работа 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Работа 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3 ">Работа 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Работа 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <style jsx>
        {`

        `}
      </style>
  </>
  );
}

