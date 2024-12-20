import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Card, CardMedia, Chip, Divider } from "@mui/material";

const TicketPage = () => {
  const location = useLocation();
  const { ticketId, title, description, locationName, assignee, image, status } = location.state || {};

  // Placeholder image (replace in production)
  const imageUrl = image ? URL.createObjectURL(image) : "https://via.placeholder.com/400";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        p: { xs: 2, sm: 3, md: 4 }, // Padding responsive
        maxWidth: "1000px",
        margin: "auto",
        height: "100vh", // Full viewport height
        boxSizing: "border-box",
        overflow: "hidden", // Prevent scrolling
      }}
    >
      {/* Ticket Header */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h6" color="textSecondary">
          Ticket ID: {ticketId}
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
          {title}
          <Typography component="span" variant="h5" color="textSecondary" fontWeight="400">
            {" "}
              {description}
          </Typography>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          08:28 AM | 30 June 24
        </Typography>
      </Box>

      {/* Image Section */}
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: "80%", md: "50%" },
          border: "1px solid #ddd",
        }}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt="Ticket Image"
          sx={{
            objectFit: "cover",
            maxHeight: "200px",
          }}
        />
      </Card>

      {/* Location & Assignee */}
      <Box sx={{ width: "100%", textAlign: "left" }}>
        <Typography variant="body1">
          <strong>Location:</strong> {locationName || "B-702"}
        </Typography>
        <Typography variant="body1">
          <strong>Assignee:</strong> {assignee || "Pawan Pawra"}
        </Typography>
        <Chip
          label={status || "Closed"}
          sx={{
            backgroundColor: "#FFCDD2",
            color: "#D32F2F",
            fontWeight: "bold",
            mt: 1,
          }}
        />
      </Box>

      <Divider sx={{ width: "100%", my: 1 }} />

      {/* Activity Section */}
      <Box sx={{ width: "100%" }}>
        <Typography variant="body1">
          Faculty <strong>Nikhil Pawar</strong> accepted the ticket and assigned it to the <strong>Engineering</strong> team.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          11:38 AM | 12 July 24
        </Typography>
        <Typography variant="body1" mt={1}>
          Engineering team’s <strong>Ajit Waghmare</strong> resolved the ticket and marked it as <strong>completed</strong>.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          06:14 PM | 15 July 24
        </Typography>
      </Box>
    </Box>
  );
};

export default TicketPage;
