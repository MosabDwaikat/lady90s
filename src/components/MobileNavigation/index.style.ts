import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1
  }
}));

export default useStyles;