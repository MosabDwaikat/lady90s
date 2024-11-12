import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  cardContainer: {
    textAlign: "center",
    paddingBottom: "5px",
    position: "relative"
  },
  cardImgContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover $imgHover": {
      opacity: 1,
      transform: "scale(1.2)"
    }
  },
  cardImg: {
    width: "100%",
    cursor: "pointer",
    objectFit: "cover",
    transition: "opacity 0.3s ease",
    "&:hover": {
      opacity: 0
    }
  },
  imgHover: {
    opacity: 0,
    objectFit: "contain",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    cursor: "pointer",
    transition: "transform 1.8s ease, opacity 0.8s ease"
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "rgb(86, 207, 225)"
    }
  },
  cardPrice: {
    direction: "rtl",
    color: "rgb(105, 105, 105)",
    fontSize: "15px",
    fontWeight: 400
  }
}));

export default useStyles;
