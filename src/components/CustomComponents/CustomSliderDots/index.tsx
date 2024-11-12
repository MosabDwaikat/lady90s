import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "./index.scss";

interface CustomSliderDotsProps {
  sliderRef: React.RefObject<Slider>;
  index: number;
  variant?: "light" | "dark";
  slidesToScroll?: number;
}

const CustomSliderDots = ({ sliderRef, index, variant, slidesToScroll }: CustomSliderDotsProps) => {
  console.log(index);
  return (
    <Box
      className={variant === "dark" ? "custom-dot-dark" : "custom-dot"}
      onClick={() => sliderRef.current?.slickGoTo(index * (slidesToScroll ? slidesToScroll : 1))}
    />
  );
};

export default CustomSliderDots;
