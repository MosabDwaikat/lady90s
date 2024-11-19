import React, { MouseEvent, SyntheticEvent } from "react";
import NavBarLogoImage from "../../../assets/images/NavBarLogo.png";
import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBarLogo = () => {
  const navigate = useNavigate();
  const navigateToHome = (event: SyntheticEvent) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Box width={180}>
      <Link href="" sx={{ cursor: "pointer" }} onClick={navigateToHome}>
        <img src={NavBarLogoImage} alt="x" width={"100%"} draggable="false" />
      </Link>
    </Box>
  );
};

export default NavBarLogo;
