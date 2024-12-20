import React, { useState } from "react";
import { AppBar, Box, Container, Drawer, IconButton, Link, List, ListItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerList from "./DrawerList";
import NavBarLogo from "./NavBarLogo";
import NavBarTools from "./NavBarTools";
import pages from "../../staticData/pages";
// import "./index.scss";
import useStyles from "./index.styles";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { classes } = useStyles();
  const navigate = useNavigate();

  const navigatetopage = (link: string) => {
    navigate(link);
  };

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <IconButton
            sx={{ display: { xs: "flex", lg: "none" } }}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavBarLogo />
          <Box justifyContent={"center"} flex={1} sx={{ mx: 2, display: { xs: "none", lg: "flex" } }}>
            <List sx={{ display: "inline-flex", flexWrap: "wrap" }}>
              {pages.map((page, index) => (
                <ListItem key={index} sx={{ display: "list-item", width: "auto", padding: "0" }}>
                  <Link className={classes.navLink} onClick={() => navigatetopage(page.link)}>
                    {page.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          <NavBarTools />
          <Drawer
            sx={{ display: { xs: "flex", lg: "none" } }}
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <DrawerList closeDrawer={() => setDrawerOpen(false)} />
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
