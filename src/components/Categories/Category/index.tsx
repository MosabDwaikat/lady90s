import { Badge, Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./index.styles";
import { useNavigate } from "react-router-dom";

export interface CategoryProps {
  category: {
    image: string;
    title: string;
    count: number;
    target: string;
  };
}

const Category = ({ category }: CategoryProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(category.target);
  };

  return (
    <Box className={classes.categoryContainer} onClick={handleNavigate}>
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
          <img loading="lazy" className={classes.categoryImg} src={category.image} alt="" />
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
