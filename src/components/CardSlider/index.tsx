import React from "react";
import CustomNextArrow from "../CustomComponents/CustomNextArrow";
import CustomPrevArrow from "../CustomComponents/CustomPrevArrow";
import { Box } from "@mui/material";
import Slider from "react-slick";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: () => <Box className="custom-dot" />
  };
  return (
    <Box className="slider-container">
      <Slider {...settings}>asd</Slider>
    </Box>
  );
};

export default CardSlider;
