import React, { useEffect, useState } from "react";
import { Badge, Box, Drawer } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchDrawerContent from "./SearchDrawerContent";
import CartDrawerContent from "./CartDrawerContent";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { CartItemsCount, isCartChanged, resetCartChangedFlag } from "../../../store/Cart/CartSlice";
import useStyles from "./index.styles";
import { useNavigate } from "react-router-dom";
import { WishlistItemsCount } from "../../../store/Wishlist/WishlistSlice";

const NavBarTools = () => {
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const cartChanged = useAppSelector(isCartChanged);
  const cartItemsCount = useAppSelector(CartItemsCount);
  const wishlistItemsCount = useAppSelector(WishlistItemsCount);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { classes } = useStyles();

  const handleWishlist = () => {
    navigate("wishlist");
  };
  const handleAccount = () => {
    navigate("account");
  };

  useEffect(() => {
    if (cartChanged) {
      setCartDrawerOpen(true);
      dispatch(resetCartChangedFlag());
    }
  }, [cartChanged]);

  return (
    <Box width={"160px"} display={"flex"} justifyContent={"space-between"}>
      <SearchIcon className={classes.navItem} sx={{ width: "24px" }} onClick={() => setSearchDrawerOpen(true)} />
      <PersonIcon className={classes.navItem} sx={{ width: "24px" }} onClick={handleAccount} />
      <Badge className={classes.navItem} badgeContent={wishlistItemsCount} color="primary" onClick={handleWishlist}>
        <FavoriteIcon sx={{ width: "24px" }} />
      </Badge>
      <Badge
        className={classes.navItem}
        badgeContent={cartItemsCount}
        color="primary"
        onClick={() => setCartDrawerOpen(true)}
      >
        <ShoppingCartIcon sx={{ width: "24px" }} />
      </Badge>
      <Drawer anchor="left" open={searchDrawerOpen} onClose={() => setSearchDrawerOpen(false)}>
        <SearchDrawerContent />
      </Drawer>
      <Drawer anchor="left" open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)}>
        <CartDrawerContent closeDrawer={() => setCartDrawerOpen(false)} />
      </Drawer>
    </Box>
  );
};

export default NavBarTools;
