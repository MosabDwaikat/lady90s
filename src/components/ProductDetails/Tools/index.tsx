import { Box, Button, Tooltip, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import React, { useEffect, useState } from "react";
import useStyles from "./index.styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addItemToCart } from "../../../store/Cart/CartSlice";
import ProductType from "../../../types/productType";
import { addItemToWishlist, deleteItemFromWishlist, WishlistItems } from "../../../store/Wishlist/WishlistSlice";

const Tools = ({ product }: { product: ProductType }) => {
  const [quantity, setQuantity] = useState(1);
  const [isShaking, setIsShaking] = useState(false);
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const wishlistItems: ProductType[] = useAppSelector(WishlistItems);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(deleteItemFromWishlist(product));
    } else {
      dispatch(addItemToWishlist(product));
    }
  };

  const handleCompare = () => {
    // Handle comparing logic
    alert("implement compare");
  };
  const handleAddToCart = () => {
    dispatch(addItemToCart({ product: product, quantity: quantity }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.container}>
      <Box className={classes.count}>
        <Button sx={{ paddingX: 0, minWidth: 0, marginRight: "10px" }} onClick={handleDecrement}>
          <RemoveOutlinedIcon />
        </Button>
        <Typography variant="body1" fontWeight={700}>
          {quantity}
        </Typography>
        <Button sx={{ paddingX: 0, minWidth: 0, marginLeft: "10px" }} onClick={handleIncrement}>
          <AddOutlinedIcon />
        </Button>
      </Box>
      <Button className={classes.addToCartBtn + " " + (isShaking ? "shake" : "")} onClick={handleAddToCart}>
        <ShoppingCartIcon />
        أضف إلى عربة التسوق
      </Button>

      <Tooltip title={isWishlisted ? "ازالة من قائمة الامنيات" : "أضف لقائمة الأمنيات"} placement="top" arrow>
        <Button
          className={classes.roundBtn}
          onClick={handleWishlist}
          sx={{ backgroundColor: isWishlisted ? "rgb(232, 30, 99) !important" : "white" }}
        >
          <FavoriteIcon />
        </Button>
      </Tooltip>

      <Tooltip title="مقارنة" placement="top" arrow>
        <Button className={classes.roundBtn} onClick={handleCompare}>
          <ShuffleIcon />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Tools;
