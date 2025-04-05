import React from "react";
import '../App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import Nav from "./landingPage/nav";
import Banner from "./contactPage/banner";
import ContactCards from "./contactPage/contactCards";
import ContactInfo from "./contactPage/contactinfo";
import Prefooter from "./landingPage/prefooter";
import Footer from "./landingPage/footer";
import { Box} from "@mui/material";

import contactUsBanner from '../assets/img/contactUsBanner.png'
import ContactForm from "./contactPage/contactform";



const Contact = () => {
  return (
    <>
    <Nav />
     <Box className="headBanner" sx={{ backgroundImage: `url(${contactUsBanner})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "auto", position:"relative", zIndex:'1', }} >
       <Banner />
     </Box>
      <Box className="landingPage" sx={{backgroundColor:'black'}}>
        <ContactCards /> 
        <ContactInfo />
        <ContactForm />
      </Box>
    <Prefooter />
    <Footer />
    </>
  )
}

export default Contact