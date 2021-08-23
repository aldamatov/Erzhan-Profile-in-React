import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/img/logo.PNG'
import "./topNav.style.css";

export const TopNavBar = () => {
    return (
        <div>
            <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#">
        <img src={logo} width="100px" alt="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto fs-3 fw-bold">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link> 
        <Nav.Link href="#projects">Projects</Nav.Link> 
        <Nav.Link href="#contact">Contact</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
