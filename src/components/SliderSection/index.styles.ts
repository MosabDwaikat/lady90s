import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  sectionContainer: {
    marginBottom: "40px"
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  sectionTitleHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px"
  },
  sectionNavBtnHeader: {
    minWidth: "130px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px"
  },
  sectionPlaceholder: {
    minWidth: "130px"
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: 600
  },
  viewAllBtn: {
    fontSize: "16px",
    fontWeight: 600,
    margin: "10px",
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
