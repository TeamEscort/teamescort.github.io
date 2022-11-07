import { Button, Card, Typography } from "@material-ui/core";
import { useStyles } from "./PsychologyHome.styles";
import { useNavigate } from "react-router";
import PageSlider from "./PageSlider"

import Tamil from "../../assets/abarna/tamil.jpg";
import English from "../../assets/abarna/english.jpg";
import Sinhala from "../../assets/abarna/sinhala.jpg";
import Tanglish from "../../assets/abarna/thangl.jpg";

const PsychologyHome = () => {
  const styles = useStyles();
  const push = useNavigate();
  return (
    <div>
      <Typography className={styles.heading}>Solution Recommender for Psychological Issues</Typography>
      <div>
        <PageSlider />
      </div>
      <Card elevation={0}>
        <div className={styles.btnDiv} >
          <div className={styles.widgetImg} >
            <img src={English} alt="sliit" className={styles.imgDiv} />
            <Button
              variant="contained"
              className={styles.btn}
              onClick={() =>
                push("/solution_provider", {
                  state: { id: 1, language: "english" },
                })
              }
            >
              English
            </Button>
          </div>

          <div className={styles.widgetImg}>
            <img src={Sinhala} alt="sliit" className={styles.imgDiv} />
            <Button
              variant="contained"
              className={styles.btn}
              onClick={() =>
                push("/solution_provider", {
                  state: { id: 2, language: "tamil" },
                })
              }
            >
              தமிழ்
            </Button>
          </div>

          <div className={styles.widgetImg}>
            <img src={Tamil} alt="sliit" className={styles.imgDiv} />
            <Button
              variant="contained"
              className={styles.btn}
              onClick={() =>
                push("/solution_provider", {
                  state: { id: 3, language: "sinhala" },
                })
              }
            >
              සිංහල
            </Button>
          </div>

          <div className={styles.widgetImg} >
            <img src={Tanglish} alt="sliit" className={styles.imgDiv} />
            <Button
              variant="contained"
              className={styles.btn}
              onClick={() =>
                push("/solution_provider", {
                  state: { id: 4, language: "thanglish" },
                })
              }
            >
              Thanglish
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PsychologyHome;
