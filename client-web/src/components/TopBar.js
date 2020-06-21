import React from 'react';

import { UserContext } from '../context/UserContext';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';


class TopBar extends React.Component {
  static contextType = UserContext;

  render() {
    const user = this.context.user;
    const nickname = user ? user.nickname : "guest";
    const loginTitle = `Welcome, ${nickname}!`;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to='/'><Navbar.Brand>Board</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          {/*
            <Nav.Link href="#featured">Featured</Nav.Link>
            <Nav.Link href="#topics">Topics</Nav.Link>
          */}
          </Nav>
          <Nav>
            <NavDropdown title={loginTitle} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              {/*
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBar;

