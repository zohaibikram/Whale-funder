import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const features = [
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "Swing Account",
    description: "Pick the FTMO Account that perfectly suits your trading style and needs. FTMO Account Swing has no restrictions on holding positions over the weekend or trading during macroeconomic releases.",
  },
  {
    icon: <InsertDriveFileIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "Scaling Plan",
    description: "We aim for long-term business relationships. If you manage to be consistent , we will increase the balance of your FTMO Account by 25% every 4 months according to the Scaling Plan.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "Free Trial",
    description: "If you are still not sure, you have the option to try the process completely for free. The Free Trial account is a shortened version of our FTMO Challenge with the same trading conditions.",
  }
];

const Highlights = () => {
  return (
    <Box sx={{ p: 4 }} className="highlightsSection">
        <Typography variant='h3' className="highlightsHead">Key Highlights</Typography>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid key={index} md={4} sm={12} className="featuresCards">
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                p: 3,
                borderRadius: 6,
                backgroundColor: "#F0F0F0",
                
                boxShadow:"none",
                mt:3,
                height:"200px",
                textAlign:"left",

              }}
            >
              {feature.icon}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Highlights;
