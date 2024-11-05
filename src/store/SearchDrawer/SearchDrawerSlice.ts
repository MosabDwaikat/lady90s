import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface SearchDrawerState {
  searchDrawerOpen: boolean;
}

const initialState: SearchDrawerState = {
  searchDrawerOpen: false
};

const SearchDrawerSlice = createSlice({
  name: "searchDrawer",
  initialState,
  reducers: {
    toggleSearchDrawer: (state, action: PayloadAction<boolean>) => {
      state.searchDrawerOpen = action.payload;
    }
  }
});
export const SearchDrawerOpen = (state: RootState) => state.searchDrawer.searchDrawerOpen;
export const { toggleSearchDrawer } = SearchDrawerSlice.actions;
export default SearchDrawerSlice.reducer;
