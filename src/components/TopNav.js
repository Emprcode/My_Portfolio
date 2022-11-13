import React from 'react'
import img from '../assets/img1.png'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";



export const TopNav = () => {
  return (
    <Navbar  expand="md" id="navbar" className= "nav-bar" collapseOnSelect>
    <Container>
      <Link to="/"> <img src={img} alt="logo" width="70px"/></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto p-3 fw-bold mobile-navbar " >
          <Link  className='nav-link' to="/skills">Skills</Link>
          <Link className='nav-link' to="/projects">Projects</Link>
          <Link className='nav-link' to="/about-me">About me</Link>
          <Link className='nav-link' to="/contact">Contact</Link>
         
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    
  )
}
