import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => {
  return {
    customDot: {
      position: "relative",
      bottom: "50px",
      border: "2px solid white",
      width: "13px",
      height: "13px",
      borderRadius: "50%"
    },
    customDotDark: {
      position: "relative",
      backgroundColor: "grey",
      width: "13px",
      height: "13px",
      borderRadius: "50%"
    }
  };
});

export default useStyles;
