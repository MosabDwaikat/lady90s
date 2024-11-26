import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface SearchState {
  searchInput: string;
  keywordChanged: boolean;
}

const initialState: SearchState = {
  searchInput: "",
  keywordChanged: false
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    resetDrawerOnNavigate: (state) => {
      state.searchInput = "";
      state.keywordChanged = true;
    },
    setNewSearchLoaded: (state) => {
      state.keywordChanged = false;
    }
  }
});
export const SearchInput = (state: RootState) => state.search.searchInput;
export const KeywordChanged = (state: RootState) => state.search.keywordChanged;
export const { setSearchInput, resetDrawerOnNavigate, setNewSearchLoaded } = SearchSlice.actions;
export default SearchSlice.reducer;
