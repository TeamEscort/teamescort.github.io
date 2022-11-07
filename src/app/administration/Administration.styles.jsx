import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  heading: {
    marginTop: spacing(5),
    marginBottom: spacing(2),
    display: "flex",
    justifyContent: "center",
    fontSize: spacing(5),
    fontWeight: "bold",
    fontFamily: "Garamond"
  },
  card: {
    margin: spacing(3),
  },
  mainDiv: {
    display: "flex",
    [breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  imgDiv: {
    [breakpoints.down("md")]: {
      maxWidth: "100%",
      maxHeight: "40%",
    },
    [breakpoints.up("lg")]: {
      maxWidth: "40%",
      maxHeight: "20%",
    },
  },
  text: {
    margin: spacing(2),
    fontWeight: spacing(3)
  },
  chatDiv: {
    margin: spacing(2),
  },
  chat: {
    fontWeight: "bold",
    fontSize: spacing(4),
    display: "flex",
    justifyContent: "center",
    marginBottom: spacing(3),
    fontFamily: "Garamond"
  },
  buttonDiv: {
    display: "flex",
    [breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "center",
      gap: spacing(10),
    },
  },
  languageDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing(2),
    marginBottom: spacing(1.5)

  },
  languageImage: {
    [breakpoints.down("md")]: {
      maxWidth: "100%",
      maxHeight: "40%",
    },
    [breakpoints.up("lg")]: {
      maxWidth: "40%",
      maxHeight: "70%",
    },
  },
  imageDiv: {
    display: "flex",
    [breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "center",
      gap: spacing(5),
    },
  },
  carImg: {
    display: "flex",
    justifyContent: "center",
    gap: spacing(1),
  },
  carasoleCard: {
    margin: spacing(8),
  },
  btn: {
    backgroundColor: "#14A5C5",
    fontWeight: "bold",
    color: "white",
  },
}));
