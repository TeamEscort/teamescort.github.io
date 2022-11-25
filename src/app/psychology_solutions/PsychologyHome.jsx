import { Button, Card, Typography } from "@material-ui/core";
import { useStyles } from "./PsychologyHome.styles";
import { useNavigate } from "react-router";
import PageSlider from "./PageSlider"
import Grid from '@material-ui/core/Grid';

import Tamil from "../../assets/abarna/tamil.jpg";
import English from "../../assets/abarna/english.jpg";
import Sinhala from "../../assets/abarna/sinhala.png";
import Tanglish from "../../assets/abarna/thangl.jpg";

import Book1 from "../../assets/abarna/book2.jpg";
import Book2 from "../../assets/abarna/book3.jpg";
import Book3 from "../../assets/abarna/book4.jpg";
import Book4 from "../../assets/abarna/book5.png";
import Book5 from "../../assets/abarna/book6.jpg";
import Book6 from "../../assets/abarna/book7.jpg";

import Psychologist from "../../assets/abarna/psychologist.jpg";

const PsychologyHome = () => {
  const styles = useStyles();
  const push = useNavigate();
  return (
    <div>
      {/* <Typography className={styles.heading}>Solution Recommender for Psychological Issues</Typography> */}
      <div className={styles.top}>
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
            <img src={Tamil} alt="sliit" className={styles.imgDiv} />
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
            <img src={Sinhala} alt="sliit" className={styles.imgDiv} />
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

      <Grid container className={styles.main}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <img src={Psychologist} alt="sliit" className={styles.subImg} />
        </Grid>
        <Grid item xs={7}>
          <Typography className={styles.subHeading}>
            Get an Amazing & Pretty Solutions for Your Psychological Issues.
          </Typography>

          <Typography className={styles.subPara}>
           Best solutions for your mental health issues. Specially designed for university students. Simple and easy solutions that can be managable within your study and work time.
           You can get the solutions immediately.
          </Typography>
          
          <div className={styles.stressDiv}>
            <Button
                variant="contained"
                className={styles.stressBtn}
                onClick={() =>
                  push("/stress_level")
                }
              >
              Find Your Stress Level
            </Button>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <div>
        <Typography className={styles.subHeading2}>
            Featured Books
        </Typography>
      
        <div className={styles.book}>
          <img src={Book1} alt="sliit" className={styles.imgBook} />
          <img src={Book2} alt="sliit" className={styles.imgBook} />
          <img src={Book3} alt="sliit" className={styles.imgBook} />
          <img src={Book4} alt="sliit" className={styles.imgBook} />
          <img src={Book5} alt="sliit" className={styles.imgBook} />
          <img src={Book6} alt="sliit" className={styles.imgBook} />
        </div>
      </div>
    </div>
  );
};

export default PsychologyHome;
