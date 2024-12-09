import { Box, Button, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import React from "react";
import { useAppDispatch } from "../../../../../store/hooks";
import { deleteItemFromCart } from "../../../../../store/Cart/CartSlice";
import { CartItemType } from "../../../../../types/cartItemType";
import Counter from "../../../../Counter";

const CartProduct = ({ item }: { item: CartItemType }) => {
  const dispatch = useAppDispatch();

  return (
    <Box display={"flex"}>
      <Box width={"120px"} minWidth={"120px"} marginLeft={"20px"}>
        <img src={item.product.imgs[0]} alt="" width={"100%"} />
      </Box>
      <Box>
        <Typography variant="body1">{item.product.title}</Typography>
        <Typography variant="body2">{item.product.price + " شيكل"}</Typography>
        <Counter item={item} />
        <Button
          sx={{ padding: 0, minWidth: 0, marginRight: "10px" }}
          color="primary"
          onClick={() => dispatch(deleteItemFromCart(item))}
        >
          <DeleteOutlinedIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default CartProduct;
