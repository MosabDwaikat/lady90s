import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface CartDrawerState {
  cartDrawerOpen: boolean;
}

const initialState: CartDrawerState = {
  cartDrawerOpen: false
};

const CartDrawerSlice = createSlice({
  name: "cartDrawer",
  initialState,
  reducers: {
    toggleCartDrawer: (state, action: PayloadAction<boolean>) => {
      state.cartDrawerOpen = action.payload;
    }
  }
});
export const CartDrawerOpen = (state: RootState) => state.cartDrawer.cartDrawerOpen;
export const { toggleCartDrawer } = CartDrawerSlice.actions;
export default CartDrawerSlice.reducer;
