import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  titleHeroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "220px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "120px"
    }
  },
  titleHeroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
    filter: "brightness(50%)"
  },
  titleHeroText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    fontWeight: "500"
  }
}));

export default useStyles;
