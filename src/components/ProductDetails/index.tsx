import { Box, Checkbox, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./index.styles";
import Wrapping from "../../assets/images/wrapping.png";
import Gift from "../../assets/images/gift.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Tools from "./Tools";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ProductType from "../../types/productType";

interface ProductDetailsProps {
  product: ProductType;
  handleReturnPolicyOpen: () => void;
}

const ProductDetails = ({ product, handleReturnPolicyOpen }: ProductDetailsProps) => {
  const { classes } = useStyles();
  const [wrapping, setWrapping] = useState(false);
  const [gift, setGift] = useState(false);
  const [notes, setNotes] = useState("");

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.ariaLabel === "wrapping") setWrapping(event.target.checked);
    if (event.target.ariaLabel === "gift") setGift(event.target.checked);
  };

  return (
    <Box>
      <Typography className={classes.productTitle}>{product.title}</Typography>
      <Typography className={classes.productPriceTag}>السعر : </Typography>
      <Typography className={classes.productPrice}>{product.price + " شيكل"}</Typography>
      <Box className={classes.additionBox} onClick={() => setWrapping(!wrapping)}>
        <Box>
          <Typography className={classes.additionDetailsText}>تغليف شفاف مع شبرة</Typography>
          <Typography className={classes.additionDetailsText}>5.00 شيكل</Typography>
        </Box>
        <Box className={classes.additionTailing}>
          <Checkbox checked={wrapping} onChange={handleChange} inputProps={{ "aria-label": "wrapping" }} />
          <Box className={classes.additionImgContainer}>
            <img className={classes.additionImg} src={Wrapping} alt="" />
          </Box>
        </Box>
      </Box>
      <Box className={classes.additionBox} onClick={() => setGift(!gift)}>
        <Box>
          <Typography className={classes.additionDetailsText}>
            تغليف ورقي مع شبرة من 10-25 شيقل حسب عدد القطع
          </Typography>
          <Typography className={classes.additionDetailsText}>15.00 شيكل</Typography>
        </Box>
        <Box className={classes.additionTailing}>
          <Checkbox checked={gift} onChange={handleChange} inputProps={{ "aria-label": "gift" }} />
          <Box className={classes.additionImgContainer}>
            <img className={classes.additionImg} src={Gift} alt="" />
          </Box>
        </Box>
      </Box>
      <Box className={classes.notesContainer}>
        <Typography className={classes.notestext}>في حال لديك ملاحظات خاصة للبائع</Typography>
        <TextField
          label="ملاحظات"
          multiline
          rows={4}
          value={notes}
          onChange={handleNotesChange}
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box className={classes.btnsContainer}>
        <Tools product={product} />
      </Box>
      <Box className={classes.linksContainer}>
        <Typography onClick={handleReturnPolicyOpen} className={classes.link}>
          الشحن والإرجاع
        </Typography>
        <Typography className={classes.link}>إسأل سؤال</Typography>
      </Box>
      <Box className={classes.iconsContainer}>
        <Tooltip title="مشاركة عبر الفيسبوك" placement="top" arrow>
          <FacebookIcon className={classes.icon} />
        </Tooltip>
        <Tooltip title="مشاركة عبر X" placement="top" arrow>
          <XIcon className={classes.icon} />
        </Tooltip>
        <Tooltip title="مشاركة عبر تلغرام" placement="top" arrow>
          <TelegramIcon className={classes.icon} />
        </Tooltip>
        <Tooltip title="مشاركة على الواتس اب" placement="top" arrow>
          <WhatsAppIcon className={classes.icon} />
        </Tooltip>
      </Box>
      <Box className={classes.shippingContainer}>
        <LocalShippingIcon />
        <Typography className={classes.shippingText}> الشحن خلال 3 - 4 أيام عمل </Typography>
      </Box>
      <Box className={classes.shippingContainer}>
        <WhatshotIcon />
        <Typography className={classes.shippingText}> 18 بيعت في اخر 24 ساعة</Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
