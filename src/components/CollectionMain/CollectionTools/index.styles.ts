import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
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
    minWidth: "230px"
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
