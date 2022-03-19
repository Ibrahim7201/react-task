import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { AuthContext } from '../contexts/AuthProvider';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { openDel, setOpenDel, currentUser, handleDelete } =
    useContext(AuthContext);
  return (
    <div>
      <Modal
        open={openDel}
        onClose={() => setOpenDel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Deleting{' '}
            <span style={{ color: 'red' }}>{currentUser.name}</span>?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button
              onClick={() => {
                setOpenDel(false);
                handleDelete();
              }}
              variant="contained"
              color="success"
            >
              Confirm
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              variant="outlined"
              color="error"
              onClick={() => {
                setOpenDel(false);
              }}
            >
              Cancel
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
