import React from "react";
import CardSlider from "../CardSlider";
import brands from "../../staticData/brands";
import { Box } from "@mui/material";
import useStyles from "./index.styles";

const Brands = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.brandsContainer}>
      <CardSlider slidesCount={6}>
        {brands.map((brand, index) => {
          return (
            <Box className={classes.slideBox} key={index}>
              <img className={classes.brandImage} src={brand.img} alt={brand.name} />
            </Box>
          );
        })}
      </CardSlider>
    </Box>
  );
};

export default Brands;
