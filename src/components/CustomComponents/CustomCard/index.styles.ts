import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  cardContainer: {
    textAlign: "center",
    paddingBottom: "5px",
    position: "relative"
  },
  cardContainerDetailsView: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px"
  },
  cardImgContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  cardImgContainerDetailsView: {
    width: "180px",
    minWidth: "180px",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
  cardImgDetailsView: {
    width: "180px",
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
    transition: "transform 1.8s ease, opacity 0.8s ease",
    "&:hover ": {
      opacity: 1,
      transform: "scale(1.2)"
    }
  },
  imgHoverDetailsView: {
    width: "180px",
    opacity: 0,
    objectFit: "contain",
    position: "absolute",
    cursor: "pointer",
    transition: "transform 1.8s ease, opacity 0.8s ease",
    "&:hover ": {
      opacity: 1,
      transform: "scale(1.2)"
    }
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
  },
  cardBodyDetailsView: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "20px"
  },
  btnsPanelDetailsView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "180px"
    // marginTop: "20px"
  },
  btnDetailsView: {
    position: "relative",
    width: "100%",
    height: "40px",
    border: "1px solid rgb(86, 207, 225)",
    borderRadius: "40px",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    color: "rgb(86, 207, 225)",
    marginTop: "10px",
    marginBottom: "10px",
    transition: "background-color 0.3s ease-in-out",
    overflow: "hidden", // To prevent overflow of the icon or text
    "& .btn-text": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      transition: "top 0.3s ease-in-out, opacity 0.3s ease-in-out"
    },
    "& .btn-icon": {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      transition: "top 0.3s ease-in-out",
      opacity: 0
    },
    "&:hover": {
      color: "white",
      backgroundColor: "rgb(52, 52, 52)",
      borderColor: "rgb(52, 52, 52)",
      "& .btn-text": {
        top: "-20px", // Move text up
        opacity: 0 // Hide text
      },
      "& .btn-icon": {
        top: "25%", // Move icon up to the center
        opacity: 1 // Show icon
      }
    }
  },
  btnFilledDetailsView: {
    backgroundColor: "rgb(86, 207, 225)",
    color: "white"
  }
}));

export default useStyles;
