import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  sectionContainer: {
    marginBottom: "50px"
  },
  sectionHeaderContainer: {
    textAlign: "center",
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  sectionHeaderTitle: {
    fontSize: "34px !important",
    fontWeight: "600 !important",
    display: "inline-block",
    padding: "10px"
  },
  loadMoreButton: {
    borderRadius: "40px",
    fontSize: "18px",
    padding: "10px 30px",
    color: "white",
    fontWeight: "500",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "#dcb27b"
    }
  },
  loadMorePanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  progressBar: {
    width: "45%"
  }
}));

export default useStyles;
