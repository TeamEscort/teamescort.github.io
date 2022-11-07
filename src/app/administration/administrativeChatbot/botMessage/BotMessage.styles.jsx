import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing }) => ({
  mainDiv: {
    display: "flex",
    flexDirection: "row",
  },
  imageDiv: {
    margin: spacing(1),
  },
  image: {
    height: spacing(7),
    width: spacing(7),
    borderRadius: spacing(40),
  },
  botName: {
    fontSize: spacing(2),
    fontWeight: "bold",
    paddingLeft: 0,
  },
  message: {
    margin: spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  messageBlue: {
    position: "relative",
    marginLeft: spacing(0.5),
    padding: spacing(1.5),
    backgroundColor: "#A8DDFD",
    maxWidth: "90%",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    border: "1px solid #97C6E3",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #A8DDFD",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      left: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #97C6E3",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      left: "-17px",
    },
  },
  messageContent: {
    padding: 0,
  },
}));
