import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  errorPageContainer: {
    display: "flex",
    height: "80vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    direction: "ltr"
  },
  goHomeBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "rgb(52, 52, 52)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }
}));

export default useStyles;
