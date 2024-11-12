import React from "react";
import CardSlider from "../CardSlider";
import CustomCard from "../CustomComponents/CustomCard";
import bags from "../../staticData/bags";
import { Box, Typography } from "@mui/material";
import Decoration from "../../assets/icons/decoration";
import "./index.scss";

const Bags = () => {
  return (
    <Box className="bags-container">
      <Box className="bags-header">
        <Typography className="bags-title">حقائب سيدات المجتمع</Typography>
        <Decoration />
      </Box>
      <CardSlider>
        {bags.map((item, index) => (
          <CustomCard key={index} content={item} />
        ))}
      </CardSlider>
    </Box>
  );
};

export default Bags;
