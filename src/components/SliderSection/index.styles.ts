import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  newlyArrivedContainer: {
    marginBottom: "40px"
  },
  newlyArrivedHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px"
  },
  newlyArrivedTitle: {
    fontSize: "24px",
    fontWeight: 600
  }
}));

export default useStyles;
