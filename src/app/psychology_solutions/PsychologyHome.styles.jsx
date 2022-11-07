import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  heading: {
    marginTop: 95,
    marginBottom: 35,
    display: "flex",
    justifyContent: "center",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Garamond"
  },

  card: {
    margin: spacing(3),
  },


  imgDiv: {
    width: 150,
    height: 150,
  },

  widgetImg: {
    gap: spacing(3),
    textAlign: "center",
    marginBottom: 100,
    marginTop: 20,
    width: 200,
    marginRight:20,
    marginLeft: 20
  },

  btn: {
    backgroundColor: "#14A5C5",
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },

  btnDiv: {
    display: "flex",
    justifyContent: "center"
  }
}));
