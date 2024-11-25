import { Box, Button, Tooltip } from "@mui/material";
import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useStyles from "./index.styles";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import ProductType from "../../../../types/productType";
import { addItemToWishlist, deleteItemFromWishlist, WishlistItems } from "../../../../store/Wishlist/WishlistSlice";
interface CustomCardToolsProps {
  handleCart: () => void;
  content: ProductType;
  detailsView?: boolean;
}
const CustomCardTools = ({ detailsView, handleCart, content }: CustomCardToolsProps) => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const wishlistItems: ProductType[] = useAppSelector(WishlistItems);
  const isWishlisted = wishlistItems.some((item) => item.id === content.id);

  const handleQuickView = () => {
    // Handle quick view logic
    alert("implement Quick view");
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(deleteItemFromWishlist(content));
    } else {
      dispatch(addItemToWishlist(content));
    }
  };

  const handleCompare = () => {
    // Handle comparing logic
    alert("implement compare");
  };

  return (
    <Box className={classes.cardTools}>
      {!detailsView && (
        <>
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
        </>
      )}

      <Tooltip title={isWishlisted ? "ازالة من قائمة الامنيات" : "أضف لقائمة الأمنيات"} placement="top" arrow>
        <Button
          className={classes.cardBtn}
          onClick={handleWishlist}
          sx={{ backgroundColor: isWishlisted ? "rgb(232, 30, 99) !important" : "white" }}
        >
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
