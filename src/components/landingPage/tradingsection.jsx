import React from "react";
import { Grid, Card, CardContent, Typography, Box, Avatar ,ImageListItem } from "@mui/material";
import t1 from '../../assets/img/t1.png';
import t2 from '../../assets/img/t2.png';
import t3 from '../../assets/img/t3.png';

const traders = [
  {
    name: "Trader Name",
    profit: "$76,000",
    image: `${t1}`,
  },
  {
    name: "Trader Name",
    profit: "$41,018",
    image: `${t2}`,
  },
  {
    name: "Trader Name",
    profit: "$500,180",
    image: `${t3}`,
  },
];

const TradingSection = () => {
  return (
    <>
    <Box sx={{ p: 3 }} className="tradingSection">
      <Grid container spacing={3} alignItems="center">
        {/* Trader Cards */}
        <Grid item md={6} sm={6}>
          <Grid container justifyContent="center">
            {traders.map((trader, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="teamCards" sx={{ textAlign: "center", borderRadius: 2 }}>
                 
                  <ImageListItem sx={{width:'150px' ,padding:'10px'  }} >
      <img
       
        src={`${trader.image}?w=161&fit=crop&auto=format`}
        alt={trader.name}
        loading="lazy"
      />
    </ImageListItem>
                  
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {trader.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Profit Split
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {trader.profit}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Text Section */}
        <Grid item md={6} sm={12}>
          <Typography variant="h4" fontWeight="bold" className="tradingHead">
            Trade for <span style={{ color: "#007bff" }}>Modern Prop Trading</span> Firm
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }} className="tradingPara">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }} className="tradingPara">
          Upon successful completion of the Evaluation Process, you are offered to trade on an WhaleFundr Account with a balance of up to 200,000 USD. Your journey to get there might be challenging, but our educational applications, Account Analysis and Performance Coaches are here to help you on the endeavour to financial independence.
          </Typography>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default TradingSection;
