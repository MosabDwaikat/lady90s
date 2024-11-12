import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  navLink: {
    fontSize: "14px",
    padding: "5px 17.5px",
    cursor: "pointer",
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "rgb(172, 141, 100)"
    }
  }
}));

export default useStyles;
