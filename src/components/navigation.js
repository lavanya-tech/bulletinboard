import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">BulletinBoard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/todaysposts">Todaysposts</Nav.Link>
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/signin">Signin</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signup">Signup</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;