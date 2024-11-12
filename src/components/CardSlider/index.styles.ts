import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  cardSliderContainer: {
    "& .slick-slide": {
      padding: "0 10px !important"
    }
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
      backgroundColor: "black"
    }
  }
}));

export default useStyles;
