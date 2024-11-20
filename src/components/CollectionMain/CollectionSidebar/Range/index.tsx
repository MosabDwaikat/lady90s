import { Box, Button, createTheme, Slider, ThemeProvider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./index.styles";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { PriceFilter, selectPriceRange, setPriceFilter } from "../../../../store/Collection/CollectionSlice";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "rgb(220, 178, 123)"
    }
  }
});

const Range = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const [minPrice, maxPrice] = useAppSelector(selectPriceRange);
  const priceFilter = useAppSelector(PriceFilter);
  const [value, setValue] = useState<number[]>(priceFilter);

  useEffect(() => {
    setValue(priceFilter);
  }, [priceFilter]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const filterByPrice = () => {
    dispatch(setPriceFilter(value));
  };

  return (
    <Box className={classes.root}>
      <ThemeProvider theme={theme}>
        <Slider
          min={minPrice}
          max={maxPrice}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
          marks={[
            { value: minPrice, label: minPrice },
            { value: maxPrice, label: maxPrice }
          ]}
          color="primary"
        />
      </ThemeProvider>
      <Typography>{`السعر: ${value[0]} - ${value[1]}`}</Typography>
      <Button className={classes.filterBtn} onClick={filterByPrice}>
        فلتر
      </Button>
    </Box>
  );
};

export default Range;
