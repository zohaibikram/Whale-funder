import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography , Link } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid md={8} sm={12} xs={12}>
          <Typography variant='body1'>
          All information provided on this site is intended solely for educational purposes 
          related to trading on financial markets and does not serve in any way as a specific
          investment recommendation, business recommendation, investment opportunity analysis 
          or similar general recommendation regarding the trading of investment instruments. 
          FTMO only provides services of simulated trading and educational tools for traders.
          The information on this site is not directed at residents in any country or
          jurisdiction where such distribution or use would be contrary to local laws 
          or regulations. FTMO companies do not act as a broker and do not accept any deposits.
          The offered technical solution for the FTMO platforms and data feed is powered by 
          liquidity providers.
          </Typography>
        </Grid>
        <Grid md={4} sm={12} xs={12} className="FooterLink">
          <Item><Link href="#">Contact Option</Link></Item>
          <Item><Link href="#">Privacy Policy</Link></Item>
          <Item><Link href="#">Cookies</Link></Item>
        </Grid>
      </Grid>
    </Box>
    <Grid container spacing={2} className="copyrightSection">
      <Grid md={6} sm={12} xs={12}>
       <Typography variant='body1'>
        2023 © Copyright - FTMO.com Made with for trading
        </Typography>
       </Grid>
     </Grid>
    </div>
    </>
  )
}

export default Footer
