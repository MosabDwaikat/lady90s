import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  navItem: {
    cursor: "pointer",
    color: "black",
    "&:hover": {
      color: "rgb(172, 141, 100)",
      transform: "scale(1.2)"
    }
  }
}));

export default useStyles;
