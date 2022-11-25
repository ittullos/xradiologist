import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
// import LogoWhite from '../../assets/images/Xradiologist-logos_white.png'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            Xradiologist
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Sample Dictations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Radiologist Jobs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Educational Documents
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Website Links
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Articles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Presentations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Board Preparation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Board Preparation
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/about">
              <Nav.Link>
                About
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              Signup
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;