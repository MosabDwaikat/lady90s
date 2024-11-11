import React from "react";
import "./index.scss";
import { Box } from "@mui/material";
import Slider from "react-slick";

interface CustomSliderDotsProps {
  sliderRef: React.RefObject<Slider>;
  index: number;
}

const CustomSliderDots = ({ sliderRef, index }: CustomSliderDotsProps) => {
  return <Box className="custom-dot" onClick={() => sliderRef.current?.slickGoTo(index)} />;
};

export default CustomSliderDots;
