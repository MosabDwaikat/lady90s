import { Box, Link, List, ListItem, Typography } from "@mui/material";
import React, { SyntheticEvent } from "react";
import useStyles from "./index.styles";
import Range from "./Range";
import { useNavigate } from "react-router-dom";

const CollectionSidebar = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(e.currentTarget.pathname);
  };

  return (
    <Box className={classes.container}>
      <Box>
        <Typography className={classes.sidebarSectionTitle}>الأقسام</Typography>
        <Box className={classes.devider} />
        <List>
          <ListItem>
            <Link onClick={handleNavigate} href="/women" className={classes.sidebarLink}>
              النساء
            </Link>
          </ListItem>
          <ListItem>
            <Link onClick={handleNavigate} href="/men" className={classes.sidebarLink}>
              الرجال
            </Link>
          </ListItem>
          <ListItem>
            <Link onClick={handleNavigate} href="/wallets" className={classes.sidebarLink}>
              محافظ
            </Link>
          </ListItem>
          <ListItem>
            <Link onClick={handleNavigate} href="/watches" className={classes.sidebarLink}>
              ساعات
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography className={classes.sidebarSectionTitle}>السعر</Typography>
        <Box className={classes.devider} />
        <Range />
      </Box>
    </Box>
  );
};

export default CollectionSidebar;
