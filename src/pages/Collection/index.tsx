import React from "react";
import Shortcuts from "../../components/Shortcuts";
import { Box } from "@mui/material";
import TitleHero from "../../components/TitleHero";
import CollectionMain from "../../components/CollectionMain";

interface CollectionProps {
  targetURL: string;
  info: {
    title: string;
    bgImg: string;
  };
}

const Collection = ({ targetURL, info }: CollectionProps) => {
  return (
    <Box>
      <TitleHero content={{ title: info.title, img: info.bgImg }} />
      <Shortcuts />
      <CollectionMain target={targetURL} />
    </Box>
  );
};

export default Collection;
