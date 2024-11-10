import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import CartProduct from "./CartProduct";
import Product from "../../../../types/product";
import { useAppSelector } from "../../../../store/hooks";
import { CartItems } from "../../../../store/Cart/CartSlice";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

const CartDrawerContent = () => {
  const products: Product[] = useAppSelector(CartItems);
  return (
    <Box width={350}>
      <Typography variant="h6" fontFamily={"inherit"} margin={"20px"}>
        عربة المشتريات
      </Typography>
      <Box width={350} padding={"20px"} borderTop={"1px solid lightgrey"} borderBottom={"1px solid lightgrey"}>
        {products.map((product, index) => (
          <Box key={product.id}>
            <CartProduct product={product} />
            {index < products.length - 1 && <Divider sx={{ marginY: "5px" }} />}
          </Box>
        ))}
        {!products.length && (
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <RemoveShoppingCartOutlinedIcon sx={{ width: "55px", height: "55px" }} />
            <Typography variant="h3">عربة المشتريات فارغة</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartDrawerContent;
