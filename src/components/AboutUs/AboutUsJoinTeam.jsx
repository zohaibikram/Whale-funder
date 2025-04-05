import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import logo from "../../assets/img/logo.png"; 

export default function AboutUsJoinTeam() {
  return (
    <Box className="TeamJoinsBox">
    <Container
    className="JoinTeamssection"
      sx={{
        borderRadius: "60px",
        py: { xs: 4, md: 8 },
        textAlign: "center",
        background: 'linear-gradient(135deg, #121212,rgb(6, 43, 72))',
        height:'auto',
        

      }}
    >
      <Box sx={{ maxWidth: 597, mx: "auto" }}>
        <Box
          component="img"
          src={logo}
          alt="Join Our Team"
          sx={{
            width: "70%",
            maxWidth: 470,
            height: "100px",
            objectFit: "contain",
            
          }}
        />
        <Typography variant="h2" sx={{ mt: 4 , fontFamily:'Montserrat', fontWeight:'700 !important', color:'white'}}>
          Join{" "}
          <Box component="span" color="primary.main">
            Our Team!
          </Box>
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Box mt={2}>
            <Button className="btnBannerLearnMore" variant="contained" color="primary" sx={{ marginRight: 2 }}>
              Apply
            </Button>
            <Button className="btnFreetrial aboutBtnFree" variant="outlined" color="white">
              Ask Us
            </Button>
            </Box>
        </Stack>
      </Box>
    </Container>
    </Box>
  );
}
