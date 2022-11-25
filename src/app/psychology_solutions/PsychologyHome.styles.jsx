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

  subHeading: {
    marginTop: 10,
    marginBottom: 35,
    display: "flex",
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Garamond"
  },

  subImg: {
    width: 300,
    height: 300,
    borderRadius:150
  },

  card: {
    margin: spacing(3),
  },

  imgDiv: {
    width: 200,
    height: 160,
  },

  widgetImg: {
    gap: spacing(4),
    textAlign: "center",
    marginBottom: 100,
    marginTop: 30,
    width: 200,
    marginRight:30,
    marginLeft: 30
  },

  btn: {
    backgroundColor: "#14A5C5",
    fontWeight: "bold",
    color: "white",
    width: 100,
    marginTop: 20,
  },

  btnDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: 120
  },

  subPara: {
    marginBottom: spacing(1),
    display: "flex",
    fontSize: 22,
    fontFamily: "Trajon",
    width: 800,
    marginLeft: 40
  },

  stressBtn: {
    backgroundColor: "#14A5C5",
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    width: "250px",
    marginBottom: 20,
    marginLeft: 300
  },

  main: {
    marginBottom: 20
  },

  book: {
    display: "flex",
    justifyContent : "center"
  },

  imgBook:{
     width: 180,
     height: 250,
     marginLeft: 20,
     marginRight: 20,
     marginBottom: 60,
     marginTop: 50
   },

   subHeading2: {
    marginTop: 10,
    display: "flex",
    justifyContent: 'center',
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Garamond"
  },
}));
