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


const BannerBelow = () => {
  return (
    <>
     
<Grid container spacing={2} justifyContent="center" sx={{ marginTop: "2%", marginBottom: "2%" }} className="BannerCardsMain">
  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className='cardsRowForBanner'>
    <DemoPaper variant="elevation">
      <Typography variant="h4" fontWeight="bold">$180M+</Typography>
      <Typography variant="body1">Paid out to FTMO Traders</Typography>
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className='cardsRowForBanner'>
    <DemoPaper variant="elevation">
      <Typography variant="h4" fontWeight="bold">180+</Typography>
      <Typography variant="body1">No. of countries with traders registered at FTMO</Typography>
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className='cardsRowForBanner'>
    <DemoPaper variant="elevation">
      <Typography variant="h4" fontWeight="bold">16M+</Typography>
      <Typography variant="body1">No. of trades opened every month</Typography>
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className='cardsRowForBanner'>
    <DemoPaper variant="elevation">
      <Typography variant="h4" fontWeight="bold">8h</Typography>
      <Typography variant="body1">Avg payout processing time</Typography>
    </DemoPaper>
  </Grid>
</Grid>
    
    </>
  )
}

export default BannerBelow
