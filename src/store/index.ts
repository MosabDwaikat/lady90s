import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Search/SearchSlice";
import CartReducer from "./Cart/CartSlice";
import CollectionReducer from "./Collection/CollectionSlice";

const store = configureStore({
  reducer: {
    search: SearchReducer,
    cart: CartReducer,
    collection: CollectionReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
