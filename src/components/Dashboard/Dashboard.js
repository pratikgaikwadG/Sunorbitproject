import React from "react";
import { useNavigate } from "react-router-dom";
import TicketCard from "./TicketCard";
import LineChart from "./LineChart";
import RecentTickets from "./RecentTickets";
import dummyData from "../../data/dummyData";
import TicketStatistics from "./TicketStatistics";
import BarChart from "./BarChart";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAllTicketsClick = () => {
    navigate("/all-tickets");
  };

  return (
    <Box
      className="dashboard-container"
      sx={{
        padding: { xs: "12px", sm: "16px", md: "24px" },
        width: {
          xs: '93%',
          sm: '100%',
          md: '60%',
          lg: '100%',
          xl: '96%',
        },
        backgroundColor: { xs: "", sm: "", md: "24px" },
      }}
    >
      {/* Ticket Statistics Section */}
      <Grid container spacing={2} mb={2}>
        {[ 
          {
            title: "All Tickets",
            value: "150",
            color: "#4caf50",
            Icon: AllInboxIcon,
            link: "/all-tickets",
          },
          {
            title: "Client Replies",
            value: dummyData.tickets.clientReplies,
            color: "#2196f3",
            Icon: PeopleOutlinedIcon,
          },
          {
            title: "Staff Replies",
            value: dummyData.tickets.staffReplies,
            color: "#ff9800",
            Icon: SupportAgentIcon,
          },
          {
            title: "Unanswered",
            value: dummyData.tickets.unanswered,
            color: "#f44336",
            Icon: ErrorOutlineIcon,
          },
        ].map((card, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <Link
              to={card.link || "#"}
              style={{ textDecoration: "none" }}
              onClick={card.link ? handleAllTicketsClick : null}
            >
              <TicketCard
                title={card.title}
                value={card.value}
                color={card.color}
                Icon={card.Icon}
              />
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Line Chart and Ticket Statistics Section */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Card sx={{ boxShadow: 3, height: '435px' }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={1}
                fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
              >
                Ticket Reply
              </Typography>
              <LineChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
          <Card sx={{ boxShadow: 3, width: { xs: '100%' } }}>
            <CardContent sx={{ width: { xs: '100%' } }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={1}
                fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
              >
                Recent Ticket Statistics
              </Typography>
              <TicketStatistics stats={dummyData.TicketStatistics} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Bar Chart and Recent Tickets Section */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, height: "345px" }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={1}
                fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
              >
                Departmental Breakdown
              </Typography>
              <BarChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={1}
                fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
              >
                Recent Tickets
              </Typography>
              <RecentTickets tickets={dummyData.recentTickets} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;



