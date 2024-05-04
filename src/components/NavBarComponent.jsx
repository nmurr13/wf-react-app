import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar fixed="top" />
        <Navbar.Brand href="#home"><img src="https://i.ibb.co/Q9YxLwS/White-Solid-Transparent.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/concerts">Shows</Nav.Link>
            <Nav.Link href="/records">Records</Nav.Link>
            <Nav.Link href="/videos">Videos</Nav.Link>
            <Navbar.Brand><img src="https://i.ibb.co/bryY2zW/instagram.png"/></Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;