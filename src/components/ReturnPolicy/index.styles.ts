import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  policyContainer: {
    backgroundColor: "white",
    color: "black",
    margin: "10px",
    padding: "20px",
    overflow: "auto",
    maxHeight: "90%"
  },
  policyTitle: {
    fontSize: "37px",
    fontWeight: "700"
  },
  policyText: {
    textAlign: "right"
  },
  policyList: {
    direction: "rtl",
    listStyleType: "disc",
    listStylePosition: "inside",
    textAlign: "right",
    ".MuiListItem-root": {
      display: "flex",
      justifyContent: "start",
      alignItems: "start",
      direction: "rtl",

      "&::before": {
        content: "'•'",
        marginLeft: "10px",
        fontSize: "16px",
        direction: "rtl"
      }
    }
  }
}));

export default useStyles;
