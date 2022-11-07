import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stack,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { useLocation } from "react-router-dom";

import csseQuiz from "./csse-questions.json";
import dbQuiz from "./db-questions.json";
import spmQuiz from "./spm-questions.json";
import ueeQuiz from "./uee-questions.json";

const useStyles = makeStyles({
  instructions_wrapper: {
    height: 350,
    backgroundColor: "#eeeeee66",
    padding: 24,
  },
  instruction_heading: {
    marginTop: 5,
    marginBottom: 5,
  },
});

const Quiz = ({ onTimerStop, elaspedTime }) => {
  const classes = useStyles();
  const { state } = useLocation();

  const [questions, setQuestions] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (state.moduleId === 1) setQuestions(dbQuiz);
    else if (state.moduleId === 2) setQuestions(csseQuiz);
    else if (state.moduleId === 3) setQuestions(spmQuiz);
    else if (state.moduleId === 4) setQuestions(ueeQuiz);

    localStorage.setItem("module", state.moduleId);
  }, []);

  const handleSelect = (e) => {
    let selectedAns = e.target.value;
    setSelectedAnswer(selectedAns);
  };
  const handleNextQuiz = () => {
    console.log("hello");
    setCurrentQuiz((prev) => prev + 1);
    let correctAns = questions[currentQuiz].correctAnswer;
    let ca = score;
    console.log("hi", correctAns);
    if (selectedAnswer === correctAns) {
      setScore((prev) => prev + 1);
      ca += 1;
      console.log("Score", ca);
    }
  };
  const handlePrevQuiz = () => {
    setCurrentQuiz((prev) => prev - 1);
  };
  const handleFinish = async () => {
    let correctAns = questions[currentQuiz].correctAnswer;
    let ca = score;
    if (selectedAnswer === correctAns) {
      setScore((prev) => prev + 1);
      ca += 1;
      console.log("Score", ca);
    }
    localStorage.setItem("score", ca);
    onTimerStop();
  };

  return (
    <Box my={4}>
      <Paper elevation={1} className={classes.instructions_wrapper}>
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          height="100%"
        >
          <Box height={"30%"} mt={2}>
            <Typography align="left" variant="h5">
              {questions.length > 0 && questions[currentQuiz].questionText}
            </Typography>
          </Box>
          <Box height={"70%"} mt={-2}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                value={selectedAnswer}
                onChange={handleSelect}
              >
                {questions.length > 0 &&
                  questions[currentQuiz].answerOptions.map((answer, index) => (
                    <>
                      <Typography align="left" variant="h3">
                        <FormControlLabel
                          key={answer + index}
                          value={answer}
                          control={
                            <Radio
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  fontSize: 23,
                                },
                              }}
                            />
                          }
                          label={answer}
                          labelProps={{
                            sx: {
                              fontSize: "14px",

                              lineHeight: "25px",
                              fontWeight: 400,
                              fontStyle: "normal",
                            },
                          }}
                        />
                      </Typography>
                    </>
                  ))}
              </RadioGroup>
            </FormControl>
          </Box>
          {questions.length > 0 && (
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box width={"50%"}></Box>
              <Stack
                direction={"row"}
                width={"60%"}
                justifyContent="space-between"
              >
                {currentQuiz >= 0 && currentQuiz < questions.length - 1 && (
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#045b6e",
                      width: "250px",
                      fontSize: "20px",
                      ml: 30,
                      "&:hover": {
                        backgroundColor: "#7cb7cc",
                        color: "black",
                      },
                    }}
                    onClick={handleNextQuiz}
                  >
                    Next
                  </Button>
                )}
                {currentQuiz === questions.length - 1 && (
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#777d80",
                      width: "250px",
                      fontSize: "20px",
                      ml: 30,
                      "&:hover": {
                        backgroundColor: "#bbc1c4",
                        color: "black",
                      },
                    }}
                    onClick={handleFinish}
                  >
                    Finish
                  </Button>
                )}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Quiz;
