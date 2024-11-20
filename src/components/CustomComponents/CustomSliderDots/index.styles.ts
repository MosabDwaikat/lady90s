import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    customDot: {
      position: "relative",
      bottom: "50px",
      border: "2px solid white",
      width: "13px",
      height: "13px",
      borderRadius: "50%",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    customDotDark: {
      position: "relative",
      backgroundColor: "grey",
      width: "13px",
      height: "13px",
      borderRadius: "50%",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  };
});

export default useStyles;
