import React, { useState } from "react";
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
import Banner from "./landingPage/banner";

import Propsection from "./landingPage/propsection";
import TradingSection from "./landingPage/tradingsection";
import Evaluation from "./landingPage/evaluation";
import Objectives from "./landingPage/objectives";
import Challengetable from "./landingPage/challengetable";
import Highlights from "./landingPage/highlights";
import Join from "./landingPage/join";
import Retail from "./landingPage/retail";
import Datatable from "./landingPage/Datatable";
import Features from "./landingPage/features";
import Prefooter from "./landingPage/prefooter";
import Footer from "./landingPage/footer";

import BannerBelow from "./landingPage/bannerlow";



const Landingpage = () => {
  return (
    <>
      
      <Nav />
      <div className="headBanner">
        <Banner />
      </div>
      <BannerBelow/>
      <div className="landingPage">
        <Propsection />
        <TradingSection />
        <Evaluation />
        <Objectives />
        <Challengetable />
        <Highlights />
        <Join />
        <Retail />
        <Datatable />
        <Features />
    </div>
    <Prefooter />
    <Footer />
    </>
  )
}

export default Landingpage