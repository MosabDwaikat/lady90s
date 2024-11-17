import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import MobileNavigation from "../MobileNavigation";
import NavBar from "../NavBar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ pb: { xs: 7, lg: 0 } }}>
      <NavBar />
      {children}
      <MobileNavigation />
    </Box>
  );
};

export default AppLayout;
