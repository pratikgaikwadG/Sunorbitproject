




// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Badge,
//   Divider,
//   Avatar,
//   Drawer,
//   IconButton,
//   useMediaQuery,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import SettingsIcon from "@mui/icons-material/Settings";
// import HelpIcon from "@mui/icons-material/Help";
// import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../../assets/krisala.png";

// const Sidebar = ({ onSidebarToggle }) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const isLargeScreen = useMediaQuery("(min-width:600px)");

//   const toggleDrawer = () => {
//     setIsDrawerOpen((prevState) => !prevState);
//   };

//   const SidebarContent = (
//     <Box
//       sx={{
//         width: isLargeScreen ? 250 : 200,
//         height: "100vh",
//         backgroundColor: "#F4F5F7",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         p: 2,
//       }}
//     >
//       {/* Top Section */}
//       <Box>
//         {/* Logo and Help Desk */}
//         <Box textAlign="center" mb={3}>
//           <Avatar
//             src={logo}
//             alt="Logo"
//             sx={{ width: 60, height: 70, mx: "auto", mb: 1 }}
//           />
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             Help Desk
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             John Doe
//           </Typography>
//         </Box>
//         <Divider sx={{ mb: 2 }} />

//         {/* Menu Items */}
//         <List>
//           <ListItem button>
//             <ListItemIcon>
//               <HelpIcon />
//             </ListItemIcon>
//             <ListItemText primary="Activity" />
//             <Badge badgeContent={12} color="error" sx={{ ml: "auto" }} />
//           </ListItem>
//           <Divider sx={{ my: 1 }} />
//           <ListItem button>
//             <ListItemIcon>
//               <DashboardIcon />
//             </ListItemIcon>
//             <ListItemText primary="Dashboard" />
//           </ListItem>
//            </List>
//       </Box>

//       {/* Bottom Section */}
//       <Box>
//         <Divider sx={{ mb: 2 }} />
//         <List>
//           <ListItem button>
//             <ListItemIcon>
//               <SettingsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Settings" />
//           </ListItem>
//         </List>
//       </Box>
//     </Box>
//   );

//   return (
//     <Box display="flex">
//       {/* Sidebar Toggle Button */}
//       {!isLargeScreen && (
//         <IconButton
//           onClick={toggleDrawer}
//           sx={{
//             position: "absolute",
//             top: 16,
//             left: 16,
//             zIndex: 1300,
//             color: "#000",
//           }}
//         >
//           <MenuIcon />
//         </IconButton>
//       )}

//       {/* Drawer for Smaller Screens */}
//       {!isLargeScreen && (
//         <Drawer
//           anchor="left"
//           open={isDrawerOpen}
//           onClose={toggleDrawer}
//           ModalProps={{
//             keepMounted: true, // Improves performance on mobile devices
//           }}
//         >
//           {SidebarContent}
//         </Drawer>
//       )}

//       {/* Permanent Sidebar for Larger Screens */}
//       {isLargeScreen && (
//         <Box sx={{ width: 250, flexShrink: 0 }}>{SidebarContent}</Box>
//       )}
//     </Box>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Divider,
  Avatar,
  Drawer,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/krisala.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();  // Use the navigate hook for routing

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");  // Navigate to the dashboard when clicked
  };

  const SidebarContent = (
    <Box
      sx={{
        width: isLargeScreen ? 250 : 200,
        height: "100vh",
        backgroundColor: "#F4F5F7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      {/* Top Section */}
      <Box>
        {/* Logo and Help Desk */}
        <Box textAlign="center" mb={3}>
          <Avatar
            src={logo}
            alt="Logo"
            sx={{ width: 60, height: 70, mx: "auto", mb: 1 }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Help Desk
          </Typography>
          <Typography variant="body2" color="textSecondary">
            John Doe
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />

        {/* Menu Items */}
        <List>
          <ListItem button onClick={handleDashboardClick}>  {/* Dashboard Icon click handler */}
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <Divider sx={{ my: 1 }} />

          <ListItem button>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Activity" />
            <Badge badgeContent={12} color="error" sx={{ ml: "auto" }} />
          </ListItem>
        </List>
      </Box>

      {/* Bottom Section */}
      <Box>
        <Divider sx={{ mb: 2 }} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <Box display="flex">
      {/* Sidebar Toggle Button */}
      {!isLargeScreen && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 1300,
            color: "#000",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Drawer for Smaller Screens */}
      {!isLargeScreen && (
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true, // Improves performance on mobile devices
          }}
        >
          {SidebarContent}
        </Drawer>
      )}

      {/* Permanent Sidebar for Larger Screens */}
      {isLargeScreen && (
        <Box sx={{ width: 250, flexShrink: 0 }}>{SidebarContent}</Box>
      )}
    </Box>
  );
};

export default Sidebar;
