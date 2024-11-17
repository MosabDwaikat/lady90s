import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import CartProduct from "./CartProduct";
import Product from "../../../../types/product";
import { useAppSelector } from "../../../../store/hooks";
import { CartItems } from "../../../../store/Cart/CartSlice";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import useStyles from "./index.styles";

const CartDrawerContent = () => {
  const products: Product[] = useAppSelector(CartItems);
  const navigate = useNavigate();
  const { classes } = useStyles();

  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    navigate(target.name);
  };
  const calculateSum = () => {
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  };

  return (
    <Box className={classes.mainPanel}>
      <Box width={350}>
        <Typography className={classes.cartTitle}>عربة المشتريات</Typography>
        <Box className={classes.productsPanel}>
          {products.map((product, index) => (
            <Box key={product.id}>
              <CartProduct product={product} />
              {index < products.length - 1 && <Divider sx={{ marginY: "5px" }} />}
            </Box>
          ))}
          {products.length === 0 && (
            <Box className={classes.emptyCart}>
              <RemoveShoppingCartOutlinedIcon sx={{ width: "55px", height: "55px" }} />
              <Typography variant="h3">عربة المشتريات فارغة</Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box className={classes.btnsPanel}>
        {products.length !== 0 && (
          <Box className={classes.summation}>
            <Typography>المجموع الفرعي :</Typography>
            <Typography>{calculateSum() + " شيكل"}</Typography>
          </Box>
        )}
        <Button className={classes.cartBtn} name="cart" onClick={handleClick}>
          رؤية العربة
        </Button>
        <Button className={classes.checkoutBtn} name="checkout" onClick={handleClick}>
          إستكمال الطلب
        </Button>
      </Box>
    </Box>
  );
};

export default CartDrawerContent;
