import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  cardTools: {
    position: "absolute",
    bottom: "5%",
    display: "flex",
    justifyContent: "center",
    direction: "rtl"
  },
  cardBtn: {
    backgroundColor: "white",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    minWidth: 0,
    minHeight: 0,
    padding: 0,
    cursor: "pointer",
    margin: "2px",
    "&:hover": {
      backgroundColor: "rgb(72, 72, 72)",
      color: "rgb(218, 218, 218)"
    }
  }
}));

export default useStyles;
