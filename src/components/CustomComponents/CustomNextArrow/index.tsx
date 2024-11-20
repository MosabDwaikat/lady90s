import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import React from "react";
import useStyles from "./index.styles";

interface ArrowProps extends CustomArrowProps {
  darkArrows?: boolean;
}

const CustomNextArrow = (props: ArrowProps) => {
  const { onClick, darkArrows } = props;
  const { classes } = useStyles({ darkArrows });
  return (
    <Box className={classes.customArrowNext} onClick={onClick}>
      <ArrowForwardIosIcon />
    </Box>
  );
};
export default CustomNextArrow;
