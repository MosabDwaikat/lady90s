import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomCardTools from "./CustomCardTools";
import useStyles from "./index.styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import ProductType from "../../../types/productType";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addItemToCart } from "../../../store/Cart/CartSlice";

export interface CustomCardProps {
  content: ProductType;
  details?: boolean;
}

const CustomCard = ({ details, content }: CustomCardProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleQuickView = () => {
    // Handle quick view logic
    alert("implement Quick view");
  };

  const handleCart = () => {
    dispatch(addItemToCart({ product: content, quantity: 1 }));
  };

  const handleNavigate = () => {
    navigate("/product/" + content.id);
  };

  return (
    <Box className={details ? classes.cardContainerDetailsView : classes.cardContainer}>
      <Box className={details ? classes.cardImgContainerDetailsView : classes.cardImgContainer}>
        <img
          loading="lazy"
          onClick={handleNavigate}
          className={details ? classes.cardImgDetailsView : classes.cardImg}
          src={content.imgs[0]}
          alt=""
        />
        <img
          onClick={handleNavigate}
          className={details ? classes.imgHoverDetailsView : classes.imgHover}
          src={content.imgs[1]}
          alt=""
          loading="lazy"
        />
        <CustomCardTools detailsView={details} handleCart={handleCart} content={content} />
      </Box>
      <Box className={details ? classes.cardBodyDetailsView : ""}>
        <Box>
          <Typography onClick={handleNavigate} className={classes.cardTitle}>
            {content.title}
          </Typography>
          <Typography className={classes.cardPrice}>{`${content.price} شيكل`} </Typography>
        </Box>
        {details && (
          <Box className={classes.btnsPanelDetailsView}>
            <Button className={classes.btnDetailsView} onClick={handleQuickView}>
              <span className="btn-text">رؤية سريعة</span>
              <span className="btn-icon">
                <VisibilityIcon />
              </span>
            </Button>
            <Button className={classes.btnDetailsView + " " + classes.btnFilledDetailsView} onClick={handleCart}>
              <span className="btn-text">تسوق سريع</span>
              <span className="btn-icon">
                <ShoppingCartIcon />
              </span>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CustomCard;
