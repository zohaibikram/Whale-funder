import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import mission from '../../assets/logos/mission.png'

export default function AboutUsMission() {
  return (
    <Container sx={{ mt: { xs: 5, md: 17 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              <Box component="h3" color="primary.main" sx={{textAlign:'left' }}>
                WhaleFundr <b style={{color:'white'}}>Mission</b>
              </Box>
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 1 , textAlign:'left'}}>
              We are continuously developing the project into an international
              investment company. This change will allow us to create a global
              platform where, at a certain point, we will be able to offer a
              unique composition of retail traders trading for our company to
              investors with the possibility to invest in a portfolio of traders
              of their choice.
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 1,  textAlign:'left'}}>
              Let's get together to create a global community of successful
              retail traders and build an investment portfolio that has no
              precedent in the world.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={mission}
            alt="WhaleFundr Mission"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
