import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import categories from "../../staticData/categories";
import Category from "./Category";

const Categories = () => {
  return (
    <Box className="categories-container">
      <Box className="categories-header-container">
        <Typography className="categories-header-title" variant="body1">
          أصنافنا
        </Typography>
      </Box>
      <Grid container justifyContent={"center"} spacing={2}>
        {categories.map((category, index) => (
          <Grid key={index} size={{ xs: 4, md: 2.4, lg: 1.33 }}>
            <Category category={category} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
