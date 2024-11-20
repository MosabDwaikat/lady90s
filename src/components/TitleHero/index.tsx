import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./index.styles";

interface TitleHeroProps {
  content: { img: string; title: string };
}

const TitleHero = ({ content }: TitleHeroProps) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.titleHeroContainer}>
      <img className={classes.titleHeroImage} src={content.img} alt="" />
      <Typography className={classes.titleHeroText}>{content.title}</Typography>
    </Box>
  );
};

export default TitleHero;
