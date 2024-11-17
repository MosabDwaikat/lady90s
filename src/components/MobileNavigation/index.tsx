import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppsIcon from "@mui/icons-material/Apps";

const MobileNavigation = () => {
  const [value, setValue] = useState("home");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{ display: { xs: "flex", lg: "none" } }} value={value} onChange={handleChange}>
        <BottomNavigationAction label="تسوق" value="home" icon={<AppsIcon />} />
        <BottomNavigationAction label="الأمنيات" value="wishlist" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="عربة التسوق" value="cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="الحساب" value="account" icon={<PersonIcon />} />
        <BottomNavigationAction label="بحث" value="search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileNavigation;
