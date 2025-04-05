import React from 'react'
import { Box, Grid, Typography,Button } from '@mui/material'
import join from "../../assets/img/join-team.png";
import {motion} from'framer-motion'
import {useInView} from 'react-intersection-observer'

const Join = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation once when in view
    threshold: 0.3, // Trigger animation when 30% of the element is in view
  });
  return (
    <>
    <div className="JoinSection JoinMobileMainDiv" ref={ref}>
       <Box sx={{ p: 4 }}>
          <Grid container spacing={3} justifyContent="right">
            <Grid sm={12} className='OnlyMobileSection'>
               <motion.img src={join} className="JoinTeamMobile"  initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
              transition={{ duration: 0.8 }}/>
            </Grid>
            <Grid md={6} sm={12} className="JoinText">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant='h3'>Join the team of our <b>successful traders</b></Typography>
              <Box className="JoinPara">
              <Typography variant='body1'>If you are ready, accept our FTMO Challenge and become our FTMO Trader. You can even try the entire process completely free of charge.</Typography>
              <Box mt={2} className="btnGroupJoin">
                <Button className="btnBannerLearnMore" variant="contained" color="primary" sx={{ marginRight: 2 }}>
                 Learn More
                </Button>
                <Button className="btnFreetrial" variant="outlined" color="inherit" sx={{backgroundColor:'#121212', color: 'white',}}>
                  Free Trial
                </Button>
                </Box>
              </Box>
              </motion.div>
            </Grid>
           
          </Grid>
        </Box>
    </div>
    </>
  )
}

export default Join