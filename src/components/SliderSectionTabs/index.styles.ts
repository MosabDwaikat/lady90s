import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px"
  },
  tabsTitle: {
    fontSize: "24px",
    fontWeight: 600
  },
  btnPanel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  tabNavigateBtn: {
    fontSize: "16px",
    fontWeight: 600,
    marginTop: "10px",
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    borderRadius: "40px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgb(172, 141, 100)"
    }
  }
}));

export default useStyles;
