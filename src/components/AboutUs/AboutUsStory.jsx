import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import story from '../../assets/logos/story.png'
import Vector from '../../assets/logos/Vector.png'

export default function AboutUsStory() {
  return (
    <Container sx={{ mt: { xs: 5, md: 10 } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" ,position:'relative'}}>
          <Box
          src={story}
            component="img"
            alt="WhaleFundr Story"
            sx={{
              width: { xs: "100%", md: "80%" },
              maxWidth: "600px",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
          
          <Box component="img" src={Vector} sx={{position:'absolute' ,top:'50%',left:'50%'}}></Box>
        </Grid>
       
         

       
       
       

        {/* Content Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            <Box component="h3" color="primary.main" sx={{textAlign:'left' }}>WhaleFundr <b style={{color:'white'}}>Story</b></Box> 
          </Typography>
          <Typography variant="body1" color="white" sx={{ mb: 2, textAlign:'left' }}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
          </Typography>
          <Typography variant="body1" color="white" sx={{ mb: 2, textAlign:'left' }}>
          Upon successful completion of the Evaluation Process, you are offered to trade on an WhaleFundr Account with a balance of up to 200,000 USD. Your journey to get there might be challenging, but our educational applications, Account Analysis and Performance Coaches are here to help you on the endeavour to financial independence.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2, textAlign:'left' , justifyContent:'left'}}>
            Watch Video
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
