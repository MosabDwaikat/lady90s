import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomCardTools from "./CustomCardTools";
import useStyles from "./index.styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

export interface CustomCardProps {
  content: {
    id: string;
    title: string;
    price: number;
    imgs: string[];
    sales: number;
  };
  details?: boolean;
}

const CustomCard = ({ details, content }: CustomCardProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleQuickView = () => {
    // Handle quick view logic
    alert("implement Quick view");
  };

  const handleCart = () => {
    // Handle adding to cart logic
    alert("implement add to cart");
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
        <CustomCardTools detailsView={details} />
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
