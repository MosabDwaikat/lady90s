import { Badge, Box, Typography } from "@mui/material";
import React from "react";
// import "./index.scss";
import useStyles from "./index.styles";

export interface CategoryProps {
  category: {
    image: string;
    title: string;
    count: number;
  };
}

const Category = ({ category }: CategoryProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.categoryContainer}>
      <Badge
        className={classes.categoryBadge}
        max={1000}
        badgeContent={category.count}
        color="primary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <Box className={classes.categoryImgContainer}>
          <img loading="lazy" className={classes.categoryImgContainerImg} src={category.image} alt="" />
        </Box>
      </Badge>
      <Box>
        <Typography variant="body1" className={classes.categoryTitle}>
          {category.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Category;
