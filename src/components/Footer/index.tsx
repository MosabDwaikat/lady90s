import { Box, Button, Link, List, ListItem, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import useStyles from "./index.styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.footerContainer}>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid className={classes.footerSection} size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography className={classes.infoTitle}>من نحن ؟</Typography>
            <Typography className={classes.infoText}>
              الليدي تسعين بدأت رحلتها في منتصف عام 2020 لتتطور من مشروع بيع قطع يد ثانية بين السيدات ، الى أشهر متجر
              حقائب فاخرة في فلسطين وتكتسب ثقة وحب سيدات المجتمع الفلسطيني، الليدي تسعين ليست مجرد متجر هي قصة ملهمة لكل
              شخص عصامي مؤمن بنفسه وبقدرته.
            </Typography>
            <Box className={classes.linksContainer}>
              <Typography className={classes.linksItem}>
                {"example@email.com "}
                <EmailIcon />
              </Typography>
              <Typography className={classes.linksItem}>
                {"+970 - ( XXXX ) XXXXX "}
                <PhoneIcon />
              </Typography>
            </Box>
            <Box className={classes.followUsContainer}>
              <Typography className={classes.followUsTitle}>تابعونا على :</Typography>
              <Box className={classes.followUsItems}>
                <InstagramIcon className={classes.followUsIcon} />
                <FacebookIcon className={classes.followUsIcon} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.footerSection} size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography className={classes.shortcutsTitle}>اختصارات</Typography>
            <Box className={classes.shortcutsContainer}>
              <List>
                <ListItem className={classes.listItem}>
                  <Link className={classes.listItemLink}>النساء</Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link className={classes.listItemLink}>الرجال</Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link className={classes.listItemLink}>محافظ</Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link className={classes.listItemLink}>ساعات</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.footerSection} size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography className={classes.policiesTitle}>سياساتنا</Typography>
            <Box className={classes.policiesContainer}>
              <List>
                <ListItem className={classes.listItem}>
                  <Link className={classes.listItemLink}>سياسة إلغاء الطلب</Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link className={classes.listItemLink}>سياسة الإرجاع</Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link className={classes.listItemLink}>سياسة الشحن</Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link className={classes.listItemLink}>تواصل معنا</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.footerSection} size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography className={classes.stayPostedTitle}>ابقى على إطلاع</Typography>
            <Box>
              <Typography className={classes.stayPostedText}>
                إشترك لتصل اخر العروضات والمنتجات عبر بريدك الإلكتروني
              </Typography>
              <Box className={classes.subscribePanel}>
                <TextField fullWidth label="بريدك الإلكتروني" variant="outlined" color="secondary" />
                <Button className={classes.subscribeButton}>إشتراك</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.footerTailing}>
        <Box className={classes.footerCopyright}>
          <Typography className={classes.footerCopyrightTag + " " + classes.footerTailingText}>{"Lady90s"}</Typography>
          <Typography className={classes.footerTailingText}>Copyright all rights reserved © 2024</Typography>
        </Box>
        <Box className={classes.footerDeveloper}>
          <Typography className={classes.footerTailingText}> تصميم و تطوير </Typography>
          <Link className={classes.footerDeveloperTag + " " + classes.footerTailingText}>Mosab Dwaikat</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
