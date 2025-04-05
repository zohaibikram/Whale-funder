import React from 'react'
import AboutUsHeader from './AboutUs/AboutUsHeader'
import AboutUsStats from './AboutUs/AboutUsStats'
import AboutUsStory from './AboutUs/AboutUsStory'
import AboutUsMission from './AboutUs/AboutUsMission'
import AboutUsPlayground from './AboutUs/AboutUsPlayground'
import AboutUsBenefits from './AboutUs/AboutUsBenefits'
import AboutUsJoinTeam from './AboutUs/AboutUsJoinTeam'
import AboutUsFooter from './AboutUs/AboutUsFooter'
import Nav from './landingPage/Nav'
import {Box,CssBaseline,ThemeProvider} from '@mui/material'
import Footer from './landingPage/footer'
import Prefooter from './landingPage/prefooter'
import {theme} from './AboutUs/theme'



const AboutUs = () => {
  return (
    <>
    <Box component="main" className='AboutUsBody'>
    <Nav />
    <AboutUsHeader/>
    <div className="landingPage">
    <AboutUsStats/>
    <AboutUsStory />
    <AboutUsMission />
    <AboutUsPlayground />
    <AboutUsBenefits />
    <AboutUsJoinTeam />
    </div>
    </Box>
    <Prefooter />
    <Footer />
    </>
  )
}

export default AboutUs