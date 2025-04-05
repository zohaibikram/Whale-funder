import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const features = [
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "Amazing trading conditions",
    description: "FTMO Solution with a wide choice of assets across the board, with very low commissions and spreads.",
  },
  {
    icon: <InsertDriveFileIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "Leverage 1:100",
    description: "Use professional trader’s leverage to your advantage with no imposed limits on position sizing.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "One-time fee only",
    description: "No recurrent charges, no membership or other hidden fees. Moreover, the fee is automatically reimbursed to you with the first Profit Split.",
  },
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "The most popular trading platforms",
    description: "MT4, MT5, cTrader, or DXtrade. Choose yourself!",
  },
  {
    icon: <InsertDriveFileIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "No limits on trading style!",
    description: "Trade your own trading strategy with no limits or restrictions. You can use EAs, hedging or trade discretionary.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: "#1E88E5" }} />,
    title: "Trade every instrument you want",
    description: "Forex, Commodities, Indices, Crypto, Stocks, Bonds.",
  },
];

const Features = () => {
  return (
    <Box sx={{ p: 4 }} className="featuresSection">
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid key={index} md={4} sm={12} xs={12} className="featuresCards">
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

export default Features;
