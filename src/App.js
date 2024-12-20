





// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Navbar from "./components/Sidebar/Navbar";
// import Dashboard from "./components/Dashboard/Dashboard";
// import LoginForm from "./components/pages/LoginForm";
// import AllTickets from "./components/Dashboard/allticket/AllTicket"; // Correct import path
// import TicketPage from "./components/Dashboard/allticket/TicketPage"; // Correct import path
// import "./styles.css";

// // Wrapper component to handle common layout (Sidebar, Navbar)
// const Layout = ({ children }) => (
//   <div style={{ display: "flex", height: "100vh" }}>
//     <div style={{zIndex:999}}>
//     <Sidebar />
//     </div>
//     <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
//       <Navbar />
//       <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>{children}</div>
//     </div>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Redirect root path to login */}
//         <Route path="/" element={<Navigate to="/login" replace />} />

//         {/* Login Route */}
//         <Route path="/login" element={<LoginForm />} />

//         {/* Dashboard Route */}
//         <Route
//           path="/dashboard"
//           element={
//             <Layout>
//               <Dashboard />
//             </Layout>
//           }
//         />

//         {/* All Tickets Route */}
//         <Route
//           path="/all-tickets"
//           element={
//             <Layout>
//               <AllTickets />
//             </Layout>
//           }
//         />

//         {/* Ticket Page Route */}
//         <Route
//           path="/ticket-page"
//           element={
//             <Layout>
//               <TicketPage />
//             </Layout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Sidebar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginForm from "./components/pages/LoginForm";
import AllTickets from "./components/Dashboard/allticket/AllTicket";
import TicketPage from "./components/Dashboard/allticket/TicketPage";
import "./styles.css";

// Wrapper component to handle common layout (Sidebar, Navbar)
const Layout = ({ children }) => (
  <div style={{ display: "flex", height: "100vh" }}>
    <Sidebar />
    <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>{children}</div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login Route */}
        <Route path="/login" element={<LoginForm />} />

        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* All Tickets Route */}
        <Route
          path="/all-tickets"
          element={
            <Layout>
              <AllTickets />
            </Layout>
          }
        />

        {/* Ticket Page Route */}
        <Route
          path="/ticket-page"
          element={
            <Layout>
              <TicketPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
