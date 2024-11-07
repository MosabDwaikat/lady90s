import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../../store/hooks";
import { SearchInput } from "../../../../store/Search/SearchSlice";
import { Box, Skeleton } from "@mui/material";
import { searchDummyApi } from "../../../../utils/searchDummyApi";
import { SearchResult } from "../../../../types/searchResult";

const SearchResults = () => {
  const searchInput = useAppSelector(SearchInput);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const latestSearchInputRef = useRef<string | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (!searchInput) {
      setSearchResults([]);
      setLoading(false);
      return;
    }
    latestSearchInputRef.current = searchInput;
    timeoutRef.current = setTimeout(() => {
      setLoading(true);
      searchDummyApi(searchInput).then((searchResults) => {
        if (latestSearchInputRef.current === searchInput) {
          if (searchResults.length > 0) {
            setSearchResults(searchResults);
          } else {
            setSearchResults([{ id: 0, title: "invalid search input", description: "please try again" }]);
          }
          setLoading(false);
        }
      });
    }, 1000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchInput]);

  return (
    <Box>
      {loading && (
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          padding={"20px"}
          height={"300px"}
        >
          <Skeleton variant="rectangular" width={260} height={80} />
          <Skeleton variant="rectangular" width={260} height={80} />
          <Skeleton variant="rectangular" width={260} height={80} />
        </Box>
      )}
      {searchResults.length > 0 &&
        !loading &&
        searchInput &&
        searchResults.map((result, index) => (
          <Box key={index} display={"flex"} flexDirection={"column"} padding={"20px"}>
            <Box>{result.title}</Box>
            <Box>{result.description}</Box>
          </Box>
        ))}
    </Box>
  );
};

export default SearchResults;
