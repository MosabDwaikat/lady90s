import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useStyles from "./index.styles";

const Contact = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.contactContainer}>
      <img
        className={classes.bgImg}
        src="https://lady90s.com/cdn/shop/files/picture-2-red.png?v=1712957318&width=1296"
        alt=""
      />
      <Box className={classes.contactInfo}>
        <Typography variant="body1" className={classes.contactTitle}>
          ليدي تسعين
        </Typography>
        <Typography variant="body2" className={classes.contactText}>
          الموقع الأول للحقائب في فلسطين
        </Typography>
        <Box className={classes.contactBtns}>
          <Button className={classes.contactWhatsappBtn}>تواصل معنا عبر الواتساب</Button>
          <Button className={classes.contactInstagramBtn}>تابعنا على إنستاغرام</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
