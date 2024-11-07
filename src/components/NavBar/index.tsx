import React, { useState } from "react";
import { AppBar, Box, Container, Drawer, IconButton, Link, List, ListItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerList from "./DrawerList";
import NavBarLogo from "./NavBarLogo";
import NavBarTools from "./NavBarTools";
import "./index.scss";
import pages from "../../staticData/pages";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigatetopage = () => {
    console.log("navigator");
  };

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavBarLogo />
          <Box justifyContent={"center"} flex={1} sx={{ mx: 2, display: { xs: "none", md: "flex" } }}>
            <List sx={{ display: "inline-flex", flexWrap: "wrap" }}>
              {pages.map((page, index) => (
                <ListItem key={index} sx={{ display: "list-item", width: "auto", padding: "0" }}>
                  <Link className="nav-link" onClick={navigatetopage}>
                    {page.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          <NavBarTools />
          <Drawer
            sx={{ display: { xs: "flex", md: "none" } }}
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <DrawerList />
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
