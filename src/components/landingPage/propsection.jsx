import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import prop1 from "../../assets/img/1.png";
import prop2 from "../../assets/img/2.png";
import prop3 from "../../assets/img/3.png";
import prop4 from "../../assets/img/4.png";
import '../../App.css'

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

const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));



const Propsection = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
  <Grid className="Propsectionmain" container spacing={2} columns={12} justifyContent="center">
    <Grid md={10} sm={12} sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
      <Typography className="propSectionHeading">
        <b>WhaleFundr</b> is one of the most reliable firms in modern prop trading industry.
      </Typography>
    </Grid>
    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: "2%", marginBottom: "2%" }}>
  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className="cardsRowForProps">
    <DemoPaper variant="elevation">
      <img src={prop1} alt="WhaleFundr Logo" style={{ maxWidth: "100%", height: "auto" }} />
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className="cardsRowForProps">
    <DemoPaper variant="elevation">
      <img src={prop2} alt="WhaleFundr Logo" style={{ maxWidth: "100%", height: "auto" }} />
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className="cardsRowForProps">
    <DemoPaper variant="elevation">
      <img src={prop3} alt="WhaleFundr Logo" style={{ maxWidth: "100%", height: "auto" }} />
    </DemoPaper>
  </Grid>
  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className="cardsRowForProps">
    <DemoPaper variant="elevation">
      <img src={prop4} alt="WhaleFundr Logo" style={{ maxWidth: "100%", height: "auto" }} />
    </DemoPaper>
  </Grid>
</Grid>
<Grid container spacing={2} justifyContent="center" sx={{ marginTop: "2%", marginBottom: "2%" }}>
  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className="cardsRowForProps">
    <DemoPaper variant="elevation">
      <img src={prop1} alt="WhaleFundr Logo" style={{ maxWidth: "100%", height: "auto" }} />
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className="cardsRowForProps">
    <DemoPaper variant="elevation">
      <img src={prop2} alt="WhaleFundr Logo" style={{ maxWidth: "100%", height: "auto" }} />
    </DemoPaper>
  </Grid>

  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className="cardsRowForProps">
    <DemoPaper variant="elevation">
      <img src={prop3} alt="WhaleFundr Logo" style={{ maxWidth: "100%", height: "auto" }} />
    </DemoPaper>
  </Grid>
  <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" className="cardsRowForProps">
    <DemoPaper variant="elevation">
      <img src={prop4} alt="WhaleFundr Logo" style={{ maxWidth: "100%", height: "auto" }} />
    </DemoPaper>
  </Grid>
</Grid>

  
  </Grid>
</Box>

    </>
  )
}

export default Propsection