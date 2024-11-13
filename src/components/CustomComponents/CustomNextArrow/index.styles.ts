import { makeStyles } from "tss-react/mui";
interface StyleProps {
  backgroundColor?: string;
}

const useStyles = makeStyles<StyleProps>()((theme, { backgroundColor = "transparent" }) => ({
  customArrowNext: {
    width: "40px",
    height: "40px",
    backgroundColor: backgroundColor,
    border: "1px solid white",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    cursor: "pointer",
    zIndex: 1,
    right: "15px",
    "&:hover": {
      backgroundColor: "#dcb27b",
      transition: "background-color 0.8s"
    },
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }
}));

export default useStyles;
