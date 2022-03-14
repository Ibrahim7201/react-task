import React, { Component } from "react";
import Button from "@mui/material/Button";
import { AuthContext } from "../contexts/AuthProvider";
import "../styles/AddUser.css";

class AddUser extends Component {
  static contextType = AuthContext;
  render() {
    const { setOpen } = this.context;
    return (
      <div className="Adduser">
        <div className="Adduser-title">Users</div>
        <div>
          <Button style={{ backgroundColor: "white", color: "#376AA6", fontWeight: "bold", fontSize: "1.2rem" }} variant="contained" onClick={() => setOpen(true)}>
            + Add User
          </Button>
        </div>
      </div>
    );
  }
}

export default AddUser;
