import { Box, Typography } from "@mui/material";
import React from "react";
import CustomCardTools from "./CustomCardTools";
import "./index.scss";

export interface CustomCardProps {
  content: {
    title: string;
    price: number;
    image: string;
  };
}

const CustomCard = ({ content }: CustomCardProps) => {
  return (
    <Box className="card-container">
      <Box className="card-img-container">
        <img className="card-img" src={content.image} alt="" />
        <img
          className="img-hover"
          src="https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823&width=500"
          alt=""
        />
        <CustomCardTools />
      </Box>
      <Box>
        <Typography className="card-title">{content.title}</Typography>
        <Typography className="card-price">{`${content.price} شيكل`} </Typography>
      </Box>
    </Box>
  );
};

export default CustomCard;
