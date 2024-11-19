import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => {
  return {
    footerContainer: {
      backgroundColor: "black",
      color: "white"
    },
    footerSection: {
      padding: "20px"
    },
    infoTitle: {
      fontSize: "25px",
      fontWeight: "600"
    },
    infoText: {
      fontSize: "16px",
      fontWeight: "500"
    },
    linksContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start"
    },
    linksItem: {
      marginTop: "20px",
      fontSize: "16px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      textAlign: "right",
      direction: "ltr"
    },
    followUsContainer: {
      marginTop: "20px"
    },
    followUsTitle: {
      fontSize: "16px",
      fontWeight: "500"
    },
    followUsItems: {
      display: "flex"
    },
    followUsIcon: {
      marginLeft: "10px",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(220, 178, 123)"
      }
    },
    policiesContainer: {},
    shortcutsContainer: {},
    policiesTitle: {
      fontSize: "16px",
      fontWeight: "500",
      marginBottom: "10px"
    },
    shortcutsTitle: {
      fontSize: "16px",
      fontWeight: "500",
      marginBottom: "10px"
    },
    listItem: {},
    listItemLink: {
      color: "white",
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(220, 178, 123)"
      }
    },
    stayPostedTitle: {
      fontSize: "16px",
      fontWeight: "500"
    },
    stayPostedText: {
      fontSize: "14px",
      fontWeight: "400",
      color: "rgb(135, 135, 135)",
      marginTop: "20px"
    },
    subscribePanel: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "5px"
    },
    subscribeButton: {
      height: "56px",
      backgroundColor: "rgba(255, 255, 255,0.2)",
      color: "white",
      fontWeight: "600",

      "&:hover": {
        backgroundColor: "rgb(220, 178, 123)"
      }
    },
    footerTailing: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
      padding: "20px 50px 10px 50px",
      borderTop: "1px solid white"
    },
    footerTailingText: {
      fontSize: "14px",
      fontWeight: "300"
    },
    footerCopyright: {
      display: "flex",
      alignItems: "center"
    },
    footerCopyrightTag: {
      color: "rgb(220, 178, 123)",
      marginLeft: "5px"
    },
    footerDeveloper: {
      display: "flex"
    },
    footerDeveloperTag: {
      color: "rgb(242, 188, 0)",
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(86, 207, 225)"
      }
    }
  };
});
export default useStyles;
