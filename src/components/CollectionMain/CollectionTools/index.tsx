import React, { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt, TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TbListDetails } from "react-icons/tb";
import { PiRowsFill } from "react-icons/pi";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import useStyles from "./index.styles";
import { ViewType } from "..";
import { setSortBy, SortBy, SortByOptions } from "../../../store/Collection/CollectionSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const CollectionTools = ({ setView }: { setView: Dispatch<SetStateAction<ViewType>> }) => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector(SortBy);

  const handleSortByChange = (event: SelectChangeEvent) => {
    dispatch(setSortBy(event.target.value as SortByOptions));
  };

  const handleViewChange = (event: SyntheticEvent<HTMLButtonElement>) => {
    const target = event.currentTarget as HTMLButtonElement;
    setView(target.name as ViewType);
  };

  return (
    <Box className={classes.collectionToolsContainer}>
      <Box>
        <Button
          name={ViewType.details}
          className={classes.gridViewBtn}
          sx={{ display: { xs: "inline-flex" } }}
          onClick={handleViewChange}
        >
          <TbListDetails />
        </Button>
        <Button
          name={ViewType.view1}
          className={classes.gridViewBtn}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          onClick={handleViewChange}
        >
          <PiRowsFill />
        </Button>
        <Button
          name={ViewType.view2}
          className={classes.gridViewBtn}
          sx={{ display: { xs: "none", sm: "inline-flex" } }}
          onClick={handleViewChange}
        >
          <TfiLayoutGrid2Alt />
        </Button>
        <Button
          name={ViewType.view3}
          className={classes.gridViewBtn}
          sx={{ display: { xs: " none", md: "inline-flex" } }}
          onClick={handleViewChange}
        >
          <TfiLayoutGrid3Alt />
        </Button>
        <Button
          name={ViewType.view4}
          className={classes.gridViewBtn}
          sx={{ display: { xs: "none", lg: "inline-flex" } }}
          onClick={handleViewChange}
        >
          <TfiLayoutGrid4Alt />
        </Button>
      </Box>
      <Box className={classes.filterSelectContainer}>
        <FormControl fullWidth>
          <InputLabel id="sortBy-select-label">فلتر</InputLabel>
          <Select
            className={classes.filterSelect}
            labelId="sortBy-select-label"
            id="sortBy-select"
            value={sortBy}
            label="فلتر"
            onChange={handleSortByChange}
          >
            <MenuItem value={SortByOptions.top}>الأكثر مبيعاً</MenuItem>
            <MenuItem value={SortByOptions.alphabeticalAsc}>أبجدي من أ - ي</MenuItem>
            <MenuItem value={SortByOptions.alphabeticalDesc}>أبجدي من ي - أ</MenuItem>
            <MenuItem value={SortByOptions.priceAsc}>السعر , من الأقل إلى الأعلى</MenuItem>
            <MenuItem value={SortByOptions.priceDesc}>السعر , من الأعلى إلى الأقل</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CollectionTools;
