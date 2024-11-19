import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  shortcutsMainPanel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  shortcutsLinksPanel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  shortcutLink: {},
  shortcutsCategoriesContainer: {
    backgroundColor: "rgb(233, 233, 233)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  shortcutsCategoriesPanel: {
    width: "100%",
    maxWidth: "1200px"
  }
}));

export default useStyles;
