import React, { useState, useEffect } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Stack, Button } from "@mui/material";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";

import Quiz from "./Quiz";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  module_img: {
    height: 350,
    width: "50%",
  },
  paper: {
    height: 350,
    width: "100%",
    alignContent: "center",
  },
  instructions_wrapper: {
    height: 350,
    backgroundColor: "#eeeeee66",
    padding: 24,
  },
  instruction_heading: {
    marginTop: 5,
    marginBottom: 10,
  },
});

export const QuizPage = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { state } = useLocation();
  const [active, setActive] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    localStorage.removeItem("elaspedTime");
    localStorage.removeItem("score");
  }, []);

  const handleTimerStop = async (e) => {
    localStorage.setItem("elaspedTime", e.time);
    let mark = localStorage.getItem("score");
    let duration = localStorage.getItem("score");
    let subject = localStorage.getItem("module");
    let output = {
      marks: Number(mark),
      duration: Number(duration),
      subject: Number(subject),
    };

    console.log(output);
    await axios
      .post("http://127.0.0.1:5002/find", {
        marks: Number(mark),
        duration: Number(duration),
        subject: Number(subject),
      })
      .then((res) => {
        console.log("added", res.data);
        navigate("/result", { state: { tuts: res.data } });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Container>
      <Box py={5}>
        <Typography
          align="center"
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="35px"
        >
          {state.moduleTitle}
        </Typography>
      </Box>
      <Paper elevation={3} className={classes.paper}>
        <Stack direction={"row"} justifyContent="center">
          <img
            src={state.imgUrl}
            alt={"module"}
            className={classes.module_img}
          />
        </Stack>
      </Paper>
      {/* Instructions */}
      {start === false && (
        <Box my={4}>
          <Paper elevation={1} className={classes.instructions_wrapper}>
            <Stack
              direction={"column"}
              justifyContent={"space-between"}
              height="100%"
            >
              <Typography
                align="left"
                variant="h5"
                fontSize="28px"
                fontWeight="700"
                mb={3}
              >
                Quiz Instructions
              </Typography>
              <Box>
                <Typography align="left" variant="h6" mb={1}>
                  * This quiz has 20 questions.
                </Typography>
                <Typography align="left" variant="h6" mb={1}>
                  * Answer all questions.
                </Typography>
                <Typography align="left" variant="h6" mb={1}>
                  * Total marks for this quiz is 100.
                </Typography>
                <Typography align="left" variant="h6" mb={1}>
                  * After responding to a question, click on the "Next" button
                  at the bottom to go to the next question.
                </Typography>
                <Typography align="left" variant="h6" mb={1}>
                  * After responding to a question, click on the "Previous"
                  button at the bottom to go to the previous question.
                </Typography>
                <Typography align="left" variant="h6" mb={3}>
                  * After attempting the quiz you have to click the "Finish"
                  button.
                </Typography>
              </Box>
              <Stack direction={"row"} justifyContent={"center"}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#234e63",
                    fontSize: "20px",
                    "&:hover": {
                      backgroundColor: "#9bbccc",
                      color: "black",
                    },
                  }}
                  onClick={() => {
                    setActive(true);
                    setStart(true);
                  }}
                >
                  Start Quiz
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      )}
      {start === true && (
        <span>
          <Stack
            direction={"row"}
            justifyContent="center"
            mt={3}
            backgroundColor="#14a5c5"
            color={"white"}
            mb={-4}
          >
            <Typography fontSize={"35px"} fontWeight={"800"}>
              <Timer active={active} duration={null} onStop={handleTimerStop}>
                <Timecode />
              </Timer>
            </Typography>
          </Stack>
          <Quiz onTimerStop={() => setActive(false)} />
        </span>
      )}
    </Container>
  );
};

export default QuizPage;
