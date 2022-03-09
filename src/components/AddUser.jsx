import React, { Component } from "react";
import AddUserModal from "./AddUserModal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
          <Modal open={this.state.open} onClose={this.handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add User's data
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <AddUserModal />
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AddUser;
