import React, { Component } from "react";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import "../styles/User.css";
class User extends Component {
  render() {
    return (
      <>
        {this.props.users.map((user) => (
          <TableRow key={user.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell style={{ fontWeight: "bold" }} component="th" scope="user">
              {user.name}
            </TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right">{user.phone}</TableCell>
            <TableCell align="right">
              {user.address.street}, {user.address.suite}, {user.address.city}
            </TableCell>
            <TableCell align="right">
              <Button style={{ marginRight: "7px" }} variant="contained" color="secondary">
                Edit
              </Button>
              <Button onClick={() => this.props.handleDelete(user.id)} variant="contained" color="error">
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
