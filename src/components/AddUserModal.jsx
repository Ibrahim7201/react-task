import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useInputForm from "../hooks/useInputForm";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import { v4 as uuidv4 } from "uuid";

const AddUserModal = (props) => {
  const { open, setOpen, handleAddingUser, editMode, setEditMode } = useContext(AuthContext);
  const [name, setName] = useInputForm("");
  const [email, setEmail] = useInputForm("");
  const [phone, setPhone] = useInputForm("");
  const [street, setStreet] = useInputForm("");
  const [suite, setSuite] = useInputForm("");
  const [city, setCity] = useInputForm("");
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
    <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
      <Box sx={{ ...style, width: 400 }}>
        <p id="parent-modal-description" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Enter user's data
        </p>
        <Box
          style={{ marginBottom: "1rem", marginTop: "1rem" }}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" value={name} onChange={setName} label="Name" variant="outlined" />
          <TextField id="outlined-basic" value={email} onChange={setEmail} label="Email" variant="outlined" />
          <TextField id="outlined-basic" value={phone} onChange={setPhone} label="Phone" variant="outlined" />
          <h4>Address: </h4>
          <TextField id="outlined-basic" value={street} onChange={setStreet} label="Street" variant="outlined" />
          <TextField id="outlined-basic" value={suite} onChange={setSuite} label="Suite" variant="outlined" />
          <TextField id="outlined-basic" value={city} onChange={setCity} label="City" variant="outlined" />
        </Box>
        <Stack style={{ display: "flex", justifyContent: "flex-end" }} direction="row" spacing={2}>
          <Button
            onClick={() => {
              handleAddingUser({ id: uuidv4(), name, email, phone, address: { street, suite, city } });
              setOpen(false);
            }}
            color="success"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
          <Button
            color="error"
            onClick={() => {
              setOpen(false);
              setEditMode(false);
            }}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
