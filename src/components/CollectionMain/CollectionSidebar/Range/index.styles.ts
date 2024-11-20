import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  root: {
    "& .MuiSlider-thumb": {
      marginRight: "-20px"
    },
    "& .MuiSlider-markLabel[data-index='0']": {
      marginRight: "-10px"
    },
    "& .MuiSlider-markLabel[data-index='1']": {
      marginRight: "-20px"
    }
  },
  filterBtn: {
    backgroundColor: "transparent",
    color: "black",
    padding: "5px 30px",
    border: "1px solid",
    borderRadius: "40px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(220, 178, 123)",
      borderColor: "rgb(220, 178, 123)",
      color: "white"
    }
  }
}));
export default useStyles;
