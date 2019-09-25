import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Auth } from 'aws-amplify';
import { StyledOutlinedButton } from "./Button";
import { Link } from "react-router-dom";

const signOut = () => Auth.signOut()

function Navigation() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Link to="/" className="navbar-brand">Builder Turret</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">Home</Link>
      </Nav>
        <StyledOutlinedButton variant="outline-success" onClick={signOut}>Sign-out</StyledOutlinedButton>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
