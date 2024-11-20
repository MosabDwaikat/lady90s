import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  },
  collectionBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px"
  },
  collectionMain: {
    width: "100%",
    display: "flex"
  },
  drawerContainer: {
    position: "relative"
  },
  sidebarDrawerBtn: {
    position: "fixed",
    top: "50%",
    right: "0",
    backgroundColor: "white",
    padding: "5px",
    minWidth: "40px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.7)",
    overflow: "hidden",
    transition: "background-color 0.3s ease",
    "&:hover": {
      transform: "scale(1.2)"
    }
  },

  browserContainer: {
    padding: "10px"
  },
  collectionSidebar: {
    width: "20%",
    minWidth: "20%"
  }
}));

export default useStyles;
