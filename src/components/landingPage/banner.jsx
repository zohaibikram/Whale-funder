import React from 'react'
import Ban from "../../assets/img/ban.png";
import bannerImage from "../../assets/img/banner-img.png";
import '../../App.css'
import Paper from '@mui/material/Paper';
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import {motion} from 'framer-motion'

const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

const Banner = () => {
  return (
    <>
      <Box size={10}
      sx={{
        background: "transparent",
        color: "white",
        padding: "4% 6.5%",
        textAlign: "left",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item md={7} sm={12}>
          <Typography className="bannerHeading" variant="h6" color="primary">
            SINCE 2021
          </Typography>
          <Typography className="bannerText" variant="h3" fontWeight="bold" gutterBottom>
            WE ARE LOOKING FOR PROFITABLE TRADERS
          </Typography>
          <Typography variant="body1" gutterBottom>
            Unleash your inner whale and trade up to $500,000 in a trading environment
            where you can earn real gains.
          </Typography>
          <Box mt={2}>
            <Button className="btnBannerLearnMore" variant="contained" color="primary" sx={{ marginRight: 2 }}>
              Learn More
            </Button>
            <Button className="btnFreetrial" variant="outlined" color="inherit">
              Free Trial
            </Button>
          </Box>
          <Box mt={4} display="flex" alignItems="center" justifyContent="center" className="BannerBottom">
            <img src={Ban} className="banImage" alt="User 1" style={{ marginRight: 5 }} />
            
            <Box className="miniBannertexts">
               <Typography className="miniBannertext1" variant="h5">15 Million+</Typography>
               <Typography className="miniBannertext2" variant="body2">Be part of growing community</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={5} sm={12}>
          <motion.img src={bannerImage}
           className='BannerMobile'
            alt="Trading App"
             style={{ maxWidth: "100%", borderRadius: "10px" }}
             animate={{y:[0,-10,0]}}
             transition={{duration:3,
              repeat:Infinity,
              repeatType:'loop',
              ease:'easeInOut'
             }}
           />
        </Grid>
        
      </Grid>
    </Box> 
    </>
  )
}

export default Banner