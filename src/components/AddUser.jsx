import React, { Component } from "react";
import AddUserModal from "./AddUserModal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import "../styles/AddUser.css";

class AddUser extends Component {
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
      <div className="Adduser">
        <div className="Adduser-title">Users</div>
        <div>
          <Button style={{ backgroundColor: "white", color: "#376AA6", fontWeight: "bold", fontSize: "1.2rem" }} variant="contained" onClick={this.handleOpen}>
            + Add User
          </Button>
          <Modal open={this.state.open} onClose={this.state.handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
            <Box sx={{ ...style, width: 400 }}>
              <p id="parent-modal-description" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Enter user's data
              </p>
              <AddUserModal />
              <Stack style={{ display: "flex", justifyContent: "flex-end" }} direction="row" spacing={2}>
                <Button color="success" variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
                <Button color="error" onClick={this.handleClose} variant="outlined" startIcon={<DeleteIcon />}>
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AddUser;
