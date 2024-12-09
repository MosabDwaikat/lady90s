import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  additionBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    border: "1px solid rgb(217, 217, 217)",
    backgroundColor: "rgb(243, 243, 246)",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer"
  },
  additionDetailsText: {
    marginRight: "10px",
    color: "rgb(82, 82, 82)",
    fontSize: "15px",
    fontWeight: "600"
  },
  additionTailing: {
    display: "flex"
  },
  additionImgContainer: {
    backgroundColor: "white",
    width: "64px",
    height: "64px",
    borderRadius: "5px",
    overflow: "hidden"
  },
  additionImg: {
    width: "64px"
  }
}));

export default useStyles;
