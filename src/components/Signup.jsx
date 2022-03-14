import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import { useRef, useState, useEffect } from "react";
import { useToken } from "../auth/useToken";
import useInputForm from "../hooks/useInputForm";
import axios from "axios";
axios.defaults.withCredentials = true;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Signup = () => {
  const navigate = useNavigate();
  const userRef = useRef();

  const [name, setName] = useInputForm("");
  const [validName, setValidName] = useState(false);

  const [password, setPassword] = useInputForm("");
  const [validPassword, setValidPassword] = useState(false);

  const [email, setEmail] = useInputForm("");
  const [validEmail, setValidEmail] = useState(false);

  const [passwordConfirmation, setPasswordConfirmation] = useInputForm("");
  const [validPwCon, setValidPwCon] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [token, setToken] = useToken();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
    const match = password === passwordConfirmation;
    setValidPwCon(match);
  }, [password, passwordConfirmation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3001/auth", {
        name,
        password,
        passwordConfirmation,
        email,
      });
      setToken(data.token);
      navigate("/users");
    } catch (err) {
      if (err.response.status === 404) {
        setErrMsg("Error in signing up, try again later.");
      } else if (err.response.status === 422) {
        setErrMsg("User already Exists");
      }
    }
  };
  return (
    <div className="Signup">
      <div className="Signup-box">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField required ref={userRef} onChange={setName} color={validName ? "success" : "error"} value={name} variant="filled" label="Enter Your Name ... " helperText={validName ? "Valid Name" : "Name between 3 ~ 23 Characters"} />
          <TextField required onChange={setEmail} value={email} color={validEmail ? "success" : "error"} label="Enter Your Email ... " variant="filled" helperText={validEmail ? "Valid Email" : "Please enter a valid email."} />
          <TextField required type="password" onChange={setPassword} value={password} label="Enter Your Password ... " color={validPassword ? "success" : "error"} variant="filled" helperText={validPassword ? "Valid Password" : "Enter between 8~24 `numbers + A/a + special character`"} />
          <TextField required type="password" onChange={setPasswordConfirmation} value={passwordConfirmation} label="Password Again ..." color={validPwCon ? "success" : "error"} variant="filled" helperText={validPwCon ? "" : "Please repeat same password"} />
          <hr />
          <p style={{ marginBottom: "10px" }}>{errMsg}</p>

          <Button type="submit" disabled={!validName || !validPassword || !validPwCon || !validEmail ? true : false} variant="contained">
            Sign Up
          </Button>
          <p style={{ marginTop: "10px" }}>
            Already have an account? <Link to="/login">Login Here</Link>
          </p>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
