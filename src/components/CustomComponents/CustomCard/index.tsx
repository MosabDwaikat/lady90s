import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomCardTools from "./CustomCardTools";
import useStyles from "./index.styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";

export interface CustomCardProps {
  content: {
    title: string;
    price: number;
    image: string;
    sales: number;
  };
  details?: boolean;
}

const CustomCard = ({ details, content }: CustomCardProps) => {
  const { classes } = useStyles();

  const handleQuickView = () => {
    // Handle quick view logic
    alert("implement Quick view");
  };

  const handleCart = () => {
    // Handle adding to cart logic
    alert("implement add to cart");
  };

  return (
    <Box className={details ? classes.cardContainerDetailsView : classes.cardContainer}>
      <Box className={details ? classes.cardImgContainerDetailsView : classes.cardImgContainer}>
        <img
          loading="lazy"
          className={details ? classes.cardImgDetailsView : classes.cardImg}
          src={content.image}
          alt=""
        />
        <img
          className={details ? classes.imgHoverDetailsView : classes.imgHover}
          src="https://lady90s.com/cdn/shop/files/851298D9-F13E-40C4-99DB-C035D07600D0.jpg?v=1730208823&width=500"
          alt=""
          loading="lazy"
        />
        <CustomCardTools detailsView={details} />
      </Box>
      <Box className={details ? classes.cardBodyDetailsView : ""}>
        <Box>
          <Typography className={classes.cardTitle}>{content.title}</Typography>
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
