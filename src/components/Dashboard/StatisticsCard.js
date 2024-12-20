// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   useTheme,
// } from "@mui/material";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// // Dummy data for the bar chart
// const data = [
//   { name: "Jan", tickets: 4000 },
//   { name: "Feb", tickets: 3000 },
//   { name: "Mar", tickets: 2000 },
//   { name: "Apr", tickets: 2780 },
//   { name: "May", tickets: 1890 },
//   { name: "Jun", tickets: 2390 },
// ];

// const BarChartComponent = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         p: 3,
//         backgroundColor: theme.palette.background.paper,
//         borderRadius: "8px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         overflowX: "auto", // Enable horizontal scrolling for small screens
//       }}
//     >
//       <Typography
//         variant="h6"
//         sx={{
//           fontWeight: "bold",
//           mb: 2,
//           color: theme.palette.text.primary,
//         }}
//       >
//         Monthly Tickets Overview
//       </Typography>

//       <Grid
//         container
//         spacing={2}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         {data.map((item, index) => (
//           <Grid
//             item
//             key={index}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               textAlign: "center",
//               minWidth: "120px",
//             }}
//           >
//             <Paper
//               elevation={2}
//               sx={{
//                 width: "100%",
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {/* Month */}
//               <Typography
//                 variant="subtitle1"
//                 sx={{ fontWeight: "bold", color: theme.palette.text.secondary }}
//               >
//                 {item.name}
//               </Typography>

//               {/* Tickets */}
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: theme.palette.primary.main,
//                   fontWeight: "bold",
//                 }}
//               >
//                 {item.tickets}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Bar Chart Section */}
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="tickets" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </Box>
//   );
// };

// export default BarChartComponent;
