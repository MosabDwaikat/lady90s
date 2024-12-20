import React from "react";
import CardSlider from "../CardSlider";
import brands from "../../staticData/brands";
import { Box } from "@mui/material";
import useStyles from "./index.styles";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (target: string) => {
    navigate(target);
  };
  return (
    <Box className={classes.brandsContainer}>
      <CardSlider slidesCount={{ md: 6 }} darkArrows>
        {brands.map((brand, index) => {
          return (
            <Box className={classes.slideBox} key={index} onClick={() => handleNavigate(brand.name)}>
              <img loading="lazy" className={classes.brandImage} src={brand.img} alt="" />
            </Box>
          );
        })}
      </CardSlider>
    </Box>
  );
};

export default Brands;
