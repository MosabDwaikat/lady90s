import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import ProductType from "../../types/productType";
import getWishlistItemsApi from "../../utils/getWishlistItemsApi";

export const fetchWishlistItems = createAsyncThunk("data/fetchWishlistItems", async () => {
  const response = await getWishlistItemsApi();

  return response;
});

interface WishlistState {
  wishlistItems: ProductType[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: WishlistState = {
  wishlistItems: [],
  loading: "idle"
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistItems: (state, action: PayloadAction<ProductType[]>) => {
      state.wishlistItems = action.payload;
    },
    addItemToWishlist: (state, action: PayloadAction<ProductType>) => {
      state.wishlistItems.push(action.payload);
    },
    deleteItemFromWishlist: (state, action: PayloadAction<ProductType>) => {
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload.id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlistItems.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchWishlistItems.fulfilled, (state, action) => {
        state.wishlistItems = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchWishlistItems.rejected, (state) => {
        state.loading = "failed";
      });
  }
});
export const WishlistItems = (state: RootState) => state.wishlist.wishlistItems;
export const WishlistItemsCount = (state: RootState) => state.wishlist.wishlistItems.length;
export const { setWishlistItems, addItemToWishlist, deleteItemFromWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;
