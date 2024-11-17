import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import pages from "../../staticData/pages";
import { useNavigate } from "react-router-dom";

const DrawerList = () => {
  const navigate = useNavigate();
  const navigatetopage = (link: string) => {
    navigate(link);
  };
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {pages.map((page) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton onClick={() => navigatetopage(page.link)}>
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
