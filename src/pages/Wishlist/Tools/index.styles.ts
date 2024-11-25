import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  gridViewBtn: {
    border: "1px solid black",
    padding: "3px",
    fontSize: "22px",
    minWidth: "0",
    margin: "5px",
    display: "none"
  }
}));

export default useStyles;
