// import React from "react";
// import { Box, Typography } from "@mui/material";

// const TicketCard = ({ title, value, color, Icon }) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderLeft: `5px solid ${color}`,
//         backgroundColor: "#fff",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         padding: "16px",
//         borderRadius: "8px",
//         maxWidth: "400px",
//       }}
//     >
//       <Box>
//         <Typography
//           variant="subtitle1"
//           sx={{ fontWeight: 500, color: "#333", marginBottom: "4px" }}
//         >
//           {title}
//         </Typography>
//         <Typography variant="h6" sx={{ fontWeight: 600, color: "#111" }}>
//           {value}
//         </Typography>
//       </Box>
//       {Icon && (
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Icon sx={{ color, fontSize: 36 }} />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default TicketCard;



import React from "react";
import { Box, Typography } from "@mui/material";

const TicketCard = ({ title, value, color, Icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: `5px solid ${color}`,
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        borderRadius: "8px",
        maxWidth: "100%",
      }}
    >
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            color: "#333",
            marginBottom: "4px",
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#111",
            fontSize: { xs: "16px", md: "20px" },
          }}
        >
          {value}
        </Typography>
      </Box>
      {Icon && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon sx={{ color, fontSize: { xs: 24, md: 36 } }} />
        </Box>
      )}
    </Box>
  );
};

export default TicketCard;
