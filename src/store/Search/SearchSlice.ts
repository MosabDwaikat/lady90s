import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface SearchState {
  searchInput: string;
  keywordChanged: boolean;
  searchDrawerOpen: boolean;
}

const initialState: SearchState = {
  searchInput: "",
  keywordChanged: false,
  searchDrawerOpen: false
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
    },
    openSearchDrawer: (state) => {
      state.searchDrawerOpen = true;
    },
    closeSearchDrawer: (state) => {
      state.searchDrawerOpen = false;
    }
  }
});
export const SearchInput = (state: RootState) => state.search.searchInput;
export const KeywordChanged = (state: RootState) => state.search.keywordChanged;
export const SearchDrawerOpen = (state: RootState) => state.search.searchDrawerOpen;
export const { setSearchInput, resetDrawerOnNavigate, setNewSearchLoaded, openSearchDrawer, closeSearchDrawer } =
  SearchSlice.actions;
export default SearchSlice.reducer;
