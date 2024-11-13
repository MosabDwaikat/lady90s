import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  slideBox: {
    cursor: "pointer",
    height: "200px",
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center"
  },
  brandImage: {
    width: "100%",
    objectFit: "cover"
  }
}));
export default useStyles;
