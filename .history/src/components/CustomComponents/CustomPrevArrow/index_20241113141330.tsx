import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import React from "react";
// import "./index.scss";
import useStyles from "./index.styles";

interface ArrowProps extends CustomArrowProps {
  darkArrows?: boolean;
}

const CustomPrevArrow = (props: ArrowProps) => {
  const { onClick, darkArrows } = props;
  const { classes } = useStyles({ darkArrows });

  return (
    <Box className={classes.customArrowPrev} onClick={onClick}>
      <ArrowBackIosIcon viewBox="-5 0 24 24" />
    </Box>
  );
};
export default CustomPrevArrow;
