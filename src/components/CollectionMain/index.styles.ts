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
  collectionBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px"
  },
  collectionMain: {
    width: "100%",
    display: "flex"
  },
  browserContainer: {
    padding: "10px",
    width: "80%",
    minWidth: "80%"
  },
  collectionSidebar: {
    width: "20%",
    minWidth: "20%"
  }
}));

export default useStyles;
