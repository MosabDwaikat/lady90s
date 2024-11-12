import React, { useRef } from "react";
import CustomNextArrow from "../CustomComponents/CustomNextArrow";
import CustomPrevArrow from "../CustomComponents/CustomPrevArrow";
import CustomSliderDots from "../CustomComponents/CustomSliderDots";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "./index.scss";

interface CardSliderProps {
  children: React.ReactNode;
}

const CardSlider = ({ children }: CardSliderProps) => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: (index: number) => (
      <CustomSliderDots sliderRef={sliderRef} index={index} variant="dark" slidesToScroll={settings.slidesToScroll} />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <Box className="card-slider-container">
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </Box>
  );
};

export default CardSlider;
