import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import pages from "../../staticData/pages";

const DrawerList = () => {
  return (
    <Box sx={{ width: 250 }} role="presentation">
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
