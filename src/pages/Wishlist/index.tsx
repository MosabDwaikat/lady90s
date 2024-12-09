import React from "react";
import Browse from "../../components/Browse";
import { Box } from "@mui/material";
import ProductType from "../../types/productType";
import { useAppSelector } from "../../store/hooks";
import { WishlistItems } from "../../store/Wishlist/WishlistSlice";
import Tools from "./Tools";
import useStyles from "./index.styles";
import TitleHero from "../../components/TitleHero";
import useResponsiveView, { ViewType, ViewTypeValue } from "../../hooks/useResponsiveView";

const Wishlist = () => {
  const items: ProductType[] = useAppSelector(WishlistItems);
  const { view, setView } = useResponsiveView(ViewType.view4);
  const { classes } = useStyles();

  return (
    <Box>
      <TitleHero
        content={{
          title: "قائمة الامنيات",
          img: "https://stjohnnb.com/wp-content/uploads/2018/11/Wishlist.png"
        }}
      />
      <Box className={classes.container}>
        <Box className={classes.wishlistBody}>
          {items.length > 0 && <Tools setView={setView} />}
          <Browse content={items} noTitle gridSize={ViewTypeValue[view]} details={view === ViewType.details} />
        </Box>
      </Box>
    </Box>
  );
};

export default Wishlist;
