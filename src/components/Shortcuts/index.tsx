import { Box, Button } from "@mui/material";
import React from "react";
import useStyles from "./index.styles";
import brands from "../../staticData/brands";
import CardSlider from "../CardSlider";
import categories from "../../staticData/categories";
import Category from "../Categories/Category";

const Shortcuts = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.shortcutsMainPanel}>
      <Box className={classes.shortcutsLinksPanel}>
        {brands.map((brand, index) => {
          return (
            <Button key={index} className={classes.shortcutLink}>
              {brand.name}
            </Button>
          );
        })}
      </Box>
      <Box className={classes.shortcutsCategoriesContainer}>
        <Box className={classes.shortcutsCategoriesPanel}>
          <CardSlider slidesCount={{ xs: 4, sm: 5, md: 6 }} dots={false} arrows={false}>
            {categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </CardSlider>
        </Box>
      </Box>
    </Box>
  );
};

export default Shortcuts;
