import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  sliderContainer: {
    width: "100%",
    overflow: "hidden"
  },
  slide: {
    width: "100%",
    position: "relative"
  },
  imgContainer: {
    width: "100%",
    height: 250,
    "@media (min-width: 700px)": {
      height: 500
    },
    "@media (min-width: 1024px)": {
      height: 650
    }
  },
  carouselImg: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "0% 50%",
    overflow: "clip",
    height: "100%"
  },
  slideContent: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    color: "white"
  },
  slideText: {
    fontSize: "3vw !important",
    fontWeight: 600
  },
  slideSubtext: {
    fontSize: 24,
    fontWeight: 500
  },
  slideButton: {
    border: "1px solid white",
    color: "white"
  },
  slickDots: {
    position: "absolute",
    bottom: "-25px",
    display: "block",
    width: "100%",
    padding: "0",
    margin: "0",
    listStyle: "none",
    textAlign: "center",
    "& li": {
      position: "relative",
      display: "inline-block",
      width: "20px",
      height: "20px",
      margin: "0 5px",
      padding: 0,
      cursor: "pointer"
    },
    "& li.slick-active div": {
      backgroundColor: "white"
    }
  }
}));

export default useStyles;
