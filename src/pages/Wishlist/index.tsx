import React, { useEffect, useState } from "react";
import Browse from "../../components/Browse";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ProductType from "../../types/productType";
import { useAppSelector } from "../../store/hooks";
import { WishlistItems } from "../../store/Wishlist/WishlistSlice";
import { ViewType, ViewTypeValue } from "../../components/CollectionMain";
import Tools from "./Tools";
import useStyles from "./index.styles";

const Wishlist = () => {
  const items: ProductType[] = useAppSelector(WishlistItems);
  const [view, setView] = useState<ViewType>(ViewType.view4);
  const { classes } = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isSmDown && (view === ViewType.view2 || view === ViewType.view3 || view === ViewType.view4))
      setView(ViewType.view1);
    if (isMdDown && (view === ViewType.view3 || view === ViewType.view4)) setView(ViewType.view2);
    if (isLgDown && view === ViewType.view4) setView(ViewType.view3);
    if (isMdUp && view === ViewType.view1) setView(ViewType.view2);
  }, [isMdUp, isSmDown, isMdDown, isLgDown, view]);

  return (
    <Box className={classes.container}>
      <Box className={classes.wishlistBody}>
        {items.length > 0 && <Tools setView={setView} />}
        <Browse content={items} noTitle gridSize={ViewTypeValue[view]} details={view === ViewType.details} />
      </Box>
    </Box>
  );
};

export default Wishlist;
