import React from "react";
import NavBarLogoImage from "../../../assets/images/NavBarLogo.png";
import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBarLogo = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
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
