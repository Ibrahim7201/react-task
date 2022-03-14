import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Button from "@mui/material/Button";
import "../styles/UserData.css";
const UserData = ({ user }) => {
  const { data } = useContext(AuthContext);
  const navigate = useNavigate();
  const { email, name, phone, address } = data.users.find((el) => el.id == user);
  return (
    <>
      <div className="flexing">
        <div className="User-data">
          <h1>Name: </h1> <span>{name}</span>
          <hr />
          <h1>Email: </h1>
          <span>{email}</span>
          <hr />
          <h1>Phone Number: </h1>
          <span>{phone}</span>
          <hr />
          <h1>Address: </h1>
          <div style={{ marginBottom: "8px" }}>Street: {address.street}</div>
          <div style={{ marginBottom: "8px" }}>Suite: {address.suite}</div>
          <div>City: {address.city}</div>
          <br />
        </div>
        <div>
          <Button style={{ marginTop: "20px" }} onClick={() => navigate(-1)} variant="contained" size="medium">
            Back
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserData;
