import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import React from "react";
import "./index.scss";

const CustomNextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <Box className={"custom-arrow-next"} onClick={onClick}>
      <ArrowForwardIosIcon />
    </Box>
  );
};
export default CustomNextArrow;
