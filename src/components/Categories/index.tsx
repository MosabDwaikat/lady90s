import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import categories from "../../staticData/categories";
import Category from "./Category";

import useStyles from "./index.styles";

const Categories = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.categoriesContainer}>
      <Box className={classes.categoriesHeaderContainer}>
        <Typography className={classes.categoriesHeaderTitle} variant="body1">
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
