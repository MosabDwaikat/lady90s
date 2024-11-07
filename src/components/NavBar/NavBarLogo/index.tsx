import React from "react";
import NavBarLogoImage from "../../../assets/images/NavBarLogo.png";
import { Box, Link } from "@mui/material";

const NavBarLogo = () => {
  const navigateToHome = () => {
    console.log("Navigating to home page");
  };

  return (
    <Box width={180}>
      <Link sx={{ cursor: "pointer" }} onClick={navigateToHome}>
        <img src={NavBarLogoImage} alt="" width={"100%"} />
      </Link>
    </Box>
  );
};

export default NavBarLogo;
