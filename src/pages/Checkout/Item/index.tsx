import { Badge, Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./index.styles";
import { CartItemType } from "../../../types/cartItemType";

const Item = ({ item }: { item: CartItemType }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.additionBox}>
      <Box className={classes.additionTailing}>
        <Badge
          color="primary"
          badgeContent={item.quantity}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          overlap="rectangular"
        >
          <Box className={classes.additionImgContainer}>
            <img className={classes.additionImg} src={item.product.imgs[0]} alt="" />
          </Box>
        </Badge>
      </Box>
      <Box>
        <Typography className={classes.additionDetailsText}>{item.product.title}</Typography>
        <Typography className={classes.additionDetailsText}>{item.product.price * item.quantity} شيكل</Typography>
      </Box>
    </Box>
  );
};

export default Item;
