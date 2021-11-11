import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand text-white">
          KDK
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" data-cy="nav_button" />
        <Navbar.Collapse id="basic-navbar-nav" data-cy="nav_collapse">
          <Nav className="me-auto align-lg-items-center">
            <Link className="nav-link" to="/#hero">
              Home
            </Link>
            <Link className="nav-link" to="/#about">
              About Us
            </Link>
            <Link className="nav-link" to="/#faq">
              FAQ
            </Link>
            <Link className="nav-link" to="/#team">
              Team
            </Link>
            <Link className="nav-link" to="/event">
              Events
            </Link>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </Nav>
          <a className="btn btn-light" href="#contact">
            Contact
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
