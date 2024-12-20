import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Dot } from "recharts";
import { Box, Typography, Card, CardContent, Stack } from "@mui/material";

// JSON Data for graph points
const data = [
  { date: "Jan 1, 2024", value: 100 },
  { date: "Jan 5, 2024", value: 300 },
  { date: "Jan 10, 2024", value: 600 },
  { date: "Jan 15, 2024", value: 400 }, // Highlighted point
  { date: "Jan 20, 2024", value: 350 },
  { date: "Jan 25, 2024", value: 500 },
];

// Custom Tooltip for highlighting data
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "8px",
          borderRadius: "4px",
          boxShadow: 3,
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          {label}
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          {payload[0].value} reply
        </Typography>
      </Box>
    );
  }
  return null;
};

// Main Component
export default function ReplyTimeGraph() {
  return (
    <Card
      sx={{
        width: {
          xs:'90%',
          sm:'100%',
          md:'50%',
          lg:'50%',
          xl:'93%'

        },
        maxWidth: 800,
        // backgroundColor:"green",
        borderRadius: 3,
        boxShadow: 3,
        padding: "16px",
      }}
    >
      <CardContent>
        {/* Header */}
        <Typography variant="h6" fontWeight="bold">
        </Typography>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          1,679
        </Typography>

        {/* Graph */}
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" hide />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00C853"
              strokeWidth={2}
              dot={<Dot stroke="#00C853" r={5} />}
              activeDot={{ r: 8, strokeWidth: 2, fill: "#00C853" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
