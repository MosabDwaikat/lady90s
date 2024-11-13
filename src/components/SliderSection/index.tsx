import React from "react";
import CardSlider from "../CardSlider";
import CustomCard, { CustomCardProps } from "../CustomComponents/CustomCard";
import { Box, Button, Typography } from "@mui/material";
import Decoration from "../../assets/icons/decoration";
import useStyles from "./index.styles";

interface SliderSectionProps {
  content: CustomCardProps["content"][];
  title?: string;
  navLink?: string;
}

const SliderSection = ({ content, title, navLink }: SliderSectionProps) => {
  const { classes } = useStyles();
  const handleNavigate = () => {
    console.log("navigate to " + navLink);
  };
  return (
    <Box className={classes.sectionContainer}>
      <Box className={classes.sectionHeader}>
        {<Box className={classes.sectionPlaceholder}></Box>}
        {title && (
          <Box className={classes.sectionTitleHeader}>
            <Typography className={classes.sectionTitle}>{title}</Typography>
            <Decoration />
          </Box>
        )}
        {navLink ? (
          <Box className={classes.sectionNavBtnHeader}>
            <Button className={classes.viewAllBtn} onClick={handleNavigate}>
              عرض الكل
            </Button>
          </Box>
        ) : (
          <Box className={classes.sectionPlaceholder}></Box>
        )}
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
