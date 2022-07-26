import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav } from "reactstrap";
import "../css/navbar.css";

class Navbarr extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" expand="md" className="navHeader">
          <NavbarBrand className="navTextColor navFontText navFontSizeLogo ms-3 mx-5" href="/">
            Game
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink className="navTextColor navFontText navFontSize mx-3" href="/">
                  Home
                </NavLink>
              </NavItem>
            </Nav>
            <NavLink className="navTextColor navFontText navFontSize mx-3" href="/login">
              Sign In
            </NavLink>
            <NavLink className="navTextColor navFontText navFontSize me-5" href="signup">
              Sign Up
            </NavLink>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbarr;
