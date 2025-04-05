import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OB from '../../assets/img/Ob.png'
import { Typography, MenuItem, Select, FormControl, InputLabel} from '@mui/material';
import usaFlag from "../../assets/img/uk-flag.png";

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

const Objectives = () => {
  const [currency, setCurrency] = useState("USD");
  const [risk, setRisk] = useState("Normal");
  const [balance, setBalance] = useState("$200,000");
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} md={12} sm={12}>
        <Grid md={5} sm={12} sx={{marginTop:'15%', }}>
          <Typography className="OBhead" variant='h4'>Know your <b>Trading Objectives</b></Typography>
          <Typography className="OBPara" variant='body1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Typography>
          <Grid container spacing={2} alignItems="center" className="ObSelector">
      <Grid className="ObSelec">
        <Typography fontWeight="bold">Currency:</Typography>
        <FormControl variant="" sx={{ minWidth: 120, backgroundColor: "#F0F0F0", borderRadius: "20px", border:'none !important'}}>
          <Select value={currency} onChange={(e) => setCurrency(e.target.value)} displayEmpty>
            <MenuItem value="USD">
              <img src={usaFlag} alt="USA Flag" width="20" style={{ marginRight: "8px" }} />
              USD
            </MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid className="ObSelec">
        <Typography fontWeight="bold">Risk:</Typography>
        <FormControl variant="" sx={{ minWidth: 120, backgroundColor: "#F0F0F0", borderRadius: "20px"}}>
          <Select value={risk} onChange={(e) => setRisk(e.target.value)} displayEmpty>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Normal">Normal</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid className="ObSelec">
        <Typography fontWeight="bold">Balance:</Typography>
        <FormControl variant="" sx={{ minWidth: 120, backgroundColor: "#F0F0F0", borderRadius: "20px"}}>
          <Select value={balance} onChange={(e) => setBalance(e.target.value)} displayEmpty>
            <MenuItem value="$100,000">$100,000</MenuItem>
            <MenuItem value="$200,000">$200,000</MenuItem>
            <MenuItem value="$500,000">$500,000</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
        </Grid>
        <Grid md={7} sm={12} className="Obright-main">
          <img src={OB} className="Obright" sx={{Width:'100%' , height:'auto'}} />
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Objectives



