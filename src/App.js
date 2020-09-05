import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Button, Container, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Routes from "./Routes";
import "./App.css";
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import logo from './logo.png'

function App(props) {
  const [user, setUser] = useState(false);
  const [data, setData] = useState(null);
  
  return (
  <div className="frame">
    <div className="NavContainer">
    <Navbar  expand="lg" className="NavBar">
      <Navbar.Brand href="/">
      <img src={logo} 
      alt="Logo" 
      width="30"
      height="30"/>
        <img
        className="Logo"
        alt=""
        src="agreement.svg"
        width="30"
        height="30"
        />{' '} 
        <strong className="BrandText">NUBridge</strong>
      </Navbar.Brand>

        {user
        ? loggedIn()
        : notLoggedIn()}

    </Navbar>
    </div>

    {renderRoutes()}
    </div>
  );

  function renderRoutes() {
    if (data) {
      console.log("if case ");
      return <Routes {...props}/>
    } else if (user) {
      console.log("else case " + user)
      return null;
    } else {
      console.log("else case " + user);
      return <Routes {...props}/>;
    }
  }

  function loggedIn() {
    return (<>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <NavbarCollapse className="justify-content-end">
      <Nav.Link href="/" >
         Logout
        </Nav.Link>
      </NavbarCollapse>
      </>);
  }

  function notLoggedIn() {
    return (
      <Nav>
        <Nav.Link href="/signup" >Sign up</Nav.Link>
        <Nav.Link href="/login" >Login</Nav.Link>
      </Nav>
    );
  }
}

export default App;
