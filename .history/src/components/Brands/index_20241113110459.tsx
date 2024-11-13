import React from "react";
import CardSlider from "../CardSlider";
import brands from "../../staticData/brands";
import { Box } from "@mui/material";
import useStyles from "./index.styles";

const Brands = () => {
  const { classes } = useStyles();
  return (
    <CardSlider slidesCount={6}>
      {brands.map((brand, index) => {
        return (
          <Box className={classes.slideBox} key={index}>
            <img className={classes.brandImage} src={brand.img} alt={brand.name} />
          </Box>
        );
      })}
    </CardSlider>
  );
};

export default Brands;
