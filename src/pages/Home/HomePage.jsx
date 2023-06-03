import React from "react";
import Header from "../../containers/header/Header";
import CTA from "../../containers/cta/CTA";
import Slider from "../../containers/slider/Slider";
import Footer from "../../containers/footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CTA />
      <Slider />
      <Footer />
    </div>
  );
};

export default HomePage;
