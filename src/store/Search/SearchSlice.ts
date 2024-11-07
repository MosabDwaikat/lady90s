import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface SearchState {
  searchInput: string;
}

const initialState: SearchState = {
  searchInput: ""
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    }
  }
});
export const SearchInput = (state: RootState) => state.search.searchInput;
export const { setSearchInput } = SearchSlice.actions;
export default SearchSlice.reducer;
