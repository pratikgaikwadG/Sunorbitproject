import React from "react";
import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import { green } from "@mui/material/colors";

// JSON Data
const statisticsData = [
  { label: "Overdue", count: 110, color: "#FFCCC7", textColor: "#D7263D" },
  { label: "In progress", count: 52, color: "#FFE58F", textColor: "#FA8C16" },
  { label: "Not Started", count: 21, color: "#D9D9D9", textColor: "#595959" },
  { label: "Waiting client", count: 99, color: "#FFBDD8", textColor: "#BF1363" },
  { label: "Done", count: 521, color: "#D9F7BE", textColor: "#389E0D" },
];

// Main Component
export default function Statistics() {
  return (
    <Card
  
      sx={{
        width: {
         xs:'76%',
         sm:'100%',
         md:'86%',
         lg:'86%'
        },
        borderRadius: 3,
        boxShadow: 3,
        // backgroundColor:"green",
        padding: "16px",
        margin:"4px",
        marginLeft:"8px",
      }}
    >
      <CardContent>
        {/* Header */}
        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "#595959",
              color: "#fff",
              fontWeight: "bold",
              
            }}
          >
            &#x2692;
          </Box>
          <Typography variant="h6" fontWeight="bold">
            
          </Typography>
        </Stack>

        {/* Statistics List */}
        {statisticsData.map((stat, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs:'95%',
                sm:'100%',
                lg:'100%',
                xl:'100%'
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: stat.color,
              borderRadius: 5,
              padding: "8px 12px",
              marginBottom: "8px",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: stat.textColor,
                }}
              />
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{ color: stat.textColor }}
              >
                {stat.label}
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ color: stat.textColor }}
            >
              {stat.count}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
