import React, { useEffect } from "react";

import "./App.scss";
import NavBar from "./components/NavBar";
import { useAppDispatch } from "./store/hooks";
import { fetchCartItems } from "./store/Cart/CartSlice";
import Hero from "./components/Hero";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
