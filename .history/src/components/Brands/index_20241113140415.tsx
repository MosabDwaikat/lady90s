import React from "react";
import CardSlider from "../CardSlider";
import brands from "../../staticData/brands";
import { Box } from "@mui/material";
import useStyles from "./index.styles";

const Brands = () => {
  const { classes } = useStyles();
  const handleNavigate = (name: string) => {
    console.log(`Navigate to brand's product page: ${name}`);
  };
  return (
    <Box className={classes.brandsContainer}>
      <CardSlider slidesCount={6} arrows="dark">
        {brands.map((brand, index) => {
          return (
            <Box className={classes.slideBox} key={index} onClick={() => handleNavigate(brand.name)}>
              <img className={classes.brandImage} src={brand.img} alt="" />
            </Box>
          );
        })}
      </CardSlider>
    </Box>
  );
};

export default Brands;
