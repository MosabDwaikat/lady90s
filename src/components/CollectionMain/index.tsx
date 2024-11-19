import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import CollectionTools from "./CollectionTools";
import useStyles from "./index.styles";
import Browse from "../Browse";
import CollectionSidebar from "./CollectionSidebar";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CollectionContnet, PriceFilter, setCollectionContnet } from "../../store/Collection/CollectionSlice";
import collectionContentProvider from "../../utils/collectionContentProvider";

export enum ViewType {
  details = "details",
  view1 = "view1",
  view2 = "view2",
  view3 = "view3",
  view4 = "view4"
}
const ViewTypeValue = {
  [ViewType.details]: 12,
  [ViewType.view1]: 12,
  [ViewType.view2]: 6,
  [ViewType.view3]: 4,
  [ViewType.view4]: 3
};

const CollectionMain = ({ target }: { target: string }) => {
  const [view, setView] = useState<ViewType>(ViewType.view4);
  const { classes } = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useAppDispatch();
  const content = useAppSelector(CollectionContnet);
  const priceFilter = useAppSelector(PriceFilter);

  useEffect(() => {
    if (isSmDown && (view === ViewType.view2 || view === ViewType.view3 || view === ViewType.view4))
      setView(ViewType.view1);
    if (isMdDown && (view === ViewType.view3 || view === ViewType.view4)) setView(ViewType.view2);
    if (isLgDown && view === ViewType.view4) setView(ViewType.view3);
    if (isMdUp && view === ViewType.view1) setView(ViewType.view2);
  }, [isMdUp, isSmDown, isMdDown, isLgDown, view]);

  useEffect(() => {
    dispatch(setCollectionContnet(collectionContentProvider(target)));
  }, [target]);

  return (
    <Box className={classes.container}>
      <Box className={classes.collectionBody}>
        <CollectionTools setView={setView} />
        <Box className={classes.collectionMain}>
          <Box className={classes.collectionSidebar}>
            <CollectionSidebar />
          </Box>
          <Box className={classes.browserContainer}>
            <Browse
              content={content.filter((item) => item.price >= priceFilter[0] && item.price <= priceFilter[1])}
              noTitle
              gridSize={ViewTypeValue[view]}
              details={view === ViewType.details}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionMain;
