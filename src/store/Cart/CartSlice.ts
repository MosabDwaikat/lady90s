import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import Product from "../../types/product";
import { getCartItemsApi } from "../../utils/getCartItemsApi";

export const fetchCartItems = createAsyncThunk("data/fetchData", async () => {
  const response = await getCartItemsApi();
  return response;
});

interface CartState {
  cartItems: Product[];
  loading: "idle" | "pending" | "succeeded" | "failed"; // 'idle', 'pending', or 'succeeded'
}

const initialState: CartState = {
  cartItems: [],
  loading: "idle" // 'idle', 'pending', or 'succeeded'
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<Product[]>) => {
      state.cartItems = action.payload;
    },
    deleteItemFromCart: (state, action: PayloadAction<Product>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },
    changeProductQuantity: (state, action: PayloadAction<Product>) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
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
