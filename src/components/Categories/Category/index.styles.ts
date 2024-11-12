import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  categoryContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    cursor: "pointer"
  },
  categoryImgContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "50% 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  categoryImgContainerImg: {
    borderRadius: "50%",
    width: "100%",
    objectFit: "cover",
    aspectRatio: "1/1"
  },
  categoryBadge: {
    "& span": {
      transform: "translate(50%, 50%) !important"
    }
  },
  categoryTitle: {
    textAlign: "center",
    fontWeight: "600 !important"
  }
}));

export default useStyles;
