import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "react-bootstrap-icons";
import { Search, BellFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function NavbarHomepage() {
  return (
    <Navbar
      expand="lg"
      className="bg-black justify-content-between"
      data-bs-theme="dark"
    >
      <Container fluid className="mx-0">
        <Navbar.Brand href="#" className="">
          <img src="logo.png" width={90} height={50} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex justify-content-between"
        >
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link className="nav-link" to="/tv-shows">
              Tv-Shows
            </Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <Navbar.Text className="me-0">
            <i className="bi bi-search"></i>
            <Search color="white" size={15} className="me-3" />

            <a className="me-3" href="https://www.netflix.com/fr-en/">
              KIDS
            </a>

            <BellFill color="white" size={15} className="me-3" />

            <img src="img.netflix.jpeg" width={30} height={30} alt="logo" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHomepage;
