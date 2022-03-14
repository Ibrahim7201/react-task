import React, { Component } from "react";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import "../styles/User.css";
import { AuthContext } from "../contexts/AuthProvider";
class User extends Component {
  static contextType = AuthContext;

  render() {
    const { setOpen, handleDelete, editMode, setEditMode } = this.context;
    return (
      <>
        {this.props.users.map((user) => (
          <TableRow key={user.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell style={{ fontWeight: "bold" }} component="th" scope="user">
              {user.name}
            </TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right">{user.phone}</TableCell>
            <TableCell align="right">
              {user.address.street}, {user.address.suite}, {user.address.city}
            </TableCell>
            <TableCell align="right">
              <Link className="Details" to={`/users/${user.id}`}>
                Full Details
              </Link>
              <Button
                onClick={() => {
                  setOpen(true);
                  setEditMode(true);
                }}
                style={{ marginRight: "7px" }}
                variant="contained"
                color="secondary"
              >
                Edit
              </Button>
              <Button onClick={() => handleDelete(user.id)} variant="contained" color="error">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }
}

export default User;
