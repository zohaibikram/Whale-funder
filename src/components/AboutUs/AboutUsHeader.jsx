import React from 'react'
import Ban from "../../assets/img/ban.png";
import bannerImage from "../../assets/logos/background.png";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

const AboutUsHeader = () => {
  return (
    <>
      <Box className="aboutUsBanner" sx={{
        color: "white",
        padding: "4% 6.5%",
        textAlign: "left",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center" className='AboutBannerMain'>
        <Grid item md={12} sm={12} className='AboutBannerInner'>
          <Typography className="bannerHeading" variant="h6" color="primary">
             OUR  JOURNEY
          </Typography>
          <Box mt={2}>
              <Button className="btnBannerLearnMore" variant="contained" color="primary" sx={{ marginRight: 2 }}>
                 Learn More
              </Button>
              <Button className="btnFreetrial aboutBtnFree" variant="outlined" color="inherit">
                Free Trial
              </Button>
          </Box>
        </Grid>
      </Grid>
    </Box> 
    </>
  )
}

export default AboutUsHeader