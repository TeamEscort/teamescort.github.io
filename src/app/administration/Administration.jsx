import { Button, Card, Typography } from "@material-ui/core";
import { useStyles } from "./Administration.styles";
import Staff from "../../assets/staff.jpg";
import Img1 from "../../assets/SLIIT.jpg";
import Img2 from "../../assets/sports.jpg";
import Img3 from "../../assets/honor.jpg";
import English from '../../assets/English1.png';
import Thanglish from '../../assets/Tamil1.png';
import Tamil from '../../assets/Thanglish1.png';
import { useNavigate } from "react-router";
import { administrationHome } from "./data";

export const Administration = () => {
  const styles = useStyles();
  const push = useNavigate();

  return (
    <div>
      <Typography className={styles.heading}>{administrationHome.heading}</Typography>
      <Card elevation={0} className={styles.card}>
        <div className={styles.mainDiv}>
          <img src={Staff} alt="staff" className={styles.imgDiv} />
          <div>
            <Typography className={styles.text}>
              {administrationHome.firstParagraph}
            </Typography>
            {/* <Typography className={styles.text}>
              {administrationHome.secondParagraph}
            </Typography> */}
            <Typography className={styles.text}>
              {administrationHome.thirdParagraph}
            </Typography>
            <div className={styles.chatDiv}>
              <Typography className={styles.chat}>
                {administrationHome.chatbotHeading}
              </Typography>
              <div className={styles.buttonDiv}>
                <div className={styles.languageDiv}>
                  <img src={English} alt="english" className={styles.languageImage} />
                  <Button
                    variant="contained"
                    className={styles.btn}
                    onClick={() =>
                      push("/administrative-chatbot", {
                        state: { id: 1, language: "english" },
                      })
                    }
                  >
                    {administrationHome.english}
                  </Button>
                </div>
                <div className={styles.languageDiv}>
                  <img src={Tamil} alt="tamil" className={styles.languageImage} />
                  <Button
                    variant="contained"
                    className={styles.btn}
                    onClick={() =>
                      push("/administrative-chatbot", {
                        state: { id: 2, language: "tamil" },
                      })
                    }
                  >
                    {administrationHome.tamil}
                  </Button>
                </div>
                <div className={styles.languageDiv}>
                  <img src={Thanglish} alt="thanglish" className={styles.languageImage} />
                  <Button
                    variant="contained"
                    className={styles.btn}
                    onClick={() =>
                      push("/administrative-chatbot", {
                        state: { id: 3, language: "codemix" },
                      })
                    }
                  >
                    {administrationHome.thanglish}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card elevation={0} className={styles.carasoleCard}>
        <div className={styles.carImg}>
          <img src={Img1} alt="sliit" className={styles.imgDiv} />
          <img src={Img2} alt="ports" className={styles.imgDiv} />
          <img src={Img3} alt="graduation" className={styles.imgDiv} />
        </div>
      </Card>
    </div>
  );
};
