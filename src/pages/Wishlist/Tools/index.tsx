import { Box, Button } from "@mui/material";
import React, { Dispatch, SetStateAction, SyntheticEvent } from "react";
import useStyles from "./index.styles";
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt, TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TbListDetails } from "react-icons/tb";
import { PiRowsFill } from "react-icons/pi";
import { ViewType } from "../../../hooks/useResponsiveView";

const Tools = ({ setView }: { setView: Dispatch<SetStateAction<ViewType>> }) => {
  const { classes } = useStyles();

  const handleViewChange = (event: SyntheticEvent<HTMLButtonElement>) => {
    const target = event.currentTarget as HTMLButtonElement;
    setView(target.name as ViewType);
  };

  return (
    <Box>
      <Button
        name={ViewType.details}
        className={classes.gridViewBtn}
        sx={{ display: { xs: "inline-flex" } }}
        onClick={handleViewChange}
      >
        <TbListDetails />
      </Button>
      <Button
        name={ViewType.view1}
        className={classes.gridViewBtn}
        sx={{ display: { xs: "inline-flex", md: "none" } }}
        onClick={handleViewChange}
      >
        <PiRowsFill />
      </Button>
      <Button
        name={ViewType.view2}
        className={classes.gridViewBtn}
        sx={{ display: { xs: "none", sm: "inline-flex" } }}
        onClick={handleViewChange}
      >
        <TfiLayoutGrid2Alt />
      </Button>
      <Button
        name={ViewType.view3}
        className={classes.gridViewBtn}
        sx={{ display: { xs: " none", md: "inline-flex" } }}
        onClick={handleViewChange}
      >
        <TfiLayoutGrid3Alt />
      </Button>
      <Button
        name={ViewType.view4}
        className={classes.gridViewBtn}
        sx={{ display: { xs: "none", lg: "inline-flex" } }}
        onClick={handleViewChange}
      >
        <TfiLayoutGrid4Alt />
      </Button>
    </Box>
  );
};

export default Tools;
