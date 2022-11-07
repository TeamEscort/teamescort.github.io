import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  mainDiv: {
    marginBottom: spacing(10),
    position: "sticky",
    zIndex: 999,
  },
  appBar: {
    maxHeight: spacing(8),
    backgroundColor: "#14A5C5",
  },
  container: {
    maxWidth: "100%",
  },
  toolBar: {
    display: "flex",
    justifyContent: "flex-start",
    gap: spacing(2),
  },
  image: {
    maxHeight: spacing(7),
    maxWidth: spacing(7),
  },
  title: {
    fontWeight: "bold",
    fontSize: spacing(3),
    "&:hover": {
      backgroundColor: "#14A5C5",
    },
  },
  list: {
    width: 200,
  },
  padding: {
    paddingRight: 0,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#14A5C5",
    },
  },
  mobPadding: {
    display: "flex",
    justifyContent: "flex-start",
    paddingRight: 0,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },

  sideBarIcon: {
    padding: 4,
    color: "white",
    cursor: "pointer",
  },
  topDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  nav: {
    display: "flex",
    gap: spacing(3),
  },
}));
