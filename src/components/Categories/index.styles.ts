import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  categoriesContainer: {
    marginBottom: "50px"
  },
  categoriesHeaderContainer: {
    borderBottom: "2px solid lightgrey",
    textAlign: "center",
    marginBottom: "40px"
  },
  categoriesHeaderTitle: {
    fontSize: "34px !important",
    fontWeight: "600 !important",
    borderBottom: "3px solid #dcb27b",
    display: "inline-block",
    padding: "10px"
  }
}));

export default useStyles;
