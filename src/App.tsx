import React, { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { fetchCartItems } from "./store/Cart/CartSlice";
import AppLayout from "./components/AppLayout";
import ScrollToTop from "./scrollToTop";
import { fetchWishlistItems } from "./store/Wishlist/WishlistSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCartItems());
    dispatch(fetchWishlistItems());
  }, []);

  return (
    <>
      <ScrollToTop />
      <AppLayout />
    </>
  );
}

export default App;
