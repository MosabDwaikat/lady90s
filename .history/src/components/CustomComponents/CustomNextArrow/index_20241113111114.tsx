import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import React from "react";
// import "./index.scss";
import useStyles from "./index.styles";

const CustomNextArrow = (props: CustomArrowProps) => {
  const { classes } = useStyles({});
  const { onClick } = props;
  return (
    <Box className={classes.customArrowNext} onClick={onClick}>
      <ArrowForwardIosIcon />
    </Box>
  );
};
export default CustomNextArrow;
