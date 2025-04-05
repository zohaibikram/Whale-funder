import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Map from '../../assets/img/map.png'

const ContactInfo = () => {
  return (
    <>
     <Paper elevation={3} sx={{ p: 3, margin: "auto" }} className="ContactInfo">
     <Grid container spacing={3} justifyContent="center">
      <Grid md={6} sm={12} xs={12} className="ContactInfoCard">
      <Typography variant="h5" gutterBottom>
         Address:
      </Typography>

      <Box sx={{ display: "flex", mb: 2 }}>
        <Typography variant="body1">Quadrio offices
        Purkynova 2121/3 110 00 Prague, Czech Republic</Typography>
      </Box>
      <Typography variant="h5" gutterBottom>
      Business Hours:
      </Typography>
    
      <Box sx={{ display: "flex", mb: 2 }}>
        <Typography variant="body1">24/7 for emails, live chat and WhatsApp 9 am – 5 pm CE(S)T, Monday to Friday for phone calls</Typography>
      </Box>
     </Grid>
     <Grid md={6} sm={12} xs={12} className="MapImgSec">
      <Box className="MapImg">
         <img src={Map} />
      </Box>
      </Grid>
      </Grid>
    </Paper>
    </>
  );
};

export default ContactInfo;
