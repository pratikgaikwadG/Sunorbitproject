import React from "react";
import { Card, CardContent, Typography, Grid, Chip, Box } from "@mui/material";

const RecentTickets = ({ tickets }) => {
  return (
    <Card sx={{ boxShadow: 3, position: 'relative', zIndex: 1 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={6}  >
          {/* Recent Tickets */}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {tickets.map((ticket, index) => (
            <Grid container key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">
                  {ticket.date}
                </Typography> 
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textPrimary">
                  {ticket.title}
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Chip
                  label={ticket.status}
                  color={
                    ticket.status === "Open"
                      ? "warning"
                      : ticket.status === "Pending"
                      ? "default"
                      : "success"
                  }
                  sx={{
                    backgroundColor:
                      ticket.status === "Open"
                        ? "#fbbc04"
                        : ticket.status === "Pending"
                        ? "#a1a1a1"
                        : "#34a853",
                    color: "white",
                  }}
                />
              </Grid>
            </Grid>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecentTickets; 