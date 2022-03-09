import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
class AddUserModal extends Component {
  render() {
    return (
      <Box
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Phone" variant="outlined" />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
      </Box>
    );
  }
}

export default AddUserModal;
