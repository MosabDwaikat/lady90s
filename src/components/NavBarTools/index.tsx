import React from "react";
import { Badge, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./index.scss";

const NavBarTools = () => {
  return (
    <Box width={"160px"} display={"flex"} justifyContent={"space-between"}>
      <SearchIcon className="nav-item" sx={{ width: "24px" }} />
      <PersonIcon className="nav-item" sx={{ width: "24px" }} />
      <Badge className="nav-item" badgeContent={4} color="primary">
        <FavoriteIcon sx={{ width: "24px" }} />
      </Badge>
      <Badge className="nav-item" badgeContent={4} color="primary">
        <ShoppingCartIcon sx={{ width: "24px" }} />
      </Badge>
    </Box>
  );
};

export default NavBarTools;
