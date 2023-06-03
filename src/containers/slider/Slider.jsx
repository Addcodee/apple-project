import React from "react";
import "./Slider.css";
import platonic from "../../assets/platonic.jpg";
import lastThing from "../../assets/the-last.jpg";
import prePlanet from "../../assets/pre_planet.png";
import lasso from "../../assets/ted-lasso.jpg";

const Slider = () => {
  const slides = [
    { id: "slide-1", img: platonic },
    { id: "slide-1", img: lastThing },
    { id: "slide-1", img: prePlanet },
    { id: "slide-1", img: lasso },
  ];
  return (
    <section className="slider">
      <div className="slider__wrapper">
        <div className="slider__body">
          <img id="slide-1" src={platonic} alt="" />
          <img id="slide-2" src={lastThing} alt="" />
          <img id="slide-3" src={prePlanet} alt="" />
          <img id="slide-4" src={lasso} alt="" />
        </div>
        <div className="slider__nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
