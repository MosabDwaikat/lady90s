import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Search/SearchSlice";
import CartReducer from "./Cart/CartSlice";

const store = configureStore({
  reducer: {
    search: SearchReducer,
    cart: CartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
