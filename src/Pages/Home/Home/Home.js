import React from "react";
import MainProducts from "../MainProducts/MainProducts";
import Reviews from "../Reviews/Reviews";

import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <MainProducts></MainProducts>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
