import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { useAppDispatch } from "./store/hooks";
import { fetchCartItems } from "./store/Cart/CartSlice";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Bags from "./components/Bags";
import "./App.scss";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Categories />
      <Bags />
    </div>
  );
}

export default App;
