import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaHome,
  FaClock,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4">
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <h2>
              <Link style={{ color: "black", textDecoration: "none" }} to="/">
                KDK
              </Link>
            </h2>
            <p className="lead">
              Your local KDK club to reach your total goals
            </p>
            <div className="d-flex gap-3">
              <a href="https://twitter.com/">
                <FaTwitter size="1.5em" className="social_icon" />
                <span className="visually-hidden">Twitter</span>
              </a>
              <a href="https://github.com/">
                <FaInstagram size="1.5em" className="social_icon" />
                <span className="visually-hidden">Instagram</span>
              </a>
              <a href="https://github.com/">
                <FaFacebook size="1.5em" className="social_icon" />
                <span className="visually-hidden">Facebook</span>
              </a>
            </div>
          </Col>
          <Col lg={1} md={3} xs={6}>
            <ul className="list-unstyled mt-lg-0 mt-5">
              <li className="fw-bold">Homepage</li>
              <li>
                <Link style={{ color: "black" }} to="/#about">
                  About
                </Link>
              </li>
              <li>
                <Link style={{ color: "black" }} to="/#faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link style={{ color: "black" }} to="/#team">
                  Team
                </Link>
              </li>
              <li>
                <Link style={{ color: "black" }} to="/#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={1} md={3} xs={6}>
            <ul className="list-unstyled mt-lg-0 mt-5">
              <li className="fw-bold">Events</li>
              <li>
                <Link style={{ color: "black" }} to="/event">
                  Upcoming
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={1} md={3} xs={6}>
            <ul className="list-unstyled mt-lg-0 mt-5">
              <li className="fw-bold">Gallery</li>
              <li>
                <Link style={{ color: "black" }} to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={1} md={3} xs={6}>
            <ul className="list-unstyled mt-lg-0 mt-5">
              <li className="fw-bold">Legal</li>
              <li>
                <Link style={{ color: "black" }} to="/">
                  Privacy
                </Link>
              </li>
              <li>
                <Link style={{ color: "black" }} to="/">
                  Terms
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <span className="lead">
              &copy; {new Date().getFullYear()}, KDK. All rights reserved
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
