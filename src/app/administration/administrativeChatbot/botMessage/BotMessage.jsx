import { Typography, Button } from "@material-ui/core";
import Bot from "../../../../assets/bot.png";
import { useStyles } from "./BotMessage.styles";
import { administrationChatbot } from "../data";

export const BotMessage = ({ botMsg, type }) => {
  const classes = useStyles();

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={classes.mainDiv}>
      <div className={classes.imageDiv}>
        <img src={Bot} alt="Bot_image" className={classes.image} />
      </div>
      <div className={classes.message}>
        <Typography className={classes.botName}>{type === administrationChatbot.english ? "Elisa" : type === administrationChatbot.tamil ? "எலிசா" : "Elsia"}</Typography>
        <div className={classes.messageBlue}>
          {botMsg === 'courseDetails' ?
            <Typography className={classes.messageContent}><Button variant="text" onClick={() => openInNewTab('/administration/course-details')}>Please click here to see full course details</Button></Typography>
            :
            botMsg === 'eventsDetails' ?
              <Typography className={classes.messageContent}><Button variant="text" onClick={() => openInNewTab('/administration/events')}>Please click here to see full events details</Button></Typography>
              :
              botMsg === 'clubsDetails' ?
                <Typography className={classes.messageContent}><Button variant="text" onClick={() => openInNewTab('/administration/clubs')}>Please click here to see full clubs details</Button></Typography>
                :
                botMsg === 'suttleDetails' ?
                  <Typography className={classes.messageContent}><Button variant="text" onClick={() => openInNewTab('/administration/shuttle-details')}>Please click here to see full shuttle details</Button></Typography>
                  :
                  botMsg === 'sportsDetails' ?
                    <Typography className={classes.messageContent}><Button variant="text" onClick={() => openInNewTab('https://www.sliit.lk/student-life/sports')}>Please click here to see full sports/ games details</Button></Typography>
                    :
                    <Typography className={classes.messageContent}>{botMsg}</Typography>
          }
        </div>
      </div>
    </div>
  );
};
