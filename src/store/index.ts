import { configureStore } from "@reduxjs/toolkit";
import DrawerReducer from "./NavBarDrawer/drawerSlice";
import SearchDrawerReducer from "./SearchDrawer/SearchDrawerSlice";
import SearchReducer from "./SearchDrawer/SearchSlice";
import CartDrawerReducer from "./CartDrawer/CartDrawerSlice";
const store = configureStore({
  reducer: {
    drawer: DrawerReducer,
    searchDrawer: SearchDrawerReducer,
    search: SearchReducer,
    cartDrawer: CartDrawerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
