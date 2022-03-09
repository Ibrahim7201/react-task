import React, { Component } from "react";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditUserModal from "./EditUserModal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles/User.css";
class User extends Component {
  state = {
    open: false,
  };
  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });
  render() {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
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
              <Button onClick={this.handleOpen} style={{ marginRight: "7px" }} variant="contained" color="secondary">
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
