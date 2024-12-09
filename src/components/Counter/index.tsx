import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import useStyles from "./index.styles";
import { useAppDispatch } from "../../store/hooks";
import { changeProductQuantity, deleteItemFromCart } from "../../store/Cart/CartSlice";
import { CartItemType } from "../../types/cartItemType";

const Counter = ({ item }: { item: CartItemType }) => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const deleteItemButton = (
    <Button
      sx={{ padding: 0, minWidth: 0, marginRight: "10px" }}
      color="primary"
      onClick={() => dispatch(deleteItemFromCart(item))}
    >
      <DeleteOutlinedIcon />
    </Button>
  );
  const incrementButton = (
    <Button
      sx={{ paddingX: 0, minWidth: 0, marginLeft: "10px" }}
      onClick={() => dispatch(changeProductQuantity({ ...item, quantity: item.quantity + 1 }))}
    >
      <AddOutlinedIcon />
    </Button>
  );
  const decrementButton = (
    <Button
      sx={{ paddingX: 0, minWidth: 0, marginRight: "10px" }}
      onClick={() => dispatch(changeProductQuantity({ ...item, quantity: item.quantity - 1 }))}
    >
      <RemoveOutlinedIcon />
    </Button>
  );

  return (
    <Box className={classes.count}>
      {item.quantity === 1 ? deleteItemButton : decrementButton}
      <Typography variant="body1" fontWeight={700}>
        {item.quantity}
      </Typography>
      {incrementButton}
    </Box>
  );
};

export default Counter;
