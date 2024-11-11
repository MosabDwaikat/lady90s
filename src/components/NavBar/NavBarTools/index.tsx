import React, { useState } from "react";
import { Badge, Box, Drawer } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./index.scss";
import SearchDrawerContent from "./SearchDrawerContent";
import CartDrawerContent from "./CartDrawerContent";
import { useAppSelector } from "../../../store/hooks";
import { CartItemsCount } from "../../../store/Cart/CartSlice";

const NavBarTools = () => {
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const cartItemsCount = useAppSelector(CartItemsCount);
  const handleWishlist = () => {
    console.log("navigate to wishlist");
  };
  const handleAccount = () => {
    console.log("navigate to Account");
  };

  return (
    <Box width={"160px"} display={"flex"} justifyContent={"space-between"}>
      <SearchIcon className="nav-item" sx={{ width: "24px" }} onClick={() => setSearchDrawerOpen(true)} />
      <PersonIcon className="nav-item" sx={{ width: "24px" }} onClick={handleAccount} />
      <Badge className="nav-item" badgeContent={4} color="primary" onClick={handleWishlist}>
        <FavoriteIcon sx={{ width: "24px" }} />
      </Badge>
      <Badge className="nav-item" badgeContent={cartItemsCount} color="primary" onClick={() => setCartDrawerOpen(true)}>
        <ShoppingCartIcon sx={{ width: "24px" }} />
      </Badge>
      <Drawer anchor="left" open={searchDrawerOpen} onClose={() => setSearchDrawerOpen(false)}>
        <SearchDrawerContent />
      </Drawer>
      <Drawer anchor="left" open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)}>
        <CartDrawerContent />
      </Drawer>
    </Box>
  );
};

export default NavBarTools;