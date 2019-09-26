import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";

const signOut = () => Auth.signOut();

function Navigation() {
  return (
    <Navbar sticky="top" expand="lg">
      <Link to="/" className="navbar-brand">
        <img
          src="./Icon-192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
        &nbsp;Builder Turret
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav>
        <Button variant="outline-primary" onClick={signOut}>
          Sign-out
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
