import React, { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import useStyles from "./index.styles";

interface SlidesToScroll {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

interface CustomSliderDotsProps {
  sliderRef: React.RefObject<Slider>;
  index: number;
  variant?: "light" | "dark";
  slidesToScroll?: SlidesToScroll;
}

const CustomSliderDots = ({ sliderRef, index, variant, slidesToScroll }: CustomSliderDotsProps) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("xs");
  const { classes } = useStyles();
  const theme = useTheme();
  const breakpoints = {
    xs: useMediaQuery(theme.breakpoints.only("xs")),
    sm: useMediaQuery(theme.breakpoints.only("sm")),
    md: useMediaQuery(theme.breakpoints.only("md")),
    lg: useMediaQuery(theme.breakpoints.only("lg")),
    xl: useMediaQuery(theme.breakpoints.only("xl"))
  };
  useEffect(() => {
    const breakpoint = Object.keys(breakpoints).find((key) => breakpoints[key as keyof typeof breakpoints]) || "xs";
    setCurrentBreakpoint(breakpoint);
  }, [breakpoints]);

  const currentSlidesToScroll: number = slidesToScroll ? slidesToScroll[currentBreakpoint as keyof SlidesToScroll] : 1;

  return (
    <Box
      className={variant === "dark" ? classes.customDotDark : classes.customDot}
      onClick={() => sliderRef.current?.slickGoTo(index * currentSlidesToScroll)}
    />
  );
};

export default CustomSliderDots;
