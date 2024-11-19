import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "20px",
    minHeight: "600px",
    border: "1px dotted"
  },
  devider: {
    height: "2px",
    width: "60px",
    backgroundColor: "black"
  },
  sidebarSectionTitle: {
    fontSize: "20px",
    fontWeight: "700"
  },
  sidebarLink: {
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    fontSize: "14px",
    "&:hover": {
      color: "rgb(220, 178, 123)"
    }
  },
  range: {
    direction: "rtl",
    marginTop: "10px",
    marginBottom: "15px",
    width: "100%"
  }
}));

export default useStyles;
