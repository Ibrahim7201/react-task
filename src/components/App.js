import React, { Component } from "react";
import About from "./About";
import Container from "@mui/material/Container";
import UsersList from "./UsersList";
import { Route, Routes, NavLink } from "react-router-dom";
import "../styles/App.css";
export default class App extends Component {
  render() {
    return (
      // <Container maxWidth="xl">
      <div className="App">
        <nav className="App-nav">
          <div className="App-nav-Logo">
            <span>LOGO</span>
          </div>
          <div className="App-nav-navs">
            <span>Packages</span>
            <span>Offers</span>
            <span>Contact Us</span>
            <span>Currency($)</span>
            <span>Language (EN)</span>
            <span>Sign in</span>
            <span>Sign Up</span>
          </div>
        </nav>
        <Routes className="App-Routes">
          <Route path="/" element={<UsersList />} />
        </Routes>
      </div>
      //  </Container>
    );
  }
}
