import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TitleHero from "../../components/TitleHero";
import useStyles from "./index.styles";
import Browse from "../../components/Browse";
import Tools from "../Wishlist/Tools";
import useResponsiveView, { ViewType, ViewTypeValue } from "../../hooks/useResponsiveView";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ProductType from "../../types/productType";
import { useLoaderData, useParams } from "react-router-dom";
import { KeywordChanged, setNewSearchLoaded } from "../../store/Search/SearchSlice";
import SearchIcon from "@mui/icons-material/Search";

const LoadingSpinner = () => (
  <Box height={"100vh"}>
    <Backdrop sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  </Box>
);

const Search = () => {
  const { classes } = useStyles();
  const keywordChanged = useAppSelector(KeywordChanged);
  const dispatch = useAppDispatch();
  const { view, setView } = useResponsiveView(ViewType.details);
  const { keyword } = useParams();
  const items: ProductType[] = useLoaderData() as ProductType[];
  const searchResultsCount = items.length;

  useEffect(() => {
    dispatch(setNewSearchLoaded());
  }, [keyword]);

  if (keywordChanged) {
    return <LoadingSpinner />;
  }

  return (
    <Box>
      <TitleHero
        content={{
          title: searchResultsCount + " نتائج البحث عن:" + ` "${keyword}"`,
          img: "https://cdn.shopify.com/s/files/1/0070/7032/articles/semantic_20search_a1b16a01-9397-45c6-9dd8-1acc05c8e2ea.png?v=1729111683"
        }}
      />
      <Box className={classes.container}>
        <Box className={classes.searchBody}>
          {items.length === 0 && (
            <Box className={classes.notFound}>
              <Box>
                <SearchIcon sx={{ width: "120px", height: "120px" }} />
              </Box>
              <Typography>لم يتم العثور على منتجات مطابقة لاختيارك.</Typography>
            </Box>
          )}
          {items.length > 0 && <Tools setView={setView} />}
          <Browse content={items} noTitle gridSize={ViewTypeValue[view]} details={view === ViewType.details} />
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
