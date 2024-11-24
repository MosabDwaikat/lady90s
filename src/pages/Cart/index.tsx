import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React, { Component } from "react";
import TitleHero from "../../components/TitleHero";
import useStyles from "./index.styles";
import { CartItemType } from "../../types/cartItemType";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CartItems, deleteItemFromCart } from "../../store/Cart/CartSlice";
import Counter from "../../components/Counter";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const { classes } = useStyles();
  const items: CartItemType[] = useAppSelector(CartItems);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <TitleHero
        content={{
          title: "عربة التسوق",
          img: "https://static.vecteezy.com/system/resources/previews/031/351/721/non_2x/composition-of-black-friday-shopping-cart-with-gift-boxes-or-bags-on-dark-background-and-copy-space-concept-by-ai-generated-free-photo.jpg"
        }}
      />
      <Box className={classes.container}>
        <Box className={classes.cartContainer}>
          <Box className={classes.tableViewHeader}>
            <Typography width={"45%"}>المنتج</Typography>
            <Typography width={"15%"} marginRight={"140px"}>
              السعر
            </Typography>
            <Typography width={"25%"}>الكمية</Typography>
            <Typography width={"15%"}>المجموع الكلي</Typography>
          </Box>
          {items.map((item) => (
            <Box key={item.product.id} className={classes.tableViewRow}>
              <Box className={classes.tableViewCell}>
                <Box width={"120px"} marginLeft={"20px"}>
                  <img src={item.product.imgs[0]} alt="" width={"100%"} />
                </Box>
              </Box>
              <Box className={classes.productDetailsPanel}>
                <Box width={"45%"} className={classes.productPanel}>
                  <Typography variant="body1" className={classes.productDetailItem}>
                    {item.product.title}
                  </Typography>
                  <Button
                    sx={{ padding: 0, minWidth: 0 }}
                    className={classes.productDetailsButton}
                    color="primary"
                    onClick={() => dispatch(deleteItemFromCart(item))}
                  >
                    <DeleteOutlinedIcon />
                  </Button>
                </Box>
                <Box width={"15%"} className={classes.productDetailItem}>
                  {item.product.price + " شيكل"}
                </Box>
                <Box width={"25%"} className={classes.productDetailItem}>
                  <Counter item={item} />
                </Box>
                <Box width={"15%"} className={classes.productDetailItem}>
                  {item.product.price * item.quantity + " شيكل"}
                </Box>
              </Box>
            </Box>
          ))}

          <Box>sum</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
