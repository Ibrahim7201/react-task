<div className="Signup">
  <div className="Signup-box">
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={setName} value={name} id="outlined-error-helper-text" label="Enter Your Name ... " helperText="Incorrect entry." />
      <TextField onChange={setEmail} value={email} id="outlined-error-helper-text" label="Enter Your Email ... " helperText="Incorrect entry." />
      <TextField onChange={setPassword} value={password} id="outlined-error-helper-text" label="Enter Your Password ... " helperText="Incorrect entry." />
      <TextField onChange={setPasswordConfirmation} value={passwordConfirmation} id="outlined-error-helper-text" label="Password Again ..." helperText="Incorrect entry." />
      <hr />
      <Button variant="contained">
        <Link style={{ color: "white", textDecoration: "none" }} to="/login">
          Sign-Up
        </Link>
      </Button>
      <br />
      <br />
      <br />
      <Button variant="contained">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Login-In
        </Link>
      </Button>
    </Box>
  </div>
</div>;
