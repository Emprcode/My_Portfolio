import React from 'react'
import img from '../assets/img1.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const TopNav = () => {
  return (
    <Navbar  expand="lg" id="navbar" className= "nav-bar" collapseOnSelect>
    <Container>
      <Navbar.Brand href="#home"> <img src={img} alt="logo" width="70px"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto " >
          <Nav.Link  href="#skills">Skills</Nav.Link>
          <Nav.Link  href="#projects">Projects</Nav.Link>
          <Nav.Link  href="#about-me">About me</Nav.Link>
          <Nav.Link  href="#contact">Contact</Nav.Link>
         
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    
  )
}