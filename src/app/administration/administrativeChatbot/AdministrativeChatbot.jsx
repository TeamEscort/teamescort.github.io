import {
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./AdministrativeChatbot.styles";
import Robot from "../../../assets/robot.png";
import { BotMessage } from "./botMessage/BotMessage";
import { UserMessage } from "./userMessage/UserMessage";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import Chatbot from "../../../assets/chatbot.gif";
import { InfoCard } from "./infoCard/InfoCard";
import { administrationChatbot } from "./data";

export const AdministrativeChatbot = () => {
  const classes = useStyles();
  const location = useLocation();
  const push = useNavigate();
  const [data, setData] = useState({
    response: "Hi. I am Elisa. Glad to help you.",
  });
  const [messagesList, setMessagesList] = useState([{}]);
  const [message, setMessage] = useState("");
  const BotMessageHeading = location.state.language === `${administrationChatbot.english}` ? `${administrationChatbot.englishMsg}` : location.state.language === `${administrationChatbot.tamil}` ? `${administrationChatbot.tamilMsg}` : `${administrationChatbot.thanglishMsg}`;
  const route = location.state.language === `${administrationChatbot.english}` ? "/english_chatbot" : location.state.language === `${administrationChatbot.tamil}` ? "/tamil_chatbot" : "/thanglish_chatbot";

  useEffect(() => {
    setMessagesList([
      { from: "bot", message: BotMessageHeading },
    ]);
  }, [location.state.language, BotMessageHeading]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let messages = [...messagesList, { from: "user", message: message }];
    setMessagesList(messages);
    setMessage("");
    if (message === '' || message === null) {
      console.log('language', location.state.language)
      setMessagesList([...messagesList, { from: "bot", message: `${location.state.language === administrationChatbot.english ? 'Please input a question to get answer' : location.state.language === administrationChatbot.tamil ? 'தயவு செய்து வினா ஒன்றைக் கேட்கவும்' : 'Thayavu seithu vinaa ondrai kertkavum'}` }])
    } else {
      fetch(route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ message: message }),
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setMessagesList([
            ...messages,
            { from: "bot", message: data.response },
          ]);
        });
    }

  };

  const handleInput = (evt) => {
    const userMessage = evt.target.value;
    setMessage(userMessage);
  };

  return (
    <div>
      <Typography className={classes.heading}>
        {location.state.language === `${administrationChatbot.english}`
          ? `${administrationChatbot.englishAdminBot}`
          : location.state.language === `${administrationChatbot.tamil}`
            ? `${administrationChatbot.tamilAdminBot}`
            : `${administrationChatbot.thanglishAdminBot}`}
      </Typography>
      <div className={classes.mainDiv}>
        <div className={classes.gif}>
          <img src={Chatbot} alt="chatbot-gif" className={classes.gifs} />
          <div>
            <InfoCard type={location.state.language} />
          </div>
        </div>
        <Card elevation={5} className={classes.card}>
          <div className={classes.cardHeaderDiv}>
            <div className={classes.nameDiv}>
              <img src={Robot} alt="Robot" className={classes.image} />
              <Typography className={classes.cardHeading}>
                {location.state.language === `${administrationChatbot.english}`
                  ? `${administrationChatbot.elisaEnglishAdminBot}`
                  : location.state.language === `${administrationChatbot.tamil}`
                    ? `${administrationChatbot.elisaTamilAdminBot}`
                    : `${administrationChatbot.elisaTanglishAdminBot}`}
              </Typography>
            </div>
            <Button variant="outlined" onClick={() => push("/administration")}>
              {administrationChatbot.back}
            </Button>
          </div>
          <Divider />
          <Card elevation={0} className={classes.chatCard}>
            {messagesList.map((item) =>
              item.from === "user" ? (
                <UserMessage userMsg={item.message} type={location.state.language} />
              ) : (
                <BotMessage botMsg={item.message} type={location.state.language} />
              )
            )}
          </Card>
          <Divider />
          <div className={classes.messageDiv}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                id="user-message"
                name="usermessage"
                onChange={handleInput}
                label="Ask something..."
                variant="outlined"
                value={message}
                className={classes.messageText}
              />
              <Button type="submit" className={classes.sendButton}>
                <Typography className={classes.ButtonText}>{administrationChatbot.send}</Typography>
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};
