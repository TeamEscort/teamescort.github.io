import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  mainDiv: {
    bottom: 0,
    position: "relative",
    backgroundColor: "#14A5C5",
  },
  footerDiv: {
    display: "flex",
    [breakpoints.up("lg")]: {
      flexDirection: "row",
    },
    [breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  img: {
    maxWidth: "10%",
    maxHeight: "10%",
    margin: spacing(2),
  },
  textDiv: {
    display: "flex",
    flexDirection: "column",
    margin: spacing(2),
    [breakpoints.up("lg")]: {
      maxWidth: "50%",
    },
  },
  heading: {
    fontWeight: "bold",
    fontSize: spacing(5),
    fontFamily: "Garamond"
  },
  details: {
    fontSize: spacing(2.5),
    fontFamily: "Garamond"
  },
  lastDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "-webkit-fill-available",
    gap: spacing(3),
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",

    [breakpoints.up("lg")]: {
      gap: spacing(8),
      marginTop: spacing(2),
    },
    [breakpoints.down("md")]: {
      justifyContent: "space-evenly",
    },
  },
  mobPadding: {
    "&:hover": {
      backgroundColor: "#14A5C5",
    },
    fontFamily: "Garamond",
    fontSize: spacing(2)
  },
  copy: {
    display: "flex",
    justifyContent: "center",
    [breakpoints.down("md")]: {
      marginBottom: spacing(3),
    },
  },
  copyright: {
    fontFamily: "Garamond",
    fontSize: spacing(2)
  },
}));
