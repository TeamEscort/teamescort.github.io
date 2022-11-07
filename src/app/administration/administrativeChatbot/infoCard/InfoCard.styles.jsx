import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  mainDiv: {
    maxWidth: "95%",
    margin: spacing(1),
    borderRadius: spacing(2),
    boxShadow: "200px",
  },
  heading: {
    paddingTop: spacing(1),
  },
  message: {
    display: "flex",
    fontWeight: "bold",
    marginBottom: spacing(1.5),
    marginTop: spacing(1),
    justifyContent: "center",
    fontFamily: "Garamond",
    fontSize: spacing(2.5),
    [breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: spacing(1),
    marginBottom: spacing(0.7),
    margin: spacing(1),
  },
  infos: {
    display: "flex",
    flexDirection: "column",
  },
  separateInfo: {
    display: "flex",
    flexDirection: "row",
    gap: spacing(1),
    marginBottom: spacing(0.5),
  },
}));
