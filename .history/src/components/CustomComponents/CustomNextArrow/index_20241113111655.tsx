import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import React from "react";
// import "./index.scss";
import useStyles from "./index.styles";

const CustomNextArrow = (props: CustomArrowProps) => {
  const { onClick, style } = props;
  const { classes } = useStyles({ backgroundColor: style?.backgroundColor });
  console.log(style?.backgroundColor);
  return (
    <Box className={classes.customArrowNext} onClick={onClick}>
      <ArrowForwardIosIcon />
    </Box>
  );
};
export default CustomNextArrow;
