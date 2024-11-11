import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import React from "react";
import "./index.scss";

const CustomPrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <Box className={"custom-arrow-prev"} onClick={onClick}>
      <ArrowBackIosIcon viewBox="-5 0 24 24" />
    </Box>
  );
};
export default CustomPrevArrow;
