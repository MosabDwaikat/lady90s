import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  contactContainer: {
    width: "100%",
    position: "relative"
  },
  bgImg: {
    width: "100%"
  },
  contactInfo: {
    position: "absolute",
    width: "100%",
    top: "50%",
    transform: "translate(0, -50%)",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  contactTitle: {
    color: "white",
    fontSize: "16px",
    fontWeight: "500"
  },
  contactText: {
    color: "white",
    fontSize: "52px",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px"
    }
  },
  contactBtns: {},
  contactWhatsappBtn: {
    borderRadius: "40px",
    color: "white",
    backgroundColor: "rgb(34, 205, 91)",
    fontSize: "14px",
    padding: "10px 20px",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "rgb(86, 207, 225)"
    }
  },
  contactInstagramBtn: {
    borderRadius: "40px",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",

    fontSize: "14px",
    margin: "10px",
    padding: "10px 20px",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "rgb(86, 207, 225)"
    }
  }
}));
export default useStyles;
