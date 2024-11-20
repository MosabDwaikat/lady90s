import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  collectionToolsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    width: "100%"
  },
  gridViewBtn: {
    border: "1px solid black",
    padding: "3px",
    fontSize: "22px",
    minWidth: "0",
    margin: "5px",
    display: "none"
  },
  filterSelectContainer: {
    minWidth: "230px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "0"
    }
  },
  filterSelect: {
    height: 35,
    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center"
    }
  }
}));

export default useStyles;
