import React from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerList from "./DrawerList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { DrawerOpen, toggleDrawer } from "../../store/NavBarDrawer/drawerSlice";
import NavBarLogo from "../NavBarLogo";
import NavBarTools from "../NavBarTools";
import "./index.scss";
import pages from "../../assets/pages";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const drawerOpen = useAppSelector(DrawerOpen);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const navigatetopage = () => {
    console.log("navigator");
  };

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => dispatch(toggleDrawer(true))}>
              <MenuIcon />
            </IconButton>
          )}

          <NavBarLogo />
          {!isMobile && (
            <Box display={"flex"} justifyContent={"center"} flex={1} sx={{ mx: 2 }}>
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
          )}

          <NavBarTools />
          {isMobile && (
            <Drawer anchor="right" open={drawerOpen} onClose={() => dispatch(toggleDrawer(false))}>
              <DrawerList />
            </Drawer>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
