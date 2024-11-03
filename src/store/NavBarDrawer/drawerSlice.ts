import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface DrawerState {
  drawerOpen: boolean;
}

const initialState: DrawerState = {
  drawerOpen: false
};

const DrawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.drawerOpen = action.payload;
    }
  }
});
export const DrawerOpen = (state: RootState) => state.drawer.drawerOpen;
export const { toggleDrawer } = DrawerSlice.actions;
export default DrawerSlice.reducer;
