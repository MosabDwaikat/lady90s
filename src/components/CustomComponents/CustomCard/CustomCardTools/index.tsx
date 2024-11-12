import { Box, Button, Tooltip } from "@mui/material";
import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./index.scss";

const CustomCardTools = () => {
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
    <Box className="card-tools">
      <Tooltip title="رؤية سريعة" placement="top" arrow>
        <Button className="card-btn" onClick={handleQuickView}>
          <VisibilityIcon />
        </Button>
      </Tooltip>
      <Tooltip title="أضف إلى عربة التسوق" placement="top" arrow>
        <Button className="card-btn" onClick={handleCart}>
          <ShoppingCartIcon />
        </Button>
      </Tooltip>

      <Tooltip title="أضف لقائمة الأمنيات" placement="top" arrow>
        <Button className="card-btn" onClick={handleWishlist}>
          <FavoriteIcon />
        </Button>
      </Tooltip>

      <Tooltip title="مقارنة" placement="top" arrow>
        <Button className="card-btn" onClick={handleCompare}>
          <ShuffleIcon />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default CustomCardTools;
