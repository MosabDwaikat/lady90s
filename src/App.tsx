import React, { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { fetchCartItems } from "./store/Cart/CartSlice";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
}

export default App;
