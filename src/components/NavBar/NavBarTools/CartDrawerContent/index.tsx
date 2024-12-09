import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import CartProduct from "./CartProduct";
import { useAppSelector } from "../../../../store/hooks";
import { CartItems } from "../../../../store/Cart/CartSlice";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import useStyles from "./index.styles";
import { CartItemType } from "../../../../types/cartItemType";

const CartDrawerContent = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const items: CartItemType[] = useAppSelector(CartItems);
  const navigate = useNavigate();
  const { classes } = useStyles();

  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    closeDrawer();
    navigate(target.name);
  };
  const calculateSum = () => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  return (
    <Box className={classes.mainPanel}>
      <Box className={classes.bodyPanel}>
        <Typography className={classes.cartTitle}>عربة المشتريات</Typography>
        <Box className={classes.productsPanel}>
          {items.map((item, index) => (
            <Box key={item.product.id}>
              <CartProduct item={item} />
              {index < items.length - 1 && <Divider sx={{ marginY: "5px" }} />}
            </Box>
          ))}
          {items.length === 0 && (
            <Box className={classes.emptyCart}>
              <RemoveShoppingCartOutlinedIcon sx={{ width: "55px", height: "55px" }} />
              <Typography variant="h3">عربة المشتريات فارغة</Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box className={classes.btnsPanel}>
        {items.length !== 0 && (
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
