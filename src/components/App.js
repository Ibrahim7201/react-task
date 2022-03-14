import React, { Component } from "react";
import Navbar from "../components/Navbar";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import UsersPage from "../pages/UsersPage";
import MissingPage from "../pages/MissingPage";
import UserPage from "../pages/UserPage";
import UnauthorizedPage from "../pages/UnauthorizedPage.jsx";
import Layout from "../pages/Layout";
import RequireAuth from "../components/RequireAuth";
import AddUserModal from "../components/AddUserModal";

import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="unauthorized" element={<UnauthorizedPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="*" element={<MissingPage />} />
            <Route element={<RequireAuth allowedRoles={{ role: ["user"] }} />}>
              <Route path="users" element={<UsersPage />} />
              <Route path="users/:user" element={<UserPage />} />
            </Route>
          </Route>
        </Routes>
        <AddUserModal />
      </div>
    );
  }
}
