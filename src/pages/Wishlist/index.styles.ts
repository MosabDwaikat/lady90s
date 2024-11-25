import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  },
  wishlistBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px"
  }
}));

export default useStyles;
