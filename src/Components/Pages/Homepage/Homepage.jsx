import React from "react";
import Navbar from "../../Navigation/Navbar";
import Herosection from "../../Herosection/Herosection";
import Features from "../../../Features/Features";
import Footer from "../../Footer/Footer";
import Slides from "../../Slides/Slides";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Herosection/>
      <Slides/>
      <Features/>
      <Footer/>
    </>
  );
};

export default Homepage;
