import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  productContainer: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    maxWidth: "1200px",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  imagesPreviewContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  productDetailsContainer: {
    flex: 1,
    paddingRight: "20px",
    paddingLeft: "20px"
  },
  slidersContainer: {
    maxWidth: "1200px",
    width: "100%",
    margin: "50px 0 150px 0"
  }
}));

export default useStyles;
