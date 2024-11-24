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
  }
}));

export default useStyles;
