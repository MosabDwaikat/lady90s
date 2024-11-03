import { configureStore } from "@reduxjs/toolkit";
import DrawerReducer from "./NavBarDrawer/drawerSlice";

const store = configureStore({
  reducer: {
    drawer: DrawerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
