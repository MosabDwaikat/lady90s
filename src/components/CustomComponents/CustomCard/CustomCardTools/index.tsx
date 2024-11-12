import { Box, Button, Tooltip } from "@mui/material";
import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import "./index.scss";

import useStyles from "./index.styles";

const CustomCardTools = () => {
  const { classes } = useStyles();

  const handleQuickView = () => {
    // Handle quick view logic
    alert("implement Quick view");
  };

  const handleCart = () => {
    // Handle adding to cart logic
    alert("implement add to cart");
  };

  const handleWishlist = () => {
    // Handle adding to wishlist logic
    alert("implement add to wishlist");
  };

  const handleCompare = () => {
    // Handle comparing logic
    alert("implement compare");
  };

  return (
    <Box className={classes.cardTools}>
      <Tooltip title="رؤية سريعة" placement="top" arrow>
        <Button className={classes.cardBtn} onClick={handleQuickView}>
          <VisibilityIcon />
        </Button>
      </Tooltip>
      <Tooltip title="أضف إلى عربة التسوق" placement="top" arrow>
        <Button className={classes.cardBtn} onClick={handleCart}>
          <ShoppingCartIcon />
        </Button>
      </Tooltip>

      <Tooltip title="أضف لقائمة الأمنيات" placement="top" arrow>
        <Button className={classes.cardBtn} onClick={handleWishlist}>
          <FavoriteIcon />
        </Button>
      </Tooltip>

      <Tooltip title="مقارنة" placement="top" arrow>
        <Button className={classes.cardBtn} onClick={handleCompare}>
          <ShuffleIcon />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default CustomCardTools;
