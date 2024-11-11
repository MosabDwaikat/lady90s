import React, { CSSProperties, MouseEventHandler } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./carousel.scss";
import styled from "@emotion/styled";

export interface SlickSliderProps {
  slides: {
    img: string;
    text: string;
    subText: string;
    buttonText: string;
    buttonRedirect: string;
  }[];
}

interface CustomArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const SlickSlider = ({ slides }: SlickSliderProps) => {
  const CustomNextArrow = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
      <Box className={"custom-arrow-next"} onClick={onClick}>
        <ArrowForwardIosIcon />
      </Box>
    );
  };

  const CustomPrevArrow = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
      <Box className={"custom-arrow-prev"} onClick={onClick}>
        <ArrowBackIosIcon viewBox="-5 0 24 24" />
      </Box>
    );
  };
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
    customPaging: () => <Box className="custom-dot" />
  };

  const handleSlideButton = (buttonRedirect: string) => {
    console.log("navigate to " + buttonRedirect);
  };

  return (
    <Box className="slider-container">
      <Slider {...settings}>
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
