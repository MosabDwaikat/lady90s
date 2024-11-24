import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  count: {
    width: "120px",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    border: "1px solid",
    borderRadius: "60px",
    marginY: "15px"
  },
  addToCartBtn: {
    margin: "0 10px 0 10px",
    padding: "10px 20px",
    backgroundColor: "rgb(220, 178, 123)",
    color: "white",
    borderRadius: "40px",
    "&.shake": {
      animation: "shake 1s ease-in-out"
    },
    "@keyframes shake": {
      "0%, 100%": { transform: "translateX(0)" },
      "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
      "20%, 40%, 60%, 80%": { transform: "translateX(10px)" }
    }
  },
  roundBtn: {
    backgroundColor: "white",
    border: "1px solid",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    minWidth: 0,
    minHeight: 0,
    padding: 0,
    cursor: "pointer",
    margin: "2px",
    "&:hover": {
      backgroundColor: "rgb(72, 72, 72)",
      color: "rgb(218, 218, 218)"
    }
  }
}));

export default useStyles;
