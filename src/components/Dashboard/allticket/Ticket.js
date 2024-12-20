import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Divider,
  Modal,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import SpeedIcon from "@mui/icons-material/Speed";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PushPinIcon from "@mui/icons-material/PushPin";

const TicketCard = ({ id, title, date, status, responses, location, assignee, duration }) => {
  const [openModal, setOpenModal] = useState(false);
  const [facility, setFacility] = useState("");
  const [decision, setDecision] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [image, setImage] = useState(null); // State for the uploaded image
  const [description, setDescription] = useState(""); // State for the description

  const navigate = useNavigate();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleAssign = () => {
    // Add any required logic before navigation
    navigate("/ticket-page", {
      state: {
        ticketId: id,
        facility,
        decision,
        image, // Pass the image file
        description,
      },
    });
  };

  // Responsive styles based on screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : 400, // Full width for mobile, fixed width for larger screens
    bgcolor: "background.paper",
    boxShadow: 24,
    p: isMobile ? 2 : 4, // More padding on mobile
    borderRadius: 2,
    overflow: "auto", // Allow scrolling on mobile if content overflows
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          mb: 2,
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        {/* Top Section */}
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography
            variant="body1"
            sx={{ textDecoration: "underline", color: "#2A6EBB" }}
          >
            Ticket ID: {id}
          </Typography>
          <Chip
            label={status}
            color={status === "Open" ? "success" : "error"}
            sx={{ fontWeight: "bold", height: 24 }}
          />
        </Box>

        {/* Ticket Title & Details */}
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: "20px" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "14px" }}>
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "14px" }}>
          Location: {location}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, fontSize: "14px" }}>
          Assignee: {assignee}
        </Typography>

        {/* Bottom Section */}
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <SendIcon fontSize="small" sx={{ mr: 1, color: "gray" }} />
            <Typography variant="caption">{responses} Response(s)</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <SpeedIcon fontSize="small" sx={{ mr: 1, color: "gray" }} />
            <Typography variant="caption">{duration}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Modal Section */}
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>
            Ticket Actions
          </Typography>

          {/* Engineering Facility Dropdown */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="facility-label">Engineering Facility</InputLabel>
            <Select
              labelId="facility-label"
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
            >
              <MenuItem value="Facility A">Facility A</MenuItem>
              <MenuItem value="Facility B">Facility B</MenuItem>
              <MenuItem value="Facility C">Facility C</MenuItem>
            </Select>
          </FormControl>

          {/* Accept/Reject Radio Buttons */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <RadioGroup row value={decision} onChange={(e) => setDecision(e.target.value)}>
              <FormControlLabel value="accept" control={<Radio />} label="Accept" />
              <FormControlLabel value="reject" control={<Radio />} label="Reject" />
            </RadioGroup>
          </FormControl>

          {/* Image Upload */}
          <Button variant="outlined" component="label" fullWidth sx={{ mb: 2 }}>
            <CameraAltIcon sx={{ mr: 1 }} />
            Upload Image
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          {image && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected File: {image.name}
            </Typography>
          )}

          {/* Description with Icons */}
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            placeholder="Description (Mandatory)"
            sx={{ mb: 2 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Terms and Conditions Checkbox */}
          <FormControlLabel
            control={
              <Checkbox checked={termsChecked} onChange={(e) => setTermsChecked(e.target.checked)} />
            }
            label="I agree to all terms and conditions"
            sx={{ mb: 2 }}
          />

          {/* Assign Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#000", color: "#fff" }}
            disabled={!termsChecked}
            onClick={handleAssign}
          >
            Assign
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default TicketCard;
