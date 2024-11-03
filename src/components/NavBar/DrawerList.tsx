import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { toggleDrawer } from "../../store/NavBarDrawer/drawerSlice";
import pages from "../../assets/pages";

const DrawerList = () => {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => dispatch(toggleDrawer(false))}>
      <List>
        {pages.map((page) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText sx={{ textAlign: "right" }} primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerList;
