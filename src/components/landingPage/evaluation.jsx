import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import '../../App.css';

const features = [
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "WhaleFundr Challenge",
    description: "An WhaleFundr Challenge is the first step of the Evaluation Process. You need to succeed here to advance into the Verification stage. Prove your trading skills and discipline in observing the Trading Objectives.",
  },
  {
    icon: <InsertDriveFileIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "Verification",
    description: "A Verification is the second and the last step towards becoming an WhaleFundr Trader. Once you pass a Verification stage and your results are verified, you will be offered to trade on an WhaleFundr Account.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "WhaleFundr Trader",
    description: "You are becoming an WhaleFundr Trader with an WhaleFundr Account. Trade responsibly and consistently and receive up to 90%. If you consistently generate profits on your WhaleFundr Account.",
  },
];

const Evaluation = () => {
  return (
    <>
   
   <Box sx={{backgroundColor:'#F0F0F0'}} className="EvaluationMainDiv">
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography className="evaluationHead">Evaluation Process</Typography>
      </Box>
      <Box className="evaluationCards">
        <Grid container spacing={3} justifyContent="center" className="EvaluationCardsBg">
          {features.map((feature, index) => (
            <Grid key={index} item xs={12} sm={12} md={4} className="featuresCards">
              <Paper className="featureCard">
                {feature.icon}
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2">{feature.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

    </>
  );
};

export default Evaluation;
