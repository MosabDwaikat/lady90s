import { Box, Button, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import React from "react";
import Product from "../../../../../types/product";
import { useAppDispatch } from "../../../../../store/hooks";
import { changeProductQuantity, deleteItemFromCart } from "../../../../../store/Cart/CartSlice";

const CartProduct = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const deleteItemButton = (
    <Button
      sx={{ padding: 0, minWidth: 0, marginRight: "10px" }}
      color="primary"
      onClick={() => dispatch(deleteItemFromCart(product))}
    >
      <DeleteOutlinedIcon />
    </Button>
  );
  const incrementButton = (
    <Button
      sx={{ paddingX: 0, minWidth: 0, marginLeft: "10px" }}
      onClick={() => dispatch(changeProductQuantity({ ...product, quantity: product.quantity + 1 }))}
    >
      <AddOutlinedIcon />
    </Button>
  );
  const decrementButton = (
    <Button
      sx={{ paddingX: 0, minWidth: 0, marginRight: "10px" }}
      onClick={() => dispatch(changeProductQuantity({ ...product, quantity: product.quantity - 1 }))}
    >
      <RemoveOutlinedIcon />
    </Button>
  );

  return (
    <Box display={"flex"}>
      <Box width={"120px"} marginLeft={"20px"}>
        <img src={product.image} alt="" width={"100%"} />
      </Box>
      <Box>
        <Typography variant="body1">{product.name}</Typography>
        <Typography variant="body2">{product.price}</Typography>
        <Box
          width={"120px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          display={"flex"}
          border={"1px solid"}
          borderRadius={"60px"}
          marginY={"15px"}
        >
          {product.quantity === 1 ? deleteItemButton : decrementButton}
          <Typography variant="body1" fontWeight={700}>
            {product.quantity}
          </Typography>
          {incrementButton}
        </Box>
        {deleteItemButton}
      </Box>
    </Box>
  );
};

export default CartProduct;
