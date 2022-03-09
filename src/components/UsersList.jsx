import React, { Component } from "react";
import axios from "axios";
import User from "./User";
import AddUser from "./AddUser";
/////////////////////////////////
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
/////////////////////////////////////

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  handleDelete = (userToDelete) => {
    this.setState((oldState) => {
      return {
        users: oldState.users.filter((user) => {
          return user.id !== userToDelete;
        }),
      };
    });
  };
  componentDidMount = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: data });
  };
  render() {
    return (
      <>
        <AddUser />
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
              <User handleDelete={this.handleDelete} users={this.state.users} />
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default UsersList;
