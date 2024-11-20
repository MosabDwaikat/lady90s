import React, { useRef } from "react";
import CustomNextArrow from "../CustomComponents/CustomNextArrow";
import CustomPrevArrow from "../CustomComponents/CustomPrevArrow";
import CustomSliderDots from "../CustomComponents/CustomSliderDots";
import { Box } from "@mui/material";
import Slider from "react-slick";
import useStyles from "./index.styles";

export interface SlidesCount {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}

interface CardSliderProps {
  children: React.ReactNode;
  slidesCount?: SlidesCount;
  darkArrows?: boolean;
  arrows?: boolean;
  dots?: boolean;
}

const CardSlider = ({ darkArrows, slidesCount, children, arrows = true, dots = true }: CardSliderProps) => {
  const { classes } = useStyles();
  const sliderRef = useRef<Slider>(null);

  const defaultSlidesCount = {
    xl: 4,
    lg: 4,
    md: 4,
    sm: 2,
    xs: 1
  };

  const computedSlidesCount = {
    xs: slidesCount?.xs ?? defaultSlidesCount.xs,
    sm: slidesCount?.sm ?? slidesCount?.xs ?? defaultSlidesCount.sm,
    md: slidesCount?.md ?? slidesCount?.sm ?? slidesCount?.xs ?? defaultSlidesCount.md,
    lg: slidesCount?.lg ?? slidesCount?.md ?? slidesCount?.sm ?? slidesCount?.xs ?? defaultSlidesCount.lg,
    xl:
      slidesCount?.xl ??
      slidesCount?.lg ??
      slidesCount?.md ??
      slidesCount?.sm ??
      slidesCount?.xs ??
      defaultSlidesCount.xl
  };

  const settings = {
    dots: dots,
    arrows: arrows,
    infinite: true,
    speed: 500,
    slidesToScroll: computedSlidesCount.xl, // Default for large screens
    slidesToShow: computedSlidesCount.xl,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow darkArrows={darkArrows} />,
    prevArrow: <CustomPrevArrow darkArrows={darkArrows} />,
    dotsClass: classes.slickDots,
    customPaging: (index: number) => (
      <CustomSliderDots sliderRef={sliderRef} index={index} variant="dark" slidesToScroll={computedSlidesCount} />
    ),
    responsive: [
      {
        breakpoint: 1536, // lg < 1536
        settings: {
          slidesToShow: computedSlidesCount.lg,
          slidesToScroll: computedSlidesCount.lg
        }
      },
      {
        breakpoint: 1024, // md < 1024
        settings: {
          slidesToShow: computedSlidesCount.md,
          slidesToScroll: computedSlidesCount.md
        }
      },
      {
        breakpoint: 768, // sm < 768
        settings: {
          slidesToShow: computedSlidesCount.sm,
          slidesToScroll: computedSlidesCount.sm
        }
      },
      {
        breakpoint: 600, // xs < 600
        settings: {
          slidesToShow: computedSlidesCount.xs,
          slidesToScroll: computedSlidesCount.xs
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
