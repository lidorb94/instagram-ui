import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faHome,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";

class Header extends React.Component {
  render() {
    let Logo = require("../Instagram_logo.png");

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <a className="navbar-brand" href="#">
            <img src={Logo} />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              <FontAwesomeIcon icon={faHome} size="sm" /> home
            </Link>

            <Link className="nav-link" to="/profile">
              <FontAwesomeIcon icon={faUserCircle} size="sm" /> profile
            </Link>

            <Link className="nav-link" to="/post/create">
              <FontAwesomeIcon icon={faEdit} size="sm" /> new post
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
