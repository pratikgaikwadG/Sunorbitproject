import React from "react";
import { Box, Typography, Grid, Stack, Paper, LinearProgress } from "@mui/material";

const dummyData = [
  { label: "CRM", value: 80, color: "#B388FF" }, // Purple
  { label: "Sales", value: 60, color: "#FFECB3" }, // Yellow
  { label: "Engineering", value: 70, color: "#FFAB91" }, // Red
  { label: "Maintenance", value: 50, color: "#80DEEA" }, // Teal
];

function BarChart() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
        width:{
          xs:"100%",
          sm:"86%",
          md:"86%",
          lg:"86%",
          xl:"100%"
        },
        height:"80%"
      }}
    >
      <Paper elevation={1} sx={{ width: "1000%", padding: "16px", borderRadius: "8px",height:"90%",marginBottom:"40px" }}>
        <Grid container>
          {/* Left Section - Bar Graph */}
          <Grid item xs={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {dummyData.map((item, index) => (
                <Box key={index}>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "bold", mb: 0.5 }}
                    color="textSecondary"
                  >
                    {item.label}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: "14px",
                      borderRadius: "10px",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: item.color,
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Section - Legend */}
          <Grid item xs={6}>
            <Stack spacing={2} justifyContent="center" height="100%">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "black", textAlign: "left" }}
              >
                
              </Typography>

              {dummyData.map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: item.color,
                    }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default BarChart;
