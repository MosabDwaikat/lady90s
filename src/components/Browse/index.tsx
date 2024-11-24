import React, { useEffect, useState } from "react";
import useStyles from "./index.styles";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomCard from "../CustomComponents/CustomCard";
import Decoration from "../../assets/icons/decoration";
import ProductType from "../../types/productType";

interface BrowseProps {
  noTitle?: boolean;
  gridSize?: number;
  content: ProductType[];
  details?: boolean;
}

const Browse = ({ content, noTitle, gridSize, details }: BrowseProps) => {
  const { classes } = useStyles();
  const [visibleCount, setVisibleCount] = useState(Math.min(16, content.length));

  const loadMore = () => {
    setVisibleCount((prevCount) => (prevCount + 16 <= content.length ? prevCount + 16 : content.length));
  };
  useEffect(() => {
    setVisibleCount(Math.min(16, content.length));
  }, [content.length]);

  return (
    <Box className={classes.sectionContainer}>
      {!noTitle && (
        <Box className={classes.sectionHeaderContainer}>
          <Typography className={classes.sectionHeaderTitle} variant="body1">
            تصفح كل ما لدينا من حقائب
          </Typography>
          <Decoration />
        </Box>
      )}
      {content.length === 0 ? (
        <Box className={classes.emptyContentContainer}>
          <Typography>لا توجد أي منتجات حتى الان</Typography>
        </Box>
      ) : (
        <>
          <Grid container justifyContent={"center"} spacing={2}>
            {content.slice(0, visibleCount).map((card, index) => (
              <Grid key={index} size={gridSize || { xs: 6, md: 3 }}>
                <CustomCard content={card} details={details} />
              </Grid>
            ))}
          </Grid>

          <Box className={classes.loadMorePanel} mt={2}>
            <Typography>{"لقد شاهدت " + visibleCount + " من إجمالي " + content.length + " منتج"}</Typography>
            <LinearProgress
              className={classes.progressBar}
              variant="determinate"
              value={(visibleCount / content.length) * 100}
            />
            {visibleCount < content.length && (
              <Button className={classes.loadMoreButton} variant="contained" onClick={loadMore}>
                تحميل المزيد
              </Button>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Browse;
