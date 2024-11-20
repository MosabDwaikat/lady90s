import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  navLink: {
    fontSize: "14px",
    padding: "5px 17.5px",
    cursor: "pointer",
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "rgb(220, 178, 123)"
    }
  }
}));

export default useStyles;
