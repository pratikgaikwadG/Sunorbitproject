import React from "react";
import { Box, Grid } from "@mui/material";
// import Sidebar from "../../Sidebar/Sidebar";
// import Navbar from "../../Navbar/Navbar";
import TicketCard from "./Ticket";


const ticketsData = [
  {
    id: "KRSL-1234",
    title: "Plumbing > B",
    date: "11:00 AM | 23 Sept 24",
    status: "Open",
    responses: 1,
    location: "B-702",
    assignee: "Pawan Pawra",
    duration: "Opened from 3 days",
  },
  {
    id: "KRSL-1002",
    title: "Engineering > B",
    date: "08:28 AM | 30 June 24",
    status: "Closed",
    responses: 5,
    location: "B-702",
    assignee: "Customer Name",
    duration: "Closed in 15 days",
  },

  {
    id: "KRSL-1002",
    title: "Engineering > B",
    date: "08:28 AM | 30 June 24",
    status: "Closed",
    responses: 5,
    location: "B-702",
    assignee: "Customer Name",
    duration: "Closed in 15 days",
  },
];

const TicketsPage = () => {
  return (
    <Box display="flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Ticket List */}
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {ticketsData.map((ticket) => (
              <Grid item xs={12} key={ticket.id}>
                <TicketCard {...ticket} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TicketsPage;
