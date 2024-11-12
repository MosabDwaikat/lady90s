import React from "react";
import CardSlider from "../CardSlider";
import CustomCard, { CustomCardProps } from "../CustomComponents/CustomCard";
import { Box, Typography } from "@mui/material";
import Decoration from "../../assets/icons/decoration";
import useStyles from "./index.styles";

interface SliderSectionProps {
  content: CustomCardProps["content"][];
  title: string;
}

const SliderSection = ({ content, title }: SliderSectionProps) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.newlyArrivedContainer}>
      <Box className={classes.newlyArrivedHeader}>
        <Typography className={classes.newlyArrivedTitle}>{title}</Typography>
        <Decoration />
      </Box>
      <CardSlider>
        {content.map((item, index) => (
          <CustomCard key={index} content={item} />
        ))}
      </CardSlider>
    </Box>
  );
};

export default SliderSection;
