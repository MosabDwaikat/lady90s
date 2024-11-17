import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { useAppDispatch } from "./store/hooks";
import { fetchCartItems } from "./store/Cart/CartSlice";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import "./App.scss";
import newlyArrived from "./staticData/newlyArrived";
import SliderSection from "./components/SliderSection";
import bags from "./staticData/bags";
import Contact from "./components/Contact";
import Brands from "./components/Brands";
import packages from "./staticData/packages";
import SliderSectionTabs from "./components/SliderSectionTabs";
import common from "./staticData/common";
import tabs from "./staticData/tabs";
import Browse from "./components/Browse";
import Footer from "./components/Footer";

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
      <SliderSection title="حقائب سيدات المجتمع" content={bags} />
      <SliderSection title="وصلنا حديثاً" content={newlyArrived} />
      <Contact />
      <SliderSection title="بكيجات" content={packages} />
      <SliderSection title="الأكثر شيوعاً" content={common} navLink="common" />
      <SliderSectionTabs title="تسوق حسب البراند" content={tabs} />
      <Brands />
      <Browse />
      <Footer />
    </div>
  );
}

export default App;
