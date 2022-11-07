import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  heading: {
    marginTop: spacing(2),
    display: "flex",
    justifyContent: "center",
    fontSize: spacing(4),
    fontWeight: "bold",
    fontFamily: "Garamond"
  },
  mainDiv: {
    display: "flex",
    [breakpoints.up("lg")]: {
      flexDirection: "row",
    },
    [breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  gif: {
    display: "flex",
    [breakpoints.up("lg")]: {
      flexDirection: "column",
      maxWidth: "35%",
    },
    [breakpoints.down("md")]: {
      flexDirection: "row",
      maxWidth: "100%",
    },
  },
  gifs: {
    [breakpoints.up("lg")]: {
      flexDirection: "column",
      maxWidth: "100%",
    },
    [breakpoints.down("md")]: {
      flexDirection: "row",
      maxWidth: "30%",
    },
  },
  message: {
    display: "flex",
    fontWeight: "bold",
    [breakpoints.up("lg")]: {
      justifyContent: "center",
    },
    [breakpoints.down("md")]: {
      justifyContent: "left",
      maxWidth: "100%",
    },
  },
  card: {
    marginTop: spacing(2),
    border: "1px solid black",
    borderRadius: spacing(2),
    marginBottom: spacing(2),
    [breakpoints.up("lg")]: {
      marginRight: spacing(2),
      width: "100%",
      maxHeight: "80vh",
    },
    [breakpoints.down("md")]: {
      marginRight: spacing(2),
      marginLeft: spacing(2),
      maxHeight: "95vh",
      height: "95vh",
    },
  },
  cardHeaderDiv: {
    display: "flex",
    flexDirection: "row",
    padding: spacing(2),
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",

  },
  nameDiv: {
    display: "flex",
    flexDirection: "row",
    gap: spacing(3),
    alignContent: "center",
    alignItems: "center",
  },
  image: {
    height: spacing(5),
    width: spacing(5),
  },
  cardHeading: {
    fontSize: spacing(3),
    fontWeight: "bold",
    fontFamily: "Garamond"
  },
  chatCard: {
    margin: spacing(3),
    overflowY: "scroll",
    height: "50vh",
  },
  messageDiv: {
    display: "flex",
    marginTop: spacing(2),
    marginRight: spacing(3),
    marginLeft: spacing(3),
    paddingBottom: spacing(1),
    gap: spacing(3),
    alignContent: "center",
    alignItems: "center",
    bottom: 0,
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  form: {
    width: "100%",
  },
  messageText: {
    fontSize: spacing(3),
    fontWeight: 300,
    marginRight: spacing(2),
    [breakpoints.up("lg")]: {
      width: "85%",
    },
    [breakpoints.down("md")]: {
      width: "100%",
      marginBottom: spacing(0.5),
    },
  },
  sendButton: {
    backgroundColor: "#14A5C5",
    [breakpoints.up("lg")]: {
      width: spacing(12),
      height: spacing(7),
    },
    [breakpoints.down("md")]: {
      width: "100%",
      height: spacing(5),
    },
  },
  ButtonText: {
    fontSize: spacing(1.6),
    fontWeight: "bold",
  },
}));
