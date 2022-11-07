import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing }) => ({
  mainDiv: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  imageDiv: {
    margin: spacing(2),
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
    alignItems: "flex-end",
  },
  messageContent: {
    padding: 0,
    margin: 0,
  },
  messageOrange: {
    position: "relative",
    marginRight: "20px",
    padding: "10px",
    backgroundColor: "#f8e896",
    maxWidth: "90%",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    border: "1px solid #dfd087",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #f8e896",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      right: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #dfd087",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      right: "-17px",
    },
  },
}));
