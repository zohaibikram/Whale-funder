import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Payout from '../../assets/img/Payout.png'
import retailF1 from '../../assets/img/retailF1.png'
import retailF2 from '../../assets/img/retailF2.png'
import '../../App.css'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};


const Retail = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  
  return (
    <>
    <div className="retailSectionfirst">
       <Box sx={{ p: 4 }}>
          <Grid container spacing={3} justifyContent="left">
            <Grid sm={12} className='OnlyMobileSection'>
               <img src={retailF1} className="JoinTeamMobile" />
            </Grid>
            <Grid md={6} sm={12} xs={12} className="retailText retailText1">
              <Typography variant='h3'>Payout System</Typography>
              <Box className="retailPara">
              <Typography variant='body1'>The default payout ratio for all FTMO Traders is set to 80%, however, an 80% share is not where we draw the line.</Typography>
              <Typography variant='body1'>All FTMO Traders can request payout on-demand. The payout can be processed just after 14 days, but you also have the ability to choose your own Profit Split Day, which can be even changed up to three times. In conclusion, we make sure that you will always receive your withdrawal on your most convenient day.</Typography>
              <Typography variant='body1'>If you meet the conditions of our Scaling Plan, not only do we increase the balance of your FTMO Account by 25%, the payout ratio will also automatically change to a staggering 90 %!</Typography>
              </Box>
            </Grid>
           
          </Grid>
        </Box>
    </div>
    <div className="retailSection">
      <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      >
      <Box sx={{ p: 4 }}>
          <Grid container spacing={3} justifyContent="right">
            <Grid sm={12} className='OnlyMobileSection'>
               <img src={retailF2} className="JoinTeamMobile" />
            </Grid>
            <Grid md={6} sm={12} xs={12} className="retailText retailsLast">
              <Typography variant='h3'><motion.div variants={itemVariants}>The most popular retail trading platforms</motion.div></Typography>
              <Typography variant='body1'>
                <motion.div variants={itemVariants}>
                We offer all our clients the best trading solution 
                in the form of our MT4, MT5, DXtrade and cTrader accounts powered by data 
                feed directly from our pool of prime liquidity providers. We do our best to 
                simulate the real market conditions with super-raw spreads, very low commission
                 and no markup to all demo trading accounts with virtual funds.
                </motion.div>
                 </Typography>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </div>
    </>
  )
}

export default Retail