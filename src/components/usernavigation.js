import { Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const Usernavigation = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">BulletinBoard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/user/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/user/todaysposts">Todaysposts</Nav.Link>
              <Nav.Link as={Link} to="/user/logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Usernavigation;