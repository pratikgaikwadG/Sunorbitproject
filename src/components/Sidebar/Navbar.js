import React, { useState } from "react";
import { Toolbar, MenuItem, Select, FormControl, InputLabel, Typography, Box, Divider } from "@mui/material";

const Navbar = () => {
  const [apartment, setApartment] = useState("Apartment 1");

  const handleApartmentChange = (event) => {
    setApartment(event.target.value);
  };

  return (
    <Box sx={{width:"92%", marginLeft:"32px"}}>
      {/* Navbar */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "8px 16px",  // Reduced padding for smaller height
        height: "50px"        // Set a specific height
      }}>
        {/* Left Side: Logo */}
        <Box>
          <Toolbar sx={{ padding: 0 }}> {/* Removing padding from the Toolbar */}
            <Typography variant="h6" sx={{ minWidth: 120, marginLeft: '40px', fontSize: '16px' }}>
              Dashboard/support overview
            </Typography>
          </Toolbar>
        </Box>

        {/* Right Side: Dropdown */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel></InputLabel>
            <Select
              value={apartment}
              label="Apartment"
              onChange={handleApartmentChange}
              sx={{ backgroundColor: "white" }}
            >
              <MenuItem value="Apartment 1">Apartment 1</MenuItem>
              <MenuItem value="Apartment 2">Apartment 2</MenuItem>
              <MenuItem value="Apartment 3">Apartment 3</MenuItem>
              <MenuItem value="Apartment 4">Apartment 4</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ marginTop: 1 }} />
    </Box>
  );
};

export default Navbar;
