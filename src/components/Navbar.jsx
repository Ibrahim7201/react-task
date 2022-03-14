import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/App.css";
import { AuthContext } from "../contexts/AuthProvider";
const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = async () => {
    await axios.delete("http://localhost:3001/auth");
    setAuth((oldAuth) => {
      return {
        ...oldAuth,
        isLogged: false,
        role: "",
      };
    });
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("role");
  };
  return (
    <nav className="App-nav">
      <div className="App-nav-Logo">
        <span>LOGO</span>
      </div>
      <div className="App-nav-navs">
        {auth.isLogged ? (
          <>
            <span>
              <Link style={{ color: "green", textDecoration: "none" }} to="/users">
                Users
              </Link>
            </span>
          </>
        ) : (
          ""
        )}

        <span>Offers</span>
        <span>Contact Us</span>
        <span>Currency($)</span>
        <span>Language (EN)</span>
        {!auth.isLogged ? (
          <>
            <span>
              <Link style={{ color: "black", textDecoration: "none" }} to="/login">
                Log In
              </Link>
            </span>
            <span>
              <Link style={{ color: "black", textDecoration: "none" }} to="/signup">
                Sign Up
              </Link>
            </span>
          </>
        ) : (
          <span>
            <Link onClick={handleLogout} style={{ color: "black", textDecoration: "none" }} to="/login">
              Log out
            </Link>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
