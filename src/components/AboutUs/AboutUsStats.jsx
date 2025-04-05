import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Box, Typography, Button, Grid} from "@mui/material";
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));


const AboutUsStats = () => {
  return (
    <>
  <Grid container spacing={2} justifyContent="center" className="BannerCardsMain" sx={{padding:'0% 0.5% !important', background:'none'}}>
  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className='cardsRowForBanner'>
    <DemoPaper variant="elevation" sx={{boxShadow: 'none !important', backgroundColor:'#1F1C1C !important'}}>
      <Typography variant="h4" fontWeight="bold" style={{color:'white'}}>$180M+</Typography>
      <Typography variant="body1" style={{color:'white'}}>Paid out to FTMO Traders</Typography>
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className='cardsRowForBanner'>
    <DemoPaper variant="elevation" sx={{boxShadow: 'none !important', backgroundColor:'#1F1C1C !important'}}>
      <Typography variant="h4" fontWeight="bold" style={{color:'white'}}>180+</Typography>
      <Typography variant="body1" style={{color:'white'}}>No. of countries with traders registered at FTMO</Typography>
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className='cardsRowForBanner'>
    <DemoPaper variant="elevation" sx={{boxShadow: 'none !important', backgroundColor:'#1F1C1C !important'}}>
      <Typography variant="h4" fontWeight="bold" style={{color:'white'}}>16M+</Typography>
      <Typography variant="body1" style={{color:'white'}}>No. of trades opened every month</Typography>
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className='cardsRowForBanner'>
    <DemoPaper variant="elevation" sx={{boxShadow: 'none !important', backgroundColor:'#1F1C1C !important'}}>
      <Typography variant="h4" fontWeight="bold" style={{color:'white'}}>8h</Typography>
      <Typography variant="body1" style={{color:'white'}}>Avg payout processing time</Typography>
    </DemoPaper>
  </Grid>
</Grid>
    
    </>
  )
}

export default AboutUsStats