import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar fixed="top" />
        <Navbar.Brand href="#home"><img src="https://i.ibb.co/mDkDkjZ/White-Solid.jpg"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/concerts">Shows</Nav.Link>
            <Nav.Link href="/records">Records</Nav.Link>
            <Navbar.Brand><Link to="https://www.instagram.com/tehworldfamous/">
            <img src="https://i.ibb.co/bryY2zW/instagram.png"/></Link></Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;