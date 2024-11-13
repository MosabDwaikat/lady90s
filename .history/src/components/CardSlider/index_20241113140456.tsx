import React, { useRef } from "react";
import CustomNextArrow from "../CustomComponents/CustomNextArrow";
import CustomPrevArrow from "../CustomComponents/CustomPrevArrow";
import CustomSliderDots from "../CustomComponents/CustomSliderDots";
import { Box } from "@mui/material";
import Slider from "react-slick";
// import "./index.scss";
import useStyles from "./index.styles";

interface CardSliderProps {
  children: React.ReactNode;
  slidesCount?: number;
  arrows?: "dark" | null;
}

const CardSlider = ({ arrow, slidesCount, children }: CardSliderProps) => {
  const { classes } = useStyles();
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: slidesCount || 4,
    slidesToShow: slidesCount || 4,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: classes.slickDots,
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
    <Box className={classes.cardSliderContainer}>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </Box>
  );
};

export default CardSlider;
