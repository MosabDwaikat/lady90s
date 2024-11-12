import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import CustomNextArrow from "../CustomComponents/CustomNextArrow";
import CustomPrevArrow from "../CustomComponents/CustomPrevArrow";
import CustomSliderDots from "../CustomComponents/CustomSliderDots";
import "./carousel.scss";

export interface SlickSliderProps {
  slides: {
    img: string;
    text: string;
    subText: string;
    buttonText: string;
    buttonRedirect: string;
  }[];
}

const SlickSlider = ({ slides }: SlickSliderProps) => {
  const sliderRef = useRef<Slider>(null);

  const CustomSlideButton = styled(Button)(() => ({
    color: "white",
    fontWeight: "700",
    border: "1px solid white",
    borderRadius: "40px",
    padding: "10px 30px",
    "&:hover": {
      backgroundColor: "#dcb27b"
    }
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: (index: number) => <CustomSliderDots sliderRef={sliderRef} index={index} />
  };

  const handleSlideButton = (buttonRedirect: string) => {
    console.log("navigate to " + buttonRedirect);
  };

  return (
    <Box className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <Box className="slide" key={index}>
            <Box className="img-container">
              <img className="carousel-img" src={slide.img} alt={`Slide ${index}`} />
            </Box>
            <Box className="slide-content">
              <Typography variant="body1" className="slide-text">
                {slide.text}
              </Typography>
              <Typography variant="body2" className="slide-subtext">
                {slide.subText}
              </Typography>
              <CustomSlideButton className="slide-button" onClick={() => handleSlideButton(slide.buttonRedirect)}>
                {slide.buttonText}
              </CustomSlideButton>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SlickSlider;
