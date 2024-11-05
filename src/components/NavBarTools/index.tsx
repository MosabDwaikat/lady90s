import React from "react";
import { Badge, Box, Drawer } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./index.scss";
import { SearchDrawerOpen, toggleSearchDrawer } from "../../store/SearchDrawer/SearchDrawerSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SearchDrawerContent from "./SearchDrawerContent";
import { CartDrawerOpen, toggleCartDrawer } from "../../store/CartDrawer/CartDrawerSlice";
import CartDrawerContent from "./CartDrawerContent";

const NavBarTools = () => {
  const dispatch = useAppDispatch();
  const searchDrawerOpen = useAppSelector(SearchDrawerOpen);
  const cartDrawerOpen = useAppSelector(CartDrawerOpen);

  const handleWishlist = () => {
    console.log("navigate to wishlist");
  };
  const handleAccount = () => {
    console.log("navigate to Account");
  };

  return (
    <Box width={"160px"} display={"flex"} justifyContent={"space-between"}>
      <SearchIcon className="nav-item" sx={{ width: "24px" }} onClick={() => dispatch(toggleSearchDrawer(true))} />
      <PersonIcon className="nav-item" sx={{ width: "24px" }} onClick={handleAccount} />
      <Badge className="nav-item" badgeContent={4} color="primary" onClick={handleWishlist}>
        <FavoriteIcon sx={{ width: "24px" }} />
      </Badge>
      <Badge className="nav-item" badgeContent={4} color="primary" onClick={() => dispatch(toggleCartDrawer(true))}>
        <ShoppingCartIcon sx={{ width: "24px" }} />
      </Badge>
      <Drawer anchor="left" open={searchDrawerOpen} onClose={() => dispatch(toggleSearchDrawer(false))}>
        <SearchDrawerContent />
      </Drawer>
      <Drawer anchor="left" open={cartDrawerOpen} onClose={() => dispatch(toggleCartDrawer(false))}>
        <CartDrawerContent />
      </Drawer>
    </Box>
  );
};

export default NavBarTools;
