import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand text-primary">
          NavbarBrand
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" data-cy="nav_button" />
        <Navbar.Collapse id="basic-navbar-nav" data-cy="nav_collapse">
          <Nav className="me-auto align-lg-items-center">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#menu">Features</Nav.Link>
            <Nav.Link href="#gallery">Project</Nav.Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          <a className="btn btn-outline-primary" href="#contact">
            Contact
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
