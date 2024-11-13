import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
// import "./index.scss";
import useStyles from "./index.styles";

interface CustomSliderDotsProps {
  sliderRef: React.RefObject<Slider>;
  index: number;
  variant?: "light" | "dark";
  slidesToScroll?: number;
}

interface SlickState {
  breakpoint: number | null;
}

const CustomSliderDots = ({ sliderRef, index, variant, slidesToScroll }: CustomSliderDotsProps) => {
  const { classes } = useStyles();
  const x: SlickState | undefined = sliderRef.current?.state;
  if (x) {
    console.log(typeof x);
  }

  return (
    <Box
      className={variant === "dark" ? classes.customDotDark : classes.customDot}
      onClick={() => sliderRef.current?.slickGoTo(index * (slidesToScroll ? slidesToScroll : 1))}
    />
  );
};

export default CustomSliderDots;
