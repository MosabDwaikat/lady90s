import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import React from "react";
// import "./index.scss";
import useStyles from "./index.styles";

interface ArrowProps extends CustomArrowProps {
  darkArrows?: boolean;
}

const CustomPrevArrow = (props: CustomArrowProps) => {
  const { classes } = useStyles();

  const { onClick } = props;
  return (
    <Box className={classes.customArrowPrev} onClick={onClick}>
      <ArrowBackIosIcon viewBox="-5 0 24 24" />
    </Box>
  );
};
export default CustomPrevArrow;
