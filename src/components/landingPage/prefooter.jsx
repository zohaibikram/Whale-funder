import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "../../assets/img/logo.png"; 
import '../../App.css'

const Prefooter = () => {
  return (
    <>
    <Box sx={{ background: "#0A0F14", color: "white", p: 4 }} className="PreFooterMain">
      <Grid container className="preFooter" spacing={4} justifyContent="center">
        {/* Left Section - Logo & Contact */}
        <Grid md={5} sm={12} xs={12}>
          <Box display="flex" alignItems="center" mb={1}>
            <img src={logo} alt="WhaleFundr" style={{ height: 40, marginRight: 8 }} />
          </Box>
          <Typography variant="body2" sx={{ mb: 2, fontFamily:"Roboto", fontWeight:200 }}>
            Animi distinctio quia amet possimus sit. Voluptatum sunt corrupti iste voluptas
            itaque hic. Dolore sed quia et totam.
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{fontFamily:"Montserrat"}}>
            Contact Us
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <EmailIcon sx={{ mr: 1, fontFamily:"Roboto", fontWeight:200 }} />
            <Typography variant="body2">Noe_Rempel30@yahoo.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <PhoneIcon sx={{ mr: 1, fontFamily:"Roboto", fontWeight:200 }} />
            <Typography variant="body2">275-437-1694</Typography>
          </Box>
        </Grid>

        {/* Center Sections - Links */}
        <Grid md={3} sm={12} xs={12}>
          <Typography variant="h6" fontWeight="bold" sx={{fontFamily:"Montserrat"}}>
            About us
          </Typography>
          {["Evaluation Process", "Trading Objectives", "Why our FTMO Challenge?", "Testimonials", "Scaling Plan", "Affiliate Programme", "Terms & Conditions", "Careers", "Press Kit"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1, fontFamily:"Roboto", fontWeight:200 }}>
              <Link href="#" color="inherit" underline="none">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        <Grid md={2} sm={12} xs={12}>
          <Typography variant="h6" fontWeight="bold" sx={{fontFamily:"Montserrat"}}>
            Trading
          </Typography>
          {["Calendar", "Shop", "FTMO Academy", "Premium Programme"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1, fontFamily:"Roboto", fontWeight:200 }}>
              <Link href="#" color="inherit" underline="none">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        <Grid md={2} sm={12} xs={12}>
          <Typography variant="h6" fontWeight="bold" sx={{fontFamily:"Montserrat"}}>
            Apps
          </Typography>
          {["News Indicator", "Quick Trade Manager", "Equity Simulator", "Mentor App", "Trading Journal", "Statistical App", "Account Analysis", "Account MetriX"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1, fontFamily:"Roboto", fontWeight:200 }}>
              <Link href="#" color="inherit" underline="none">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Prefooter;
