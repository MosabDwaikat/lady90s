import { Backdrop, Box } from "@mui/material";
import React from "react";
import ImagesPreview from "../../components/ImagesPreview";
import useStyles from "./index.styles";
import { useLoaderData } from "react-router-dom";
import ProductType from "../../types/productType";
import ProductDetails from "../../components/ProductDetails";
import ReturnPolicyPopup from "../../components/ReturnPolicy";
import SliderSection from "../../components/SliderSection";
import bags from "../../staticData/bags";

const Product = () => {
  const { classes } = useStyles();
  const product = useLoaderData() as ProductType;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };
  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.productContainer}>
        <Box className={classes.imagesPreviewContainer}>
          <ImagesPreview imgs={product.imgs} />
        </Box>
        <Box className={classes.productDetailsContainer}>
          <ProductDetails title={product.title} price={product.price} handleReturnPolicyOpen={handleOpen} />
        </Box>
      </Box>
      <Box className={classes.slidersContainer}>
        <SliderSection title="قد يعجبك أيضاً " content={bags} />
        <SliderSection title="شاهدت مسبقاً" content={bags} />
      </Box>
      <Box>
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={open}
          onClick={handleClose}
        >
          <ReturnPolicyPopup />
        </Backdrop>
      </Box>
    </Box>
  );
};

export default Product;
