import { makeStyles } from "tss-react/mui";
interface StyleProps {
  panelHeight: number;
}

const useStyles = makeStyles<StyleProps>()((theme, { panelHeight }) => ({
  panel: {
    flex: 1,
    height: panelHeight,
    direction: "ltr",
    display: "flex",
    alignItems: "flex-start",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      height: panelHeight + 0.3 * panelHeight
    }
  },
  viewedImgContainer: {
    width: "84%",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    marginRight: "10px",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      marginRight: "0px",
      marginBottom: "10px"
    }
  },
  viewedImgBase: {
    width: "100%",
    zIndex: "1"
  },
  viewedImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0"
  },
  imgsContainer: {
    width: "15%",
    height: "100%",
    overflow: "scroll",
    overscrollBehaviorY: "contain",
    display: "flex",
    flexDirection: "column",
    "&::-webkit-scrollbar": {
      display: "none"
    },
    [theme.breakpoints.down("lg")]: {
      flexDirection: "row",
      width: "100%",
      height: "20%"
    }
  },
  thumbImg: {
    width: "100%",
    opacity: "0.5",
    margin: "2px 0 2px 0",
    [theme.breakpoints.down("lg")]: {
      margin: "0 2px 0 2px "
    }
  },
  active: {
    opacity: "1"
  }
}));
export default useStyles;
