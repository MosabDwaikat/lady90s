import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  mainPanel: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  cartTitle: {
    variant: "h6",
    fontFamily: "inherit",
    margin: "20px"
  },
  productsPanel: {
    width: 350,
    padding: "20px",
    borderTop: "1px solid lightgrey",
    borderBottom: "1px solid lightgrey"
  },
  emptyCart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  btnsPanel: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    justifyContent: "space-between",
    marginTop: "20px"
  },
  summation: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderTop: "1px solid lightgrey",
    borderBottom: "1px solid lightgrey"
  },
  cartBtn: {
    borderRadius: "40px",
    fontSize: "18px",
    marginTop: "20px",
    backgroundColor: "rgb(39, 174, 96)",
    color: "white"
  },
  checkoutBtn: {
    borderRadius: "40px",
    fontSize: "18px",
    marginTop: "20px",
    backgroundColor: "rgb(220, 178, 123)",
    color: "white"
  }
}));

export default useStyles;
