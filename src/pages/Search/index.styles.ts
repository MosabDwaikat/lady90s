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
  searchBody: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px"
  },
  notFound: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    fontSize: "24px",
    color: "gray"
  }
}));

export default useStyles;
