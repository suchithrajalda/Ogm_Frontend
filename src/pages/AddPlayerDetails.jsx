import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CloseIcon from "@mui/icons-material/Close";
import profileImg from "../assets/Player Icon.svg";
import Bat from "../assets/bat.svg";
import Ball from "../assets/ball.svg";
import BatandBall from "../assets/BatandBall.svg";
import Helmet from "../assets/helmet.svg";
import axios from "axios";

function AddPlayerDetails() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    mobilenumber: "",
  });
  const [selectedRole, setSelectedRole] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setFormData({ firstname: "", lastname: "", age: "", mobilenumber: "" });
    setImage(null);
    setSelectedRole("");
  };

  const handleClose = () => {
    console.log("Close button clicked");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.age ||
      !formData.mobilenumber ||
      !selectedRole
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      ...formData,
      role: selectedRole,
      profileImage: image,
    };

    try {
      const response = await axios.post("#", payload);

      if (response.status === 200 || response.status === 201) {
        alert("Player details saved successfully!");
        handleCancel();
      } else {
        alert("Failed to save player.");
      }
    } catch (error) {
      console.error("Error saving player:", error);
      alert("An error occurred while saving player.");
    }
  };

  const inputFieldStyles = { 
    borderRadius: 4,
    border:'1px #666666',
    width: 420,
    height: 79,
  };

  return (
    <Container
      sx={{
        mt: 5,
        backgroundColor: "#fff",
        borderRadius: 3,
        padding: { xs: 2, sm: 4 },
        boxShadow: 3,
        position: "relative",
        width:988,
        height:710
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: 16, right: 16 }}
      >
        <CloseIcon />
      </IconButton>

      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "left" }}
      >
        Add Player Details
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="left" mb={3}>
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <IconButton component="span">
              <Avatar
                src={image || profileImg}
                sx={{ width: 100, height: 100 }}
              >
                {!image && <AddAPhotoIcon />}
              </Avatar>
            </IconButton>
          </label>
        </Grid>

        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6}>
            <label
              htmlFor="first"
              className="form-label"
              style={{ display: "block", marginBottom: 8 }}
            >
              First Name<span style={{ color: "red" }}> *</span>
            </label>
            <TextField
              fullWidth
              placeholder="Enter first name"
              id="first"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              required
              variant="outlined"
              sx={inputFieldStyles}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label
              htmlFor="last"
              className="form-label"
              style={{ display: "block", marginBottom: 8 }}
            >
              Last Name<span style={{ color: "red" }}> *</span>
            </label>
            <TextField
              fullWidth
              placeholder="Enter last name"
              id="last"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              required
              variant="outlined"
              sx={inputFieldStyles}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6}>
            <label
              htmlFor="age"
              className="form-label"
              style={{ display: "block", marginBottom: 8 }}
            >
              Age<span style={{ color: "red" }}> *</span>
            </label>
            <TextField
              fullWidth
              placeholder="21"
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              required
              variant="outlined"
              sx={inputFieldStyles}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label
              htmlFor="mobilenumber"
              className="form-label"
              style={{ display: "block", marginBottom: 8 }}
            >
              Mobile Number<span style={{ color: "red" }}> *</span>
            </label>
            <TextField
              fullWidth
              placeholder="12345 67890"
              id="mobilenumber"
              name="mobilenumber"
              type="tel"
              value={formData.mobilenumber}
              onChange={handleInputChange}
              required
              variant="outlined"
              sx={inputFieldStyles}
            />
          </Grid>
        </Grid>

        <Box mb={3}>
          <Box mb={1}>
            <label
              htmlFor="role"
              className="form-label"
              style={{ display: "block", marginBottom: 8 }}
            >
              Role<span style={{ color: "red" }}> *</span>
            </label>
          </Box>

          <Box display="flex" justifyContent="left" gap={2} flexWrap="wrap">
            <IconButton
              onClick={() => handleRoleClick("batter")}
              sx={{
                border:
                  selectedRole === "batter"
                    ? "2px solid #1976d2"
                    : "2px solid transparent",
                borderRadius: 2,
                p: 1,
                backgroundColor: "#E8F3FF",
              }}
            >
              <img src={Bat} alt="Batter" width={44} height={44} />
            </IconButton>

            <IconButton
              onClick={() => handleRoleClick("bowler")}
              sx={{
                border:
                  selectedRole === "bowler"
                    ? "2px solid #1976d2"
                    : "2px solid transparent",
                borderRadius: 2,
                p: 1,
                backgroundColor: "#E8F3FF",
              }}
            >
              <img src={Ball} alt="Bowler" width={44} height={44} />
            </IconButton>

            <IconButton
              onClick={() => handleRoleClick("allrounder")}
              sx={{
                border:
                  selectedRole === "allrounder"
                    ? "2px solid #1976d2"
                    : "2px solid transparent",
                borderRadius: 2,
                p: 1,
                backgroundColor: "#E8F3FF",
              }}
            >
              <img src={BatandBall} alt="All-Rounder" width={44} height={44} />
            </IconButton>

            <IconButton
              onClick={() => handleRoleClick("keeper")}
              sx={{
                border:
                  selectedRole === "keeper"
                    ? "2px solid #1976d2"
                    : "2px solid transparent",
                borderRadius: 2,
                p: 1,
                backgroundColor: "#E8F3FF",
              }}
            >
              <img src={Helmet} alt="Wicket Keeper" width={44} height={44} />
            </IconButton>
          </Box>
        </Box>

        <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
          <Button
            variant="outlined"
           
            size="large"
            sx={{ px: 4 ,backgroundColor:'#FFFFFF',color:'#666666',border:'1px #999999 solid'}}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{ px: 4, backgroundColor: "#11DC79" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default AddPlayerDetails;
