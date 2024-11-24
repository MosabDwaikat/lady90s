import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  count: {
    width: "120px",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    border: "1px solid",
    borderRadius: "60px",
    marginY: "15px"
  }
}));

export default useStyles;
