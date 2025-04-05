import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import {motion} from 'framer-motion'


const features = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
      description: "Noe_Rempel30@yahoo.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
      description: "275-437-1694",
    }
  ];


const ContactCards = () => {
  return (
    <>
    <Box>
    <Typography variant="h3" sx={{ mt: 1 , color: 'white', fontFamily:'Montserrat', fontWeight:'600'}}>
            Contact Us
        </Typography>
    </Box>
      <Box sx={{ p: 4 }} className="featuresSection">
            <Grid container spacing={3} justifyContent="center">
              {features.map((feature, index) => (
                <Grid key={index} md={4} sm={12} xs={12} className="featuresCards">
                  <Paper
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 3,
                      borderRadius: 6,
                      backgroundColor: "#2B2323",
                      boxShadow:"none",
                      mt:3,
                      height:"100px",
                      textAlign:"center",
      
                    }}
                  >
                    {feature.icon}
                    <Typography variant="body2" sx={{ mt: 1 , color: 'white', fontFamily:'Montserrat',}}>
                      {feature.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
    </>
  )
}

export default ContactCards