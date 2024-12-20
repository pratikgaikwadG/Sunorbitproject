import React from "react";
import { TextField, Button, Box, Typography, Link, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import chickChillImage from "../../assets/kris.png";
import logoImage from "../../assets/krisala.png"; // Import your logo image

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form submission
    // Navigate to the Dashboard
    navigate("/dashboard");
  };

  return (
    <Grid container style={{ height: "100vh" }}>
      {/* Left Image Section */}
      <Grid
        item
        xs={12}
        sm={6}
        style={{
          position: "relative",
          background: `url(${chickChillImage}) no-repeat center center`,
          backgroundSize: "cover",
          height:"100%",
        }}
      ></Grid>

      {/* Right Login Form Section */}
      <Grid
        item
        xs={12}
        sm={6}
        container
        alignItems="center"
        justifyContent="center"
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{
            width: "80%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Logo Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={logoImage}
              alt="Client Logo"
              style={{ width: "150px", height: "auto" }}
            />
          </Box>

          <TextField
            label="Mobile Number"
            type="text"
            fullWidth
            variant="outlined"
            InputProps={{
              style: { borderRadius: 18, backgroundColor: "lightgray" },
            }}
          />

          <TextField
            label="OTP"
            type="password"
            fullWidth
            variant="outlined"
            InputProps={{
              style: { borderRadius: 18, backgroundColor: "lightgray" },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 18,
              padding: "10px 0",
              marginTop: "10px",
              fontWeight: "bold",
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Sign In
          </Button>

          <Typography align="center" sx={{ marginTop: "10px" }}>
            <Link
              href="/help"
              underline="always"
              sx={{ color: "#007BFF", fontSize: "0.9rem" }}
            >
              Need help?
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
