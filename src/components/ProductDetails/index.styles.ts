import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  productTitle: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px"
  },
  productPriceTag: {
    fontSize: "23px",
    fontWeight: "500",
    marginBottom: "10px"
  },
  productPrice: {
    fontSize: "29px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "rgb(27, 154, 209)"
  },
  additionBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    border: "1px solid rgb(217, 217, 217)",
    backgroundColor: "rgb(243, 243, 246)",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer"
  },
  additionDetailsText: {
    color: "rgb(82, 82, 82)",
    fontSize: "15px",
    fontWeight: "600"
  },
  additionTailing: {
    display: "flex"
  },
  additionImgContainer: {
    backgroundColor: "white",
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    overflow: "hidden"
  },
  additionImg: {
    width: "40px"
  },
  notesContainer: {
    marginBottom: "20px"
  },
  notestext: {
    fontSize: "15px",
    fontWeight: "500",
    color: "rgb(35, 35, 35)",
    marginBottom: "10px"
  },
  btnsContainer: {
    marginBottom: "20px"
  },
  linksContainer: {
    display: "flex",
    marginBottom: "20px"
  },
  link: {
    fontSize: "15px",
    fontWeight: "600",
    marginLeft: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(220, 178, 123)"
    }
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px"
  },
  icon: {
    marginLeft: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(220, 178, 123)"
    }
  },
  shippingContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "20px"
  },
  shippingText: {
    marginRight: "5px",
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "500",
    color: "rgb(34, 34, 34)"
  }
}));

export default useStyles;
