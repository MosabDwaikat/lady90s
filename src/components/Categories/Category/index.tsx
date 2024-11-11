import { Badge, Box, Typography } from "@mui/material";
import React from "react";
import "./index.scss";

export interface CategoryProps {
  category: {
    image: string;
    title: string;
    count: number;
  };
}

const Category = ({ category }: CategoryProps) => {
  return (
    <Box className="category-container">
      <Badge
        className="category-count"
        max={1000}
        badgeContent={category.count}
        color="primary"
        anchorOrigin={{
          vertical: "top", // Can be 'top' or 'bottom'
          horizontal: "left" // Can be 'left' or 'right'
        }}
      >
        <Box className="category-img-container">
          <img src={category.image} alt="" />
        </Box>
      </Badge>
      <Box>
        <Typography variant="body1" className="category-title">
          {category.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Category;
