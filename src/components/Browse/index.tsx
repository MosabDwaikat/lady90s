import React, { useState } from "react";
import useStyles from "./index.styles";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import cards from "../../staticData/cards";
import CustomCard from "../CustomComponents/CustomCard";
import Decoration from "../../assets/icons/decoration";

const Browse = () => {
  const { classes } = useStyles();
  const [visibleCount, setVisibleCount] = useState(16);

  const loadMore = () => {
    setVisibleCount((prevCount) => (prevCount + 16 <= cards.length ? prevCount + 16 : cards.length));
  };

  return (
    <Box className={classes.sectionContainer}>
      <Box className={classes.sectionHeaderContainer}>
        <Typography className={classes.sectionHeaderTitle} variant="body1">
          تصفح كل ما لدينا من حقائب
        </Typography>
        <Decoration />
      </Box>
      <Grid container justifyContent={"center"} spacing={2}>
        {cards.slice(0, visibleCount).map((card, index) => (
          <Grid key={index} size={{ xs: 6, md: 3 }}>
            <CustomCard content={card} />
          </Grid>
        ))}
      </Grid>

      <Box className={classes.loadMorePanel} mt={2}>
        <Typography>{"لقد شاهدت " + visibleCount + " من إجمالي " + cards.length + " منتج"}</Typography>
        <LinearProgress
          className={classes.progressBar}
          variant="determinate"
          value={(visibleCount / cards.length) * 100}
        />
        {visibleCount < cards.length && (
          <Button className={classes.loadMoreButton} variant="contained" onClick={loadMore}>
            تحميل المزيد
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Browse;
