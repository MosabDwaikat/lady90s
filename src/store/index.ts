import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Search/SearchSlice";
import CartReducer from "./Cart/CartSlice";
import CollectionReducer from "./Collection/CollectionSlice";
import WishlistReducer from "./Wishlist/WishlistSlice";

const store = configureStore({
  reducer: {
    search: SearchReducer,
    cart: CartReducer,
    collection: CollectionReducer,
    wishlist: WishlistReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
