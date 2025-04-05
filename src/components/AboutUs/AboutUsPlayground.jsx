import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";


export default function AboutUsPlayground() {
  return (
    <>
     <div className="AboutPlayGround">
       <Box sx={{ p: 4 }}>
          <Grid container spacing={3} justifyContent="right">
            <Grid md={6} sm={12} xs={12} className="AboutPlayGroundText">
              <Typography variant='h3'><b className="playgroundtxt1">WhaleFundr</b> <b className="playgroundtxt2">Playground</b> </Typography>
              <Typography variant='body1' sx={{color:'white'}}>There are many handy gadgets and features our offices have to offer. We have phone booths where our employees can handle business and personal calls or meeting rooms where you can draw your ideas on the glass walls. In each department, there are fridges full of various drinks, not to mention all the snacks available in our kitchen. We have our own recording studio where all the digital magic happens and finally our poker room, where we spend most Friday evenings.</Typography>
              <Box mt={2} className="btnGroupJoin">
                <Button className="btnBannerLearnMore" variant="contained" color="primary" sx={{ marginRight: 2 }}>
                 Check Location 
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </div>
    </>
  );
}
