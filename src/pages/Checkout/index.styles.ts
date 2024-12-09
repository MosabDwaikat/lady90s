import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px"
  },
  checkoutBody: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column"
    }
  },
  checkoutFormPanel: {
    width: "50%",
    padding: "20px",
    [theme.breakpoints.down("lg")]: {
      width: "100%"
    }
  },
  checkoutItemsPanel: {
    width: "50%",
    padding: "20px",
    paddingTop: "40px",
    [theme.breakpoints.down("lg")]: {
      width: "100%"
    }
  },
  sectionTag: {
    fontSize: "21px",
    fontWeight: "600",
    marginBottom: "10px",
    marginTop: "20px"
  },
  submitButton: {
    height: "60px",
    fontSize: "19px"
  },
  checkoutDetailsBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px"
  },
  checkoutDetails: {
    fontSize: "14px",
    fontWeight: "400"
  },
  checkoutDetailsSum: {
    fontSize: "19px",
    fontWeight: "600"
  }
}));

export default useStyles;
