import { useContext, useEffect, useState } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/jobquiz";
import { Grid, Typography } from "@mui/material";
import axios from "axios";

export const Quizzes = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [answers, setAnswers] = useState([]);
  const [job,setJob]=useState("");

  const addToAnsArray = (val) => {
    console.log(val);
    const newAnsArray = [...answers, val];
    console.log(newAnsArray);

    setAnswers(newAnsArray);
    console.log(answers);
  };

  return (
    <div className="quiz">
      <div>
        {quizState.showResults && (
          <>
            <div className="results">
              <div className="congratulations">Your Results!</div>
              <br></br>
              <br></br>
              <div className="mark">
                <h2>
                  You've got {quizState.correctAnswersCount} of &nbsp;
                  {quizState.questions.length} right.
                </h2>
              </div>
              <br></br>
              <br></br>
              <div className="text-center">
                <h1>The top job role that matched your skills...</h1>
                <h2 style={{color:"#357b9c"}}>You can be a great :  {job}</h2>
              </div>
              <br></br>
              <br></br>
            </div>
            <div style={{ height: "210px" }}></div>
          </>
        )}
      </div>

      {!quizState.showResults && (
        <>
          <div>
            <Grid item>
              <Typography
                align="center"
                fontFamily="Playfair Display"
                sx={{
                  fontSize: "40px",
                  fontWeight: "900",
                  mt: "100px",
                  color: "#074a6b",
                }}
              >
                Complete the quiz
              </Typography>
            </Grid>

            <div className="score">
              <Typography
                align="center"
                fontFamily="Playfair Display"
                sx={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  mt: 30,
                  mb: 10,
                }}
              >
                Question {quizState.currentQuestionIndex + 1}/
                {quizState.questions.length}
              </Typography>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <bbr></bbr>
            <Question handleSendValue={addToAnsArray} />
            {quizState.currentAnswer && (
              <div
                onClick={() => {
                  dispatch({ type: "NEXT_QUESTION" });
                  console.log("vcbcnfn");
                  if (answers.length === 19 || answers.length === 20) {
                    const suggestion = { answers };
                  
                      axios
                      .post('http://127.0.0.1:5002/job', suggestion)
                      .then((res) => {
                        console.log("added", res.data);
                        setJob( res.data)
                      })
                      .catch((err) => {
                        console.log("err", err);
                      });
                  }
                }}
                className="next-button"
              >
                Next question
              </div>
            )}
            <br></br>
            <br></br>
          </div>
        </>
      )}
    </div>
  );
};

export default Quizzes;
