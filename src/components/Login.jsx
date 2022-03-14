import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import useInputForm from "../hooks/useInputForm";
import { useToken } from "../auth/useToken";
import axios from "axios";
import "../styles/Login.css";
axios.defaults.withCredentials = true;

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/users";
  const userRef = useRef();
  const [email, setEmail] = useInputForm("");
  const [password, setPassword] = useInputForm("");
  const [errMsg, setErrMsg] = useState("");
  const [token, setToken] = useToken();
  useEffect(() => {
    userRef.current.focus();
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("http://localhost:3001/auth", {
        email,
        password,
      });

      await setToken(data.token);
      window.localStorage.setItem("role", data.data.user.role);
      await setAuth((oldState) => {
        return { ...oldState, isLogged: true, role: data.data.user.role };
      });
      navigate(from, { replace: true });
    } catch (err) {
      if (err.response.data.status === "fail") {
        setErrMsg("Incorrect Password or email");
      }
    }
  };
  return (
    <div className="login">
      <Box
        className="Login-box"
        component="form"
        onSubmit={handleLogin}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField required ref={userRef} onChange={setEmail} value={email} label="Enter Your Email ... " />
        <TextField type="password" required onChange={setPassword} value={password} label="Enter Your Password ... " />
        <hr />
        <p style={{ marginBottom: "10px" }}>{errMsg}</p>
        <Button type="submit" disabled={!email || !password ? true : false} variant="contained">
          Log In
        </Button>
        <p style={{ marginTop: "10px" }}>
          Don't have an account?{" "}
          <Link style={{ marginLeft: "10px" }} to="/signup">
            Signup Here
          </Link>
        </p>
      </Box>
    </div>
  );
};

export default Login;
