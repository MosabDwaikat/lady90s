import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  cartContainer: {
    width: "100%",
    maxWidth: "1200px"
  },
  tableViewHeader: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  tableViewRow: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc"
  },
  tableViewCell: {},
  productPanel: {
    direction: "rtl",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    marginBottom: "10px",
    padding: "10px"
  },
  productDetailsPanel: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  productDetailItem: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "10px"
    }
  },
  productDetailsButton: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      padding: "10px"
    }
  },
  sumPanel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 10px 30px 10px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start"
    }
  },
  discountPanel: {
    fontWeight: "600"
  },
  discountPanelText: {
    fontWeight: "600",
    marginBottom: "10px"
  },
  submitPanel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "end"
  },
  submitPanelText: {
    fontWeight: "600",
    fontSize: "18px",
    marginLeft: "5px"
  },
  submitPanelSum: {
    display: "flex"
  },
  submitBtn: {
    backgroundColor: "rgb(220, 178, 123)",
    color: "white",
    fontWeight: "600",
    marginTop: "20px",
    fontSize: "18px",
    padding: "10px 45px",
    borderRadius: "40px",
    cursor: "pointer"
  }
}));

export default useStyles;
