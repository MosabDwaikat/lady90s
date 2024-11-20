import React from "react";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import SliderSection from "../../components/SliderSection";
import Contact from "../../components/Contact";
import SliderSectionTabs from "../../components/SliderSectionTabs";
import Brands from "../../components/Brands";
import Browse from "../../components/Browse";
import bags from "../../staticData/bags";
import newlyArrived from "../../staticData/newlyArrived";
import packages from "../../staticData/packages";
import common from "../../staticData/common";
import tabs from "../../staticData/tabs";
import { Box } from "@mui/material";
import cards from "../../staticData/cards";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Categories />
      <SliderSection title="حقائب سيدات المجتمع" content={bags} />
      <SliderSection title="وصلنا حديثاً" content={newlyArrived} />
      <Contact />
      <SliderSection title="بكيجات" content={packages} />
      <SliderSection title="الأكثر شيوعاً" content={common} navLink="common" />
      <SliderSectionTabs title="تسوق حسب البراند" content={tabs} />
      <Brands />
      <Browse content={cards} />
    </Box>
  );
};

export default Home;
