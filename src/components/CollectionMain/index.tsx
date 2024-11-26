import { Box, Button, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import CollectionTools from "./CollectionTools";
import useStyles from "./index.styles";
import Browse from "../Browse";
import CollectionSidebar from "./CollectionSidebar";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CollectionContnet, PriceFilter, setCollectionContnet } from "../../store/Collection/CollectionSlice";
import collectionContentProvider from "../../utils/collectionContentProvider";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import useResponsiveView, { ViewType, ViewTypeValue } from "../../hooks/useResponsiveView";

const CollectionMain = ({ target }: { target: string }) => {
  const [sidebarDrawerOpen, setSidebarDrawerOpen] = useState(false);
  const { classes } = useStyles();
  const { view, setView } = useResponsiveView(ViewType.view4);
  const dispatch = useAppDispatch();
  const content = useAppSelector(CollectionContnet);
  const priceFilter = useAppSelector(PriceFilter);

  useEffect(() => {
    dispatch(setCollectionContnet(collectionContentProvider(target)));
  }, [target]);

  return (
    <Box className={classes.container}>
      <Box className={classes.collectionBody}>
        <CollectionTools setView={setView} />
        <Box className={classes.collectionMain}>
          <Box className={classes.collectionSidebar} sx={{ display: { xs: "none", lg: "block" } }}>
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
      <Box className={classes.drawerContainer} sx={{ display: { xs: "flex", lg: "none" } }}>
        <Drawer
          sx={{ display: { xs: "flex", lg: "none" } }}
          anchor="right"
          open={sidebarDrawerOpen}
          onClose={() => setSidebarDrawerOpen(false)}
        >
          <Box width={300}>
            <CollectionSidebar />
          </Box>
        </Drawer>
        <Button className={classes.sidebarDrawerBtn} onClick={() => setSidebarDrawerOpen(true)}>
          <ViewSidebarIcon sx={{ width: "30px", height: "30px" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default CollectionMain;
