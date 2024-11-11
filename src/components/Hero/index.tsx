import React from "react";
import Carousel from "./carousel";
import { slides } from "../../staticData/slides";

const Hero = () => {
  return <Carousel slides={slides} />;
};

export default Hero;
