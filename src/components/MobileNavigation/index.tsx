import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppsIcon from "@mui/icons-material/Apps";
import useStyles from "./index.style";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { openSearchDrawer } from "../../store/Search/SearchSlice";

const MobileNavigation = () => {
  const [value, setValue] = useState("");
  const { classes } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    if (newValue === "/search") {
      dispatch(openSearchDrawer());
    } else {
      setValue(newValue);
      navigate(newValue);
    }
  };

  return (
    <Paper className={classes.container} elevation={3}>
      <BottomNavigation sx={{ display: { xs: "flex", lg: "none" } }} value={value} onChange={handleChange}>
        <BottomNavigationAction label="تسوق" value="/" icon={<AppsIcon />} />
        <BottomNavigationAction label="الأمنيات" value="/wishlist" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="عربة التسوق" value="/cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="الحساب" value="/account" disabled icon={<PersonIcon />} />
        <BottomNavigationAction label="بحث" value="/search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileNavigation;
