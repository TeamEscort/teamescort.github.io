import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/jobquiz";

const Question = (props) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  const handleSendValue = (ans) => {
    props.handleSendValue(ans);
  };

  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) => {
              handleSendValue(answerText);
              dispatch({ type: "SELECT_ANSWER", payload: answerText });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
