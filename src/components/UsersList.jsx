import React, { Component, memo } from 'react';
import '../styles/UserList.css';
import User from './User';
import AddUser from './AddUser';
import { AuthContext } from '../contexts/AuthProvider';
/////////////////////////////////
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
/////////////////////////////////////

class UsersList extends Component {
  static contextType = AuthContext;

  handleUserData = (id) => {
    return this.context.data.users.find((user) => user.id === id);
  };
  render() {
    return (
      <>
        <AddUser handleAddingUser={this.handleAddingUser} />

        <div className="UserList-Table">
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Number</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <User
                    handleUserData={this.handleUserData}
                    handleDelete={this.handleDelete}
                    users={this.context.data.users}
                  />
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </>
    );
  }
}

export default memo(UsersList);
