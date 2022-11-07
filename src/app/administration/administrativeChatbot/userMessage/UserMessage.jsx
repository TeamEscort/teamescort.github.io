import { Typography } from "@material-ui/core";
import Person from "../../../../assets/person.png";
import { useStyles } from "./UserMessage.styles";
import { administrationChatbot } from "../data";

export const UserMessage = ({ userMsg, type }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.imageDiv}>
        <img src={Person} alt="Person_image" className={classes.image} />
      </div>
      <div className={classes.message}>
        <Typography className={classes.botName}>{type === administrationChatbot.english ? "You" : type === administrationChatbot.tamil ? "நீங்கள்" : "Neengal"}</Typography>
        <div className={classes.messageOrange}>
          <Typography className={classes.messageContent}>{userMsg}</Typography>
        </div>
      </div>
    </div>
  );
};
