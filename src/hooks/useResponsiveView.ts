import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

export enum ViewType {
  details = "details",
  view1 = "view1",
  view2 = "view2",
  view3 = "view3",
  view4 = "view4"
}
export const ViewTypeValue = {
  [ViewType.details]: 12,
  [ViewType.view1]: 12,
  [ViewType.view2]: 6,
  [ViewType.view3]: 4,
  [ViewType.view4]: 3
};

const useResponsiveView = (initialview: ViewType) => {
  const [view, setView] = useState<ViewType>(initialview);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isSmDown && (view === ViewType.view2 || view === ViewType.view3 || view === ViewType.view4)) {
      setView(ViewType.view1);
    } else if (isMdDown && (view === ViewType.view3 || view === ViewType.view4)) {
      setView(ViewType.view2);
    } else if (isLgDown && view === ViewType.view4) {
      setView(ViewType.view3);
    } else if (isMdUp && view === ViewType.view1) {
      setView(ViewType.view2);
    }
  }, [isMdUp, isSmDown, isMdDown, isLgDown, view]);

  return { view, setView };
};

export default useResponsiveView;
