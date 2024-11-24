import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { getCartItemsApi } from "../../utils/getCartItemsApi";
import { CartItemType } from "../../types/cartItemType";

export const fetchCartItems = createAsyncThunk("data/fetchData", async () => {
  const response = await getCartItemsApi();
  return response;
});

interface CartState {
  cartItems: CartItemType[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: CartState = {
  cartItems: [],
  loading: "idle"
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItemType[]>) => {
      state.cartItems = action.payload;
    },
    deleteItemFromCart: (state, action: PayloadAction<CartItemType>) => {
      state.cartItems = state.cartItems.filter((item) => item.product.id !== action.payload.product.id);
    },
    changeProductQuantity: (state, action: PayloadAction<CartItemType>) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.product.id === action.payload.product.id ? { ...item, quantity: action.payload.quantity } : item
      );
      state.cartItems = updatedCartItems;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.loading = "failed";
      });
  }
});
export const CartItems = (state: RootState) => state.cart.cartItems;
export const CartItemsCount = (state: RootState) => state.cart.cartItems.length;
export const { setCartItems, deleteItemFromCart, changeProductQuantity } = CartSlice.actions;
export default CartSlice.reducer;
