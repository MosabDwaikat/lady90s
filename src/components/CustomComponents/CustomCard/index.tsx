import { Box, Typography } from "@mui/material";
import React from "react";
import CustomCardTools from "./CustomCardTools";
// import "./index.scss";
import useStyles from "./index.styles";

export interface CustomCardProps {
  content: {
    title: string;
    price: number;
    image: string;
  };
}

const CustomCard = ({ content }: CustomCardProps) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <Box className={classes.cardImgContainer}>
        <img loading="lazy" className={classes.cardImg} src={content.image} alt="" />
        <img
          className={classes.imgHover}
          src="https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823&width=500"
          alt=""
          loading="lazy"
        />
        <CustomCardTools />
      </Box>
      <Box>
        <Typography className={classes.cardTitle}>{content.title}</Typography>
        <Typography className={classes.cardPrice}>{`${content.price} شيكل`} </Typography>
      </Box>
    </Box>
  );
};

export default CustomCard;
