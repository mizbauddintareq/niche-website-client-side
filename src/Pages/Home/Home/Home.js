import React from "react";
import MainProducts from "../MainProducts/MainProducts";
import OurPartners from "../OurPartners/OurPartners";
import Reviews from "../Reviews/Reviews";
import "./Home.css";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <MainProducts></MainProducts>
      <Reviews></Reviews>
      <OurPartners></OurPartners>
    </div>
  );
};

export default Home;
