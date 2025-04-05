import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Clock from '../../assets/img/clock.png'
import PaperImg from '../../assets/img/paper.png'
import Vector from '../../assets/img/Vector.png'
import chair from '../../assets/img/chair.png'

const BenefitCard = ({ icon, title }) => (
  <Paper
    elevation={0}
    sx={{
      borderRadius: "30px",
      bgcolor: "rgba(43, 35, 35, 0.5)",
      p: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}
  >
    {icon && (
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{
          width: 50,
          height: 50,
          objectFit: "contain",
          fill: "primary.main",
        }}
      />
    )}
    <Typography variant="h3" color="text.primary" sx={{ mt: 4 }}>
      {title}
    </Typography>
  </Paper>
);

export default function AboutUsBenefits() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ mt: { xs: 5, md: 14 } }} className="benefitAboutBox">
          
            <BenefitCard
              icon={Vector}
              title="Benefit 1"
            />
            
            <Box sx={{ mt: { xs: 5, md: 15 } }}>
              
              <BenefitCard 
              icon={Clock}
              title="Benefit 2" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={chair}
            alt="Benefits"
            sx={{
              width: "70%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ mt: { xs: 5, md: 14 } }} className="benefitAboutBox">
            <BenefitCard
              icon={PaperImg}
              title="Benefit 4"
            />
            <Box sx={{ mt: { xs: 5, md: 15 } }}>
              <BenefitCard
                 icon={PaperImg}
                title="Benefit 3"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
