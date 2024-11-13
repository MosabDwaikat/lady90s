import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
// import "./index.scss";
import useStyles from "./index.styles";

interface CustomSliderDotsProps {
  sliderRef: React.RefObject<Slider>;
  index: number;
  variant?: "light" | "dark";
  slidesToScroll?: number;
}

const CustomSliderDots = ({ sliderRef, index, variant, slidesToScroll }: CustomSliderDotsProps) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      className={variant === "dark" ? classes.customDotDark : classes.customDot}
      onClick={() => sliderRef.current?.slickGoTo(index * (slidesToScroll ? slidesToScroll : 1))}
    />
  );
};

export default CustomSliderDots;
