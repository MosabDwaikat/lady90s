import React from "react";
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchResults from "./SearchResults";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { SearchInput, setSearchInput } from "../../../../store/Search/SearchSlice";
import { useNavigate } from "react-router-dom";

const SearchDrawerContent = () => {
  const searchInput = useAppSelector(SearchInput);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("search");
  };

  return (
    <Box width={300}>
      <Typography variant="h6" fontFamily={"inherit"} margin={"20px"}>
        ابحث عبر موقعنا
      </Typography>
      <Box width={300} padding={"20px"} borderTop={"1px solid lightgrey"} borderBottom={"1px solid lightgrey"}>
        <TextField
          value={searchInput}
          onChange={(e) => dispatch(setSearchInput(e.target.value))}
          placeholder="بحث"
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Button sx={{ minWidth: "0px" }} onClick={handleSearch}>
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              )
            }
          }}
        />
      </Box>
      <SearchResults />
    </Box>
  );
};

export default SearchDrawerContent;
